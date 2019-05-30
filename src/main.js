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
 * 条件に該当するIssueの情報を取得する
 * @param {Integer} projectId 【必須】ProgectのID
 * @param {String} filter 【必須】filterのID or "assigned" or "reported" or "monitored" or "unassigned"
 * @param {Integer} pageSize 【任意】1ページに返されるIssueの数。デフォルトは50
 * @param {Integer} pageNo 【任意】ページ番号。デフォルトは1
 * @return {Array} Issueのオブジェクトの配列
 */
function getIssues(projectId, filter, pageSize, pageNo) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを作成する
 * @param {String} summary 【必須】要約
 * @param {String} description 【必須】説明
 * @param {String} project 【必須】プロジェクト
 * @param {String} category 【必須】カテゴリ
 * @param {Object} options 【任意】その他の項目
 * @return {Object} Issueのオブジェクト
 */
function createIssue(summary, description, project, category, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを更新する
 * @param {Integer} issueId 【必須】IssueのID
 * @param {String} statusName 【任意】ステータス
 * @param {String} handlerName 【任意】担当者名
 * @param {Object} options 【任意】その他の項目
 * @return {Object} Issueのオブジェクト
 */
function updateIssue(issueId, statusName, handlerName, options) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * Issueを削除する
 * @param {Integer} issueId 【必須】IssueのID
 * @return {Object} Issueのオブジェクト
 */
function deleteIssue(issueId) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
