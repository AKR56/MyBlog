---
title: "GatsbyでFontAwesomeを使用する手順"
date: "2021-05-29"
tags: ["Gatsby"]
description: "GatsbyでFontAwesomeを使用するために必要なパッケージや手順を解説します。"
hero: "seagulls-and-chairs.jpg"
---

# 使用できるようになるアイコン
[FontAwesome](https://fontawesome.com/)の公式サイトからIconsのページで一覧を確認できます。  

# 必須パッケージ
GatsbyでFontAwesomeアイコンを使用するには下記のパッケージと、後述するアイコンの種類毎のパッケージが必要になります。  
- @fortawesome/fontawesome-svg-core
- @fortawesome/react-fontawesome

# 必要に応じて使用するパッケージ
FontAwesome(のFree枠)には reguluer, solid, brands の3種類があり、アイコンを使用する際のパッケージもそれぞれで分かれています。  
まとめてインストールしてしまってもいいかもしれませんが、基本的には使用するものだけをインストールすることをおすすめいたします。  
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-solid-svg-icons

# アイコンを使用したいファイルでインポート
今回の場合、gatsby-config.jsで何かを設定する必要はありません。  
他のコンポーネントと同じようにファイルの頭でインポートして使用します。  
使用したいアイコンはその種類のパッケージでひとつずつ指定し、FontAwesomeIconコンポーネントに渡してやる必要があります。  
また使用するアイコン名はキャメルケースで指定する必要があります。  

```js:title=src/index.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from '@fortawesome/free-regular-svg-icons';
...
<FontAwesomeIcon icon={faEdit} />
...
```
これでアイコンが表示されるようになりました。  

# 本番ビルドをするとページ読み込み時にアイコンが大きく表示される問題の解決策
デプロイした後に気付いたので修正しました。  
gatsby-browser.jsファイルで下記の一文を追加して先にアイコンを読み込ませれば問題なく表示されるようになりました。簡単でしたね。  
```js:gatsby-browser.js
import "@fortawesome/fontawesome-svg-core/styles.css"
```
  