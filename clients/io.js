"use strict"

var EventEmitter = require("./ClientEventEmitter");
var EventReciever = require("./ClientEventReciever");

var IO = function(port) {
	var modules = {};
	var sockets = {};

	var io = require("socket.io")(port);
	console.log("Listening port "+port);

	var eventEmitter = new EventEmitter(this);
	var eventReciever = new EventReciever(this);

	this.emit = function(variable, object) {
		eventEmitter.emit(socket, variable, object);
	}
	this.bind = function(variable, fct, socket) {
		fct = fct || function(){};
		if(!socket) {
			eventReciever.listen(io, variable, fct);
		} else {
			eventReciever.listen(socket, variable, fct);
		}
	}
	this.addModule = function(module) {
		if(module) {
			var moduleLib = require("./modules/"+module);
			modules[module] = new moduleLib(this);
		}
	}
}

module.exports = IO;