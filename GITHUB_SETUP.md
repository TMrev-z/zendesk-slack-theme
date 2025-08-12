# 🐙 GitHub経由でのZendeskテーマインポート手順

## 🚀 GitHub リポジトリ作成

### 1. GitHubでの新規リポジトリ作成

1. **GitHub にアクセス**: [github.com](https://github.com)
2. **新規リポジトリ作成**:
   - 右上の「+」→「New repository」
   - Repository name: `zendesk-slack-theme`
   - Description: `Slack-inspired Zendesk Guide theme with modern UI`
   - Visibility: **Public** (Zendesk インポート用)
   - **⚠️ 重要**: `Add a README file` は**チェックしない**（既存のREADME.mdを使用）

### 2. ローカルリポジトリをGitHubにプッシュ

```bash
# 現在のテーマディレクトリで実行
cd /Users/tmiyazaki/zendesk-slacklike-20250812-215255/theme-slacklike

# GitHubリポジトリをリモートとして追加（URLは作成したリポジトリのもの）
git remote add origin https://github.com/YOUR_USERNAME/zendesk-slack-theme.git

# メインブランチにプッシュ
git branch -M main
git push -u origin main
```

**コマンドの置き換え例**:
```bash
# 例: ユーザー名が「tmiyazaki」の場合
git remote add origin https://github.com/tmiyazaki/zendesk-slack-theme.git
git push -u origin main
```

---

## 📥 Zendesk での GitHub インポート

### 方法1: Zendesk CLI (zcli) 使用

```bash
# 1. テーマディレクトリで実行
cd /Users/tmiyazaki/zendesk-slacklike-20250812-215255/theme-slacklike

# 2. zcli でログイン
zcli login --subdomain markdownlite

# 3. GitHub からインポート
zcli themes:import https://github.com/YOUR_USERNAME/zendesk-slack-theme

# 4. プレビュー
zcli themes:preview --open

# 5. 公開（プレビューOK後）
zcli themes:publish
```

### 方法2: Zendesk管理画面 (推奨)

#### Step 1: 管理画面にアクセス
```
https://markdownlite.zendesk.com/admin/
```

#### Step 2: テーマセクションに移動
1. **Guide** → **テーマをカスタマイズ**
2. **テーマをインポート** をクリック

#### Step 3: GitHubリポジトリのインポート
1. **インポート方法**: 「GitHub」を選択
2. **リポジトリURL**: 作成したGitHubリポジトリのURL
   ```
   https://github.com/YOUR_USERNAME/zendesk-slack-theme
   ```
3. **ブランチ**: `main` (デフォルト)
4. **インポート** をクリック

#### Step 4: プレビューとテスト
1. インポート完了後、自動的にプレビューモード
2. 以下の機能をテスト:
   - ✅ Slack風デザインの表示
   - ✅ 検索機能
   - ✅ クイックリンク（FAQ、お知らせ、一般情報）
   - ✅ カテゴリカード
   - ✅ おすすめ記事セクション
   - ✅ レスポンシブデザイン（モバイル確認）

#### Step 5: 本番公開
1. プレビューで問題なければ
2. **公開** ボタンをクリック
3. 確認ダイアログで **OK**

---

## 🔄 テーマ更新とバージョン管理

### 今後のテーマ更新手順

```bash
# 1. ファイルを編集
# 2. 変更をコミット
git add .
git commit -m "feat: improve responsive design for mobile"

# 3. GitHubにプッシュ
git push origin main

# 4. Zendeskで再インポート
# 管理画面 → テーマをカスタマイズ → 更新 → GitHub同期
```

### ブランチ戦略（推奨）

```bash
# 開発用ブランチ作成
git checkout -b develop

# 機能開発
git checkout -b feature/improve-search

# 完了後、mainにマージ
git checkout main
git merge feature/improve-search
git push origin main
```

---

## 📝 リポジトリ構造

GitHub上のリポジトリは以下の構造になります:

```
zendesk-slack-theme/
├── README.md                    # テーマ説明（GitHub表示用）
├── SECURITY.md                  # セキュリティガイド
├── VALIDATION_REPORT.md         # テスト結果レポート
├── manifest.json                # Zendeskテーマ設定
├── .gitignore                   # Git除外設定
├── templates/                   # Handlebars テンプレート
│   ├── home_page.hbs           # トップページ
│   ├── header.hbs              # ヘッダー
│   └── document_head.hbs       # HTMLヘッダー
├── assets/
│   ├── stylesheets/
│   │   └── style.css           # メインスタイル
│   ├── scripts/
│   │   └── script.js           # JavaScript機能
│   └── icons/                  # SVGアイコン
│       ├── default.svg
│       ├── admin.svg
│       ├── getting-started.svg
│       └── troubleshooting.svg
├── settings/                   # Zendesk設定
└── translations/               # 多言語対応
```

---

## 🔐 セキュリティと権限

### GitHubリポジトリの設定

1. **Public リポジトリ**: Zendesk インポートに必要
2. **Sensitive データの除外**: 
   - APIトークン、認証情報は `.gitignore` で除外済み
   - 開発用スクリプトも除外済み

### 推奨セキュリティ設定

```bash
# GitHub リポジトリ設定
- Branch protection rules: main ブランチ保護
- Merge requirements: Pull request reviews
- Status checks: Required (今後CI/CDを追加する場合)
```

---

## 🎯 チェックリスト

### ✅ GitHub セットアップ完了項目

- [ ] GitHubアカウント準備
- [ ] 新規リポジトリ作成（Public設定）
- [ ] ローカルからリモートリポジトリ追加
- [ ] 初回プッシュ実行
- [ ] GitHub上でファイル確認

### ✅ Zendesk インポート完了項目

- [ ] Zendesk管理画面アクセス
- [ ] GitHub経由インポート実行
- [ ] プレビューでデザイン確認
- [ ] 機能テスト完了
- [ ] 本番公開実行

### ⚠️ セキュリティ完了項目

- [ ] APIトークン再発行
- [ ] 開発用認証情報クリア
- [ ] リポジトリ権限設定

---

**🎉 完了後は、GitHub経由で簡単にテーマ更新できます！**

*最終更新: 2025-08-12*