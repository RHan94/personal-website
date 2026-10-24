# Personal Website

Minghan Xu 的個人網站，靜態 HTML/CSS/JS，透過 GitHub Actions 自動部署到 Cloudflare Workers。

🔗 https://xuhan.dev

## 開發流程（GitHub flow）

1. 從 `main` 建立 feature branch：`git checkout -b feature/xxx`
2. 修改後 commit、push
3. 開 Pull Request，等 CI（HTML lint）通過
4. Review 沒問題後 merge 進 `main`
5. merge 後自動觸發部署到 Cloudflare Workers（xuhan.dev）

## CI/CD

- `.github/workflows/ci.yml`：PR 與 push 到 main 時做 HTML lint
- `.github/workflows/deploy.yml`：push 到 main 時用 wrangler 部署 `public/`（需 secrets：`CLOUDFLARE_API_TOKEN`、`CLOUDFLARE_ACCOUNT_ID`）

## 私有 API（`/api/holdings`）

網站其餘部分是靜態資源，只有 `/api/*` 由 `src/worker.js` 處理。

- `GET /api/holdings` 回傳 `{"dad": 股數, "mom": 股數}`，`PUT` 以相同格式更新（非負整數）。
- 資料存在 Workers KV（binding `HOLDINGS`），**不進 git**；存取需要 `Authorization: Bearer <token>`，token 存為 Worker secret `API_TOKEN`。
- 首次設定：`wrangler kv namespace create HOLDINGS`，把回傳的 id 填進 `wrangler.jsonc`；再 `wrangler secret put API_TOKEN`。
