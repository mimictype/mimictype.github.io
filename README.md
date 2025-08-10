# mimictype 公式サイト

このリポジトリは、mimictype公式サイトのソースコードを管理しています。

## 開発環境のセットアップ

```bash
# 依存パッケージのインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# GitHub Pagesへのデプロイ
npm run deploy
```

## 技術スタック

- React
- Vite
- GitHub Pages

## デザイン仕様

- 背景色：#262626
- 文字色：#FFFFFF
- ブランドイメージ色：#D396ED
- ブランドアクセント色：#96B4ED

## ディレクトリ構造

```
/
├── public/           # 静的ファイル
│   ├── CNAME         # カスタムドメイン設定
│   └── logo_512x256.PNG  # ロゴファイル
├── src/              # ソースコード
│   ├── components/   # Reactコンポーネント
│   ├── assets/       # アセットファイル
│   ├── App.jsx       # メインコンポーネント
│   └── main.jsx      # エントリーポイント
├── 設計.md           # サイト設計ドキュメント
└── package.json      # プロジェクト設定
```
