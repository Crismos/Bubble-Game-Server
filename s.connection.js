var io = require('socket.io-client');

var sConnection = function(addr) {
	var socket = io.connect(addr, {reconnect: true});

	socket.on('connect', function(socket) { 
	  console.log('Connected!');
	});
}

module.exports = sConnection;