var handle = {};
var server = require("./server"),
    router = require("./router"),
    requestHandlers = require("./requestHandlers");

handle["/price"] = requestHandlers.price;

var port = process.env.PORT || 3000;
server.start(router.route, handle, port);
