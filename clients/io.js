"use strict"

var EventEmitter = require("./ClientEventEmitter");
var EventReciever = require("./ClientEventReciever");

var IO = function(config) {
	var modules = {};

	var io = require("socket.io")(config["game.port"]);
	console.log("[clients] Listening port "+config["game.port"]);

	var eventEmitter = new EventEmitter(this);
	var eventReciever = new EventReciever(this);

	this.emit = function(socket, variable, object) {
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
	this.addModule = function(module, fct) {
		fct = fct || function(){};
		if(module) {
			var moduleLib = require("./modules/"+module);
			modules[module] = new moduleLib(this, fct);
		} else {
			console.log("Can't find module "+module);
		}
	}
	this.getModules = function() {
		return modules;
	}
}

module.exports = IO;