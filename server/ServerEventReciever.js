"use strict"

var serverEventReciever = function(connection) {
	connection.socket.on('connect', function(socket) { 
	  	console.log('Connected!');
	});
}

module.exports = serverEventReciever;