# Slack-like Zendesk Theme

このテーマはZendesk Guide用のSlack風デザインテーマです。

## 特徴

- **Slack風のクリーンなデザイン**: Slackアプリのようなモダンで使いやすいUI
- **レスポンシブ対応**: モバイルデバイスでも見やすい設計
- **おすすめ記事機能**: "featured"ラベル付きの記事を自動表示
- **カテゴリアイコン**: カテゴリごとにカスタムアイコンを設定可能
- **検索機能強化**: 大きな検索バーとクイックリンク

## ファイル構成

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