[![CircleCI](https://circleci.com/gh/andysumi/mantis-gas-client.svg?style=svg)](https://circleci.com/gh/andysumi/mantis-gas-client)

# mantis-gas-client

Google Apps Script用のMantis APIライブラリ

## スクリプトID

`1T_MgcLpTXHmv87JS9Q-QdBBjIDdaLhsna9vdVv1i274bdqSOorPlFdgu`

## 使い方

### 事前準備

- [ライブラリをプロジェクトに追加する](https://developers.google.com/apps-script/guides/libraries)
- MantisAPIトークンを取得する

### コードサンプル

```js
function myFunction() {
  var app = MantisClient.create(PropertiesService.getUserProperties().getProperty('TOKEN'));
  var res = app.getgetSpecificIssue(999);
  Logger.log(JSON.stringify(res, null , '\t'));
}
```

## リファレンス

[Mantis Bug Tracker REST API](https://documenter.getpostman.com/view/29959/mantis-bug-tracker-rest-api/7Lt6zkP?version=latest#5cf35ffd-964b-ef90-5907-bd6b3efe87d4)
