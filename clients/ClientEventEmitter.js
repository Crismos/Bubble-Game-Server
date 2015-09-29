"use strict"

var clientEventEmitter = function(socketio) {
	this.emit = function(socket, variable, obj) {
		socket.emit(variable, obj);
	}
}

module.exports = clientEventEmitter;