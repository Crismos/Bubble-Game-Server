"use strict"

var clientEventReciever = function(socketio) {

	socketio.io.on('connection', function (socket) {
		console.log("user connected");
  		socket.on('disconnect', function () {
	    	socketio.io.emit('user disconnected');
	  	});
	});
}

module.exports = clientEventReciever;