"use strict"

var EventEmitter = require("./ClientEventEmitter");
var EventReciever = require("./ClientEventReciever");

var IO = function(config) {
	var modules = {};
	var prefix = "[::red::client/IO::white::] ";

	var io = require("socket.io")(config["game.port"]);
	console.log("Listening port "+config["game.port"],prefix);

	var place = parseInt(config["game.maxPlayer"]);

	var eventEmitter = new EventEmitter(this);
	var eventReciever = new EventReciever(this);

	this.emit = function(socket, variable, object) {
		eventEmitter.emit(socket, variable, object);
	}
	this.emitAll = function(variable, object) {
		eventEmitter.emit(io, variable, object);
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
			console.log("Can't find module "+module,prefix);
		}
	}
	this.getModules = function() {
		return modules;
	}
	this.getPlace = function() {
		return Object.keys(modules["Logging"].getUsers()).length;
	}
	this.isFull = function() {
		var nbPlayer = this.getPlace();

		if(nbPlayer >= place)
			return true;
		return false;
	}

}

var IOsingleton = (function() {
	var sio;

	function createInstance(config) {
		var obj = new IO(config);
		return obj;

	}
	return {
		getIO: function(config) {
			if(!sio) {
				if(config) {
					sio = createInstance(config);
				}
			}
			return sio;
		}
	}
})();

module.exports = IOsingleton;