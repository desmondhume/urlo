function isEmpty(object) {
  for(var prop in object) { return!1; }
  return!0;
}

function toQueryString(data) {
  var queryString = '?';
  for (var param in data) {
    if (data.hasOwnProperty(param)) {
      queryString += param + '=' + data[param] + '&';
    }
  }
  return queryString.slice(0, queryString.length-1);
}

function composeUrl(urlString, data) {
    if (typeof data != 'object') {
      console.warn('data must be an object');
      return false;
    };

    var queryString = {};

    if (isEmpty(data)) {
      return urlString;
    } else {
      for (var key in data) {
        if (new RegExp('\/:'+key+'(\/|\.|$)').test(urlString)) {
          urlString = urlString.replace(':'+key, data[key]);
        } else {
          queryString[key] = data[key];
        }
      }
      if (!isEmpty(queryString)) {
        urlString += toQueryString(queryString);
      }
      return urlString;
    }
  }

module.exports = composeUrl;
