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

    MantisClient.prototype.getAllIssues = function (pageSize, pageNo) {
      var pSize = pageSize || 50;
      var pNo = pageNo || 1;
      var results = this.fetch_(Utilities.formatString('/issues?page_size=%d&page=%d', pSize,pNo), { 'method': 'get' });
      return results.issues;
    };

    MantisClient.prototype.getIssuesInProject = function (projectId) {
      if (!projectId) throw new Error('"projectId"は必須です');

      var results = this.fetch_(Utilities.formatString('/issues?project_id=%d', projectId), { 'method': 'get' });
      return results.issues;
    };

    MantisClient.prototype.getIssuesMatchedFilter = function (filter) {
      if (!filter) throw new Error('"filter"は必須です');

      var results = this.fetch_(Utilities.formatString('/issues?filter_id=%s', filter), { 'method': 'get' });
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
