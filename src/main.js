/**
 * Mantis Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @return {MantisClient} Mantis Clientのインスタンス
 */
function create(token) { // eslint-disable-line no-unused-vars
  return new MantisClient(token);
}

/**
 * 特定のIssueの情報を取得する
 * @param {Integer} issueId 【必須】IssueのID
 * @return {Object} Issueのオブジェクト
 */
function getSpecificIssue(issueId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * すべてのIssueの情報を取得する
 * @param {Integer} pageSize 【任意】1ページに返されるIssueの数。デフォルトは50
 * @param {Integer} pageNo 【任意】ページ番号。デフォルトは1
 * @return {Array} Issueのオブジェクトの配列
 */
function getAllIssues(issueId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 特定のプロジェクト内のIssueの情報を取得する
 * @param {Integer} projectId 【必須】ProgectのID
 * @return {Array} Issueのオブジェクトの配列
 */
function getIssuesInProject(projectId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 特定のフィルターにマッチしたIssueの情報を取得する
 * @param {Integer} filterId 【必須】filterのID
 * @return {Array} Issueのオブジェクトの配列
 */
function getIssuesMatchedFilter(filterId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
