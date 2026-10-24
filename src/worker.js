// Private holdings endpoint. Everything else is served as static assets (see wrangler.jsonc).
// Holdings live in KV (binding HOLDINGS), never in git; the bearer token is the Worker secret API_TOKEN.

const KEY = "holdings";
const JSON_HEADERS = { "content-type": "application/json", "cache-control": "no-store" };

const json = (body, status = 200) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

// Compare through SHA-256 digests so the check does not depend on where the strings differ.
async function tokenMatches(request, secret) {
  if (!secret) return false;
  const given = (request.headers.get("authorization") || "").replace(/^Bearer\s+/i, "");
  const enc = new TextEncoder();
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", enc.encode(given)),
    crypto.subtle.digest("SHA-256", enc.encode(secret)),
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

const isShares = (n) => Number.isSafeInteger(n) && n >= 0;

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);
    if (pathname !== "/api/holdings") return json({ error: "not found" }, 404);
    if (!env.HOLDINGS || !env.API_TOKEN) return json({ error: "not configured" }, 503);
    if (!(await tokenMatches(request, env.API_TOKEN))) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
        headers: { ...JSON_HEADERS, "www-authenticate": "Bearer" },
      });
    }

    if (request.method === "GET") {
      const stored = await env.HOLDINGS.get(KEY, "json");
      return json({ dad: stored?.dad ?? 0, mom: stored?.mom ?? 0 });
    }

    if (request.method === "PUT") {
      let body;
      try { body = await request.json(); } catch { return json({ error: "invalid json" }, 400); }
      if (!body || !isShares(body.dad) || !isShares(body.mom)) {
        return json({ error: "dad and mom must be non-negative integers" }, 400);
      }
      await env.HOLDINGS.put(KEY, JSON.stringify({ dad: body.dad, mom: body.mom }));
      return json({ ok: true });
    }

    return new Response(JSON.stringify({ error: "method not allowed" }), {
      status: 405,
      headers: { ...JSON_HEADERS, allow: "GET, PUT" },
    });
  },
};
