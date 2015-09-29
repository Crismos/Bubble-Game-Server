"use strict"

var serverEventReciever = function() {
	this.listen = function(socket, variable, fct) {
		socket.on(variable, fct);
	}
}

module.exports = serverEventReciever;