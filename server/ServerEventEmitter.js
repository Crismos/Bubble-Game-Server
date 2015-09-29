"use strict"

var serverEventEmitter = function() {
	this.emit = function(socket, variable, obj) {
		socket.emit(variable, obj);
	}
}

module.exports = serverEventEmitter;