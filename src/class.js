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

    MantisClient.prototype.createIssue = function (summary, description, projectName, categoryName, options) {
      if (!summary) throw new Error('"summary"は必須です');
      if (!description) throw new Error('"description"は必須です');
      if (!projectName) throw new Error('"projectName"は必須です');
      if (!categoryName) throw new Error('"categoryName"は必須です');

      var issue = {
        summary: summary,
        description: description,
        project: {
          name: projectName
        },
        category: {
          name: categoryName
        }
      };
      for (var key in options) {
        issue[key] = options[key];
      }

      var results = this.fetch_('/issues', { method: 'post', payload: issue });
      return results.issue;
    };

    MantisClient.prototype.updateIssue = function (issueId, statusName, handlerName, options) {
      if (!issueId) throw new Error('"issueId"は必須です');

      var issue = {};
      if (statusName) {
        issue['status'] = {};
        issue['status']['name'] = statusName;
      }
      if (handlerName) {
        issue['handler'] = {};
        issue['handler']['name'] = handlerName;
      }
      for (var key in options) {
        issue[key] = options[key];
      }

      var results = this.fetch_(Utilities.formatString('/issues/%d', issueId), { method: 'patch', payload: issue });
      return results.issues[0];
    };

    MantisClient.prototype.deleteIssue = function (issueId) {
      if (!issueId) throw new Error('"issueId"は必須です');

      var results = this.fetch_(Utilities.formatString('/issues/%d', issueId), { 'method': 'delete' });
      return results;
    };

    MantisClient.prototype.fetch_ = function (endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': JSON.stringify(options.payload) || {}
      });

      try {
        return JSON.parse(response.getContentText('utf-8'));
      } catch(e) {
        return response.getContentText('utf-8');
      }
    };

    return MantisClient;
  })();
  return global.MantisClient = MantisClient;
})(this);
