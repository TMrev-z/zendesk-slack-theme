# Zendesk Slack-like Theme プロジェクト概要

## プロジェクト情報

### 基本情報
- **プロジェクト名**: Zendesk Slack-like Theme
- **作成日**: 2025年8月12日
- **目的**: ZendeskのGuideテーマをSlack風のデザインにカスタマイズ
- **現在のステータス**: GitHub統合でのアセット問題により一時停止

### フォルダ構造

```
/Users/tmiyazaki/zendesk-slacklike-20250812-215255/theme-slacklike/
├── manifest.json                    # テーマ設定ファイル
├── PROJECT_SUMMARY.md              # このファイル
├── README.md                       # プロジェクト説明
├── GITHUB_SETUP.md                 # GitHub設定ガイド
├── VALIDATION_REPORT.md            # 検証レポート
├── script.js                       # ルートレベルスクリプト（検証用）
├── assets/                         # アセットファイル群
│   ├── script.js                   # メインJavaScript (1.5KB)
│   ├── style.css                   # メインCSS (76KB)
│   ├── icons/                      # SVGアイコン
│   │   ├── admin.svg
│   │   ├── default.svg
│   │   ├── getting-started.svg
│   │   └── troubleshooting.svg
│   ├── scripts/                    # オリジナルスクリプト
│   │   └── script.js
│   └── stylesheets/               # オリジナルスタイル
│       └── style.css
└── templates/                     # Handlebarsテンプレート (23ファイル)
    ├── document_head.hbs          # HTMLヘッダー部分
    ├── header.hbs                 # サイトヘッダー
    ├── footer.hbs                 # サイトフッター
    ├── home_page.hbs              # ホームページ
    ├── article_page.hbs           # 記事ページ
    ├── category_page.hbs          # カテゴリページ
    ├── section_page.hbs           # セクションページ
    ├── search_results.hbs         # 検索結果
    ├── error_page.hbs             # エラーページ
    ├── user_profile_page.hbs      # ユーザープロフィール
    ├── contributions_page.hbs     # 貢献履歴
    ├── request_page.hbs           # リクエスト詳細
    ├── requests_page.hbs          # リクエスト一覧
    ├── new_request_page.hbs       # 新規リクエスト作成
    ├── submit_request_page.hbs    # リクエスト送信
    ├── community_post_list_page.hbs    # コミュニティ投稿一覧
    ├── community_post_page.hbs         # コミュニティ投稿詳細
    ├── community_topic_list_page.hbs   # コミュニティトピック一覧
    ├── community_topic_page.hbs        # コミュニティトピック詳細
    ├── new_community_post_page.hbs     # 新規コミュニティ投稿
    ├── subscriptions_page.hbs          # 購読管理（ダミー）
    ├── organization_requests_page.hbs  # 組織リクエスト一覧（ダミー）
    └── organization_request_page.hbs   # 組織リクエスト詳細（ダミー）
```

## GitHubリポジトリ情報

- **リポジトリURL**: https://github.com/TMrev-z/zendesk-slack-theme
- **ブランチ**: main
- **現在のコミット**: 7d08312
- **アクセス**: Public

## 発生した問題と解決の試行錯誤

### 1. 初期セットアップ段階
**問題**: 基本的なテンプレートファイル不足
- **エラー**: `templates/article_page.hbs not found`
- **解決**: 必要なテンプレートファイルを順次作成

### 2. テンプレート追加段階
**問題**: 複数のテンプレートファイルが順次要求される
- **発生したエラー**:
  - `templates/community_post_list_page.hbs not found`
  - `templates/community_post_page.hbs not found`
  - `templates/community_topic_list_page.hbs not found`
  - `templates/community_topic_page.hbs not found`
  - `templates/contributions_page.hbs not found`
  - `templates/error_page.hbs not found`
  - `templates/footer.hbs not found`
- **解決**: 各テンプレートを順次作成し、GitHubにプッシュ

### 3. 追加テンプレート段階
**問題**: さらなるテンプレートファイルが要求
- **エラー**: 
  - `templates/new_request_page.hbs not found`（メインエラー）
  - `templates/requests_page.hbs not found`
- **解決**: 包括的なフォーム機能を持つテンプレートを作成

### 4. ダミーテンプレート段階
**問題**: 購読・組織関連テンプレートが不足
- **エラー**:
  - `templates/subscriptions_page.hbs not found`
  - `templates/organization_requests_page.hbs not found`
  - `templates/organization_request_page.hbs not found`
- **解決**: 最小限のダミーテンプレートを作成

### 5. アセット参照問題（メイン課題）
**問題**: JavaScriptとCSSファイルが見つからない
- **エラー**: `このファイルscript.jsが見つかりませんでした`
- **試行した解決策**:
  - `assets/script.js`ダミーファイル作成
  - `assets/`直下への複製
  - `document_head.hbs`での参照パス修正
  - manifest.jsonへのassets宣言追加
  - 参照の一時的無効化

### 6. manifest.json問題
**問題**: assets宣言がAPI v2で許可されない
- **エラー**: `The property '#/' contains additional properties ["assets"] outside of the schema`
- **解決**: assets宣言を削除し、自動検出に依存

### 7. 最終的なアセット問題（未解決）
**問題**: GitHub統合でのアセット参照がサポートされていない
- **エラー**: `このファイルstyle.cssが見つかりませんでした`
- **最終対応**: アセット参照を完全に削除してテーマ構造のみで動作確認

## 学習した重要なポイント

### Zendeskテーマ開発について
1. **テンプレートファイルは段階的に要求される**: 最初のエラーを直すと次のエラーが現れる
2. **完全なテンプレートセットが必要**: 23個すべてのテンプレートが最終的に必要
3. **ダミーファイルでも通る**: 実装されていなくても基本構造があれば検証に通る

### Zendesk GitHub統合について
1. **直接アセット参照は非対応**: `{{asset 'style.css'}}`形式が機能しない
2. **Copenhagen テーマがベストプラクティス**: 公式テーマを参考にする必要
3. **バンドルファイルが推奨**: ビルドプロセスを通したファイルが必要
4. **manifest.json API v2制約**: assets宣言は許可されない

### GitHubワークフローについて
1. **段階的コミット**: 問題を1つずつ解決してコミット
2. **詳細なコミットメッセージ**: 何を修正したか明確に記録
3. **バックアップの重要性**: 動作する状態を保存しておく

## 現在の状態

### ✅ 完了済み
- [x] 23個すべてのテンプレートファイル作成
- [x] 基本的なSlackスタイルデザイン
- [x] レスポンシブ対応CSS（76KB）
- [x] インタラクティブJavaScript機能
- [x] GitHubリポジトリセットアップ
- [x] 包括的なフォーム機能（リクエスト作成、コミュニティ投稿）

### ❌ 未解決の問題
- [ ] GitHub統合でのCSS/JavaScript読み込み
- [ ] アセットファイルの適切な参照方法
- [ ] スタイリングの実装（現在無効化状態）

## 次のステップ（将来的な解決策）

### 1. インラインCSS/JavaScript アプローチ
- `document_head.hbs`に`<style>`タグで直接CSS記述
- `<script>`タグで直接JavaScript記述
- 段階的に機能を追加

### 2. Copenhagen テーマ研究
- 公式テーマのビルドプロセス分析
- Rollupを使ったバンドル方式の採用
- モジュール化された構造への移行

### 3. 代替デプロイ方法
- ZIP直接アップロード方式への回帰
- Zendesk管理画面での直接編集
- GitHub統合以外の方法検討

## ファイルサイズ情報

- **CSS**: 76KB（5,200+ 行）
- **JavaScript**: 1.5KB（65行）
- **テンプレート**: 23ファイル、総計約3,000行
- **総プロジェクトサイズ**: 約100KB

## 連絡先・参考情報

### 重要なリンク
- GitHub Repository: https://github.com/TMrev-z/zendesk-slack-theme
- Zendesk GitHub Integration: https://support.zendesk.com/hc/ja/articles/4408832476698
- Copenhagen Theme: https://github.com/zendesk/copenhagen_theme

### 今後の参考
このプロジェクトは、Zendesk Guide テーマ開発とGitHub統合の複雑さを理解する上で貴重な学習材料となりました。特にアセット管理の課題は、多くの開発者が直面する問題であり、解決策の文書化が重要です。

---

*最終更新: 2025年8月13日*
*ステータス: 一時停止（GitHub統合アセット問題により）*