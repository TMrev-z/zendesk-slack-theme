# 🎨 Slack-like Zendesk Theme

[![Zendesk Guide](https://img.shields.io/badge/Zendesk-Guide%20Theme-green.svg)](https://www.zendesk.com/guide/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Made with](https://img.shields.io/badge/Made%20with-Claude%20Code-purple.svg)](https://claude.ai/code)

モダンなSlackスタイルのZendesk Guideテーマ。クリーンなデザインと優れたユーザーエクスペリエンスを提供します。

![Theme Preview](https://via.placeholder.com/800x400/007a5a/ffffff?text=Slack-like+Zendesk+Theme+Preview)

## ✨ 特徴

- **🎨 Slack風のクリーンなデザイン**: Slackアプリのようなモダンで使いやすいUI
- **レスポンシブ対応**: モバイルデバイスでも見やすい設計
- **おすすめ記事機能**: "featured"ラベル付きの記事を自動表示
- **カテゴリアイコン**: カテゴリごとにカスタムアイコンを設定可能
- **🔍 検索機能強化**: 大きな検索バーとクイックリンク

## 🚀 クイックスタート

### GitHub経由でのインポート（推奨）

1. **Zendeskにログイン**: `https://YOUR_SUBDOMAIN.zendesk.com/admin/`
2. **テーマインポート**: Guide → テーマをカスタマイズ → テーマをインポート
3. **GitHub URL入力**: このリポジトリのURL
4. **プレビュー確認**: デザインと機能をテスト
5. **本番公開**: 問題なければ公開ボタンをクリック

### ローカル開発

```bash
# リポジトリクローン
git clone https://github.com/YOUR_USERNAME/zendesk-slack-theme.git
cd zendesk-slack-theme

# Zendesk CLI使用
zcli login --subdomain YOUR_SUBDOMAIN
zcli themes:preview --open
```

## 📋 必要な設定

### おすすめ記事の設定
1. Zendesk管理画面で記事を編集
2. ラベルに「**featured**」を追加
3. 自動的にトップページに表示されます

### カテゴリアイコンの設定
`assets/scripts/script.js` の `iconMap` を編集:
```javascript
var iconMap = {
  "YOUR_CATEGORY_ID": "icons/getting-started.svg",
  "ANOTHER_CATEGORY_ID": "icons/admin.svg",
};
```

## 🎨 カスタマイズ

### カラーパレット
- **メインカラー**: `#007a5a` (Slack緑)
- **アクセント**: `#1264a3` (Slack青)  
- **テキスト**: `#1d1c1d` (濃いグレー)
- **セカンダリ**: `#5e6a75` (ライトグレー)

## 📁 ファイル構成

```
theme-slacklike/
├── manifest.json                 # テーマの設定
├── templates/
│   ├── home_page.hbs            # トップページ
│   ├── header.hbs               # ヘッダー
│   └── document_head.hbs        # HTMLヘッダー
├── assets/
│   ├── stylesheets/
│   │   └── style.css            # メインスタイル
│   ├── scripts/
│   │   └── script.js            # JavaScript機能
│   └── icons/
│       ├── default.svg          # デフォルトアイコン
│       ├── getting-started.svg  # スタートガイドアイコン
│       ├── admin.svg            # 管理者ガイドアイコン
│       └── troubleshooting.svg  # トラブルシューティングアイコン
├── settings/
├── translations/
└── README.md                    # このファイル
```

## セットアップ手順

1. **Zendeskにログイン**
   ```bash
   zcli login --subdomain YOUR_SUBDOMAIN
   ```

2. **テーマのプレビュー**
   ```bash
   zcli themes:preview --open
   ```

3. **テーマの公開**（プレビューで問題なければ）
   ```bash
   zcli themes:publish
   ```

## カスタマイズ方法

### おすすめ記事の設定
1. Zendesk管理画面で記事を編集
2. 記事に「featured」ラベルを追加
3. 自動的にトップページの「おすすめ記事」セクションに表示されます

### カテゴリアイコンの設定
1. `assets/scripts/script.js`の`iconMap`を編集
2. カテゴリIDと対応するアイコンファイル名を設定
```javascript
var iconMap = {
  "360000000001": "icons/getting-started.svg",
  "360000000002": "icons/admin.svg",
  // 追加のマッピング...
};
```

### クイックリンクの設定
1. `templates/home_page.hbs`を編集
2. YYYYYとZZZZZを実際のセクションIDに置換

### ブランドカラーの変更
1. `assets/stylesheets/style.css`の色の値を編集
2. 主要な色の定義:
   - `#007a5a`: メインブランドカラー（緑）
   - `#1264a3`: アクセントブランドカラー（青）
   - `#1d1c1d`: テキストカラー（黒）
   - `#5e6a75`: セカンダリテキスト（グレー）

## 技術仕様

- **Zendesk API Version**: v2
- **対応ロケール**: ja (日本語)
- **ブラウザサポート**: モダンブラウザ（Chrome, Firefox, Safari, Edge）
- **レスポンシブ**: 768px以下でモバイル表示

## トラブルシューティング

### おすすめ記事が表示されない
- Zendesk側で記事に「featured」ラベルが付いているか確認
- ブラウザの開発者ツールでAPIエラーがないか確認

### カテゴリアイコンが表示されない
- アイコンファイルが正しくアップロードされているか確認
- `iconMap`のカテゴリIDが正しいか確認

### レイアウトが崩れる
- ブラウザのキャッシュをクリア
- CSSファイルが正しく読み込まれているか確認

## 注意事項

- 本テーマはCopenhagen テーマをベースに作成されています
- APIトークンは使用後に再発行することを推奨します
- 本番環境での公開前に十分なテストを実施してください