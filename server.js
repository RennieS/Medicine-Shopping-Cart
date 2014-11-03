var http = require("http"),
    url = require("url");

function start(route, handle, port) {
  function onRequest(request, response) {
    var parsed_url = url.parse(request.url);
    var pathname = parsed_url.pathname;
    var query = parsed_url.query;
    route(handle, pathname, query, response);
  }

  http.createServer(onRequest).listen(port);
  console.log("Server has started listening on port " + port);
}

exports.start = start;
