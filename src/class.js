(function (global) {
  var MantisClient = (function () {
    function MantisClient(token) {
      this.apiUrl = 'https://nohana.mantishub.io/api/rest';
      this.headers = { 'Authorization': token };
      if (!token) throw new Error('"token"は必須です');
    }

    MantisClient.prototype.getSpecificIssue = function (issueId) {
      if (!issueId) throw new Error('"issueId"は必須です');

      var results = this.fetch_(Utilities.formatString('/issues/%d', issueId), { 'method': 'get' });
      return results.issues[0];
    };

    MantisClient.prototype.getIssues = function (projectId, filter, pageSize, pageNo) {
      var params = {};
      if (projectId) params['project_id'] = projectId;
      if (filter) params['filter_id'] = filter;
      if (pageSize) params['page_size'] = pageSize;
      if (pageNo) params['page'] = pageNo;
      var paramStr = (function (obj) {
        var tmp = [];
        for (var key in obj) {
          tmp.push(Utilities.formatString('%s=%s', key, encodeURI(obj[key])));
        }
        return tmp.join('&');
      })(params);

      var results = this.fetch_(Utilities.formatString('/issues?%s', paramStr), { 'method': 'get' });
      return results.issues;
    };

    MantisClient.prototype.fetch_ = function (endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': options.payload || {}
      });
      return JSON.parse(response.getContentText('utf-8'));
    };

    return MantisClient;
  })();
  return global.MantisClient = MantisClient;
})(this);
