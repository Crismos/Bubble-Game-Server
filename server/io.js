"use strict"

var EventEmitter = require("./ServerEventEmitter");
var EventReciever = require("./ServerEventReciever");
var io = require('socket.io-client');

var IO = function(config) {
	for(key in config) {
		console.log(key+" : "+config[key]);
	}
	var prefix = "::cyan::[Server/IO]::white::";
	var modules = {};
	var socket = io.connect("http://"+config["server.address"]+":"+config["server.port"], {reconnect: true});
	var key;
	var config = config;
	console.log("Waiting connection server at ::green::"+"http://"+config["server.address"]+":"+config["server.port"], prefix);

	var eventEmitter = new EventEmitter(this);
	var eventReciever = new EventReciever(this);

	this.emit = function(variable, object) {
		eventEmitter.emit(socket, variable, object);
	}
	this.bind = function(variable, fct) {
		fct = fct || function(){};
		eventReciever.listen(socket, variable, fct);
	}
	this.addModule = function(module, fct) {
		fct = fct || function(){};
		if(module) {
			var moduleLib = require("./modules/"+module);
			modules[module] = new moduleLib(this,fct);
		} else {
			console.log("Can't find module "+module,prefix);
		}
	}
	this.getModules = function() {
		return modules;
	}
	this.getConfig = function() {
		return config;
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
			console.log("call me maybe " + (config["server.port"] || ""));
			return sio;
		}
	}
})();

module.exports = IOsingleton;