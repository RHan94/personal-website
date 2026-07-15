# Personal Website

Minghan Xu 的個人網站，靜態 HTML/CSS/JS，透過 GitHub Actions 自動部署到 GitHub Pages。

🔗 https://rhan94.github.io/personal-website/

## 開發流程（GitHub flow）

1. 從 `main` 建立 feature branch：`git checkout -b feature/xxx`
2. 修改後 commit、push
3. 開 Pull Request，等 CI（HTML lint）通過
4. Review 沒問題後 merge 進 `main`
5. merge 後自動觸發部署到 GitHub Pages

## CI/CD

- `.github/workflows/ci.yml`：PR 與 push 到 main 時做 HTML lint
- `.github/workflows/deploy.yml`：push 到 main 時自動部署到 GitHub Pages
