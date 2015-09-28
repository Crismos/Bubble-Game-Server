var events = require("./clients/io.js");

var cConnection = function(port) {

	var io = new events(port);
}

module.exports = cConnection;