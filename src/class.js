(function (global) {
  var MantisClient = (function () {
    function MantisClient(token) {
      this.apiUrl = 'https://nohana.mantishub.io/api/rest';
      this.headers = { 'Authorization': token };
      if (!token) throw new Error('"token"は必須です');
    }

    return MantisClient;
  })();
  return global.MantisClient = MantisClient;
})(this);
