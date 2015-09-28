var events = require("./server/io.js");

var sConnection = function(addr) {
	new events(addr);
}

module.exports = sConnection;