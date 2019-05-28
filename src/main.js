/**
 * Mantis Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @return {MantisClient} Mantis Clientのインスタンス
 */
function create(token) { // eslint-disable-line no-unused-vars
  return new MantisClient(token);
}
