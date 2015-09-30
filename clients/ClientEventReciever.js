"use strict"

var clientEventReciever = function(socketio) {
	this.listen = function(socket, variable, fct) {
		socket.on(variable, fct);
	}
}

module.exports = clientEventReciever;