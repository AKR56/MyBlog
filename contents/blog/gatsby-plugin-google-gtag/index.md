---
title: "GatsbyサイトにGoogleアナリティクスを導入する"
date: "2021-05-31"
tags: ["Gatsby", "Google"]
description: "プラグインを使って簡単にgtagを設定できます。"
hero: "whale.jpg"
---

# Googleアナリティクスを利用するには
[Googleマーケティングプラットフォーム](https://marketingplatform.google.com/intl/ja/about/analytics/)上でGoogleアナリティクスの利用登録をし、発行されたトラッキングIDをgtag.jsに設定することで利用を開始できます。  

# gtag.jsとは
> グローバル サイトタグ（gtag.js）は、Google アナリティクス、Google 広告、Google マーケティング プラットフォームにイベントデータを送信できる、JavaScript のタグ設定フレームワークおよび API です。  
[サイトに gtag.js を追加する | Googleアナリティクス](https://developers.google.com/analytics/devguides/collection/gtagjs?hl=ja)  

# SPAでgtagを使うときの注意
gtag.jsはページのheadに埋め込むことでサイト上の各ページ毎に読み込まれて動作しますが、GatsbyのようなSPAではその方法では想定の動作にはなりません。  
> このアプリケーションは通常、アドレスバーの URL を更新することで従来のページ移動をエミュレートしますが、最初の読み込み以降にページ全体の読み込みがリクエストされることはありません。  
[gtag.js を使用した単一ページ アプリケーションの測定 | Googleアナリティクス](https://developers.google.com/analytics/devguides/collection/gtagjs/single-page-applications?hl=ja)  

# Gatsbyサイトでgtagを導入するためのプラグイン
今回利用するのは[gatsby-plugin-google-gtag](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)です。  
このプラグインをインストール後、後述のようにgatsby-config.jsに設定を追加すれば簡単にgtagを導入することができます。  

# gatsby-config.jsに設定を追加
```js:title=gatsby-config.js
...
{
  resolve: `gatsby-plugin-google-gtag`,
  options: {
    trackingIds: [ `G-XXXXXXXXX` ],
    pluginConfig: {
      head: true,
    },
  },
},
...
```
以上でheadにgtag.jsが含まれるようになり、Googleアナリティクスを導入することができました。  

# 開発中の注意
今回利用したgatsby-plugin-google-gtagプラグインは開発ビルドでは動作しません。  
動作を確認するためには本番ビルドを実行する必要があります。  
> NOTE: This plugin only works in production mode! To test your Global Site Tag is installed and firing events correctly run: gatsby build && gatsby serve.  
> （このプラグインは本番モードでのみ動作します！gtagがインストールされイベントが正しく発生しているかを確認するには以下を実行してください:gatsby build && gatsby serve）  
[gatsby-plugin-google-gtag | Gatsby](https://www.gatsbyjs.com/plugins/gatsby-plugin-google-gtag/)  