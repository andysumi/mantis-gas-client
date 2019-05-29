/**
 * Mantis Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @return {MantisClient} Mantis Clientのインスタンス
 */
function create(token) { // eslint-disable-line no-unused-vars
  return new MantisClient(token);
}

/**
 * Issueの情報を取得する
 * @param {Integer} issueId 【必須】IssueのID
 * @return {Object} Issueのオブジェクト
 */
function getSpecificIssue(issueId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
