"use strict"

var EventEmitter = require("./ServerEventEmitter");
var EventReciever = require("./ServerEventReciever");
var io = require('socket.io-client');

var IO = function(addr) {
	var modules = {};
	var socket = io.connect(addr, {reconnect: true});

	var eventEmitter = new EventEmitter(this);
	var eventReciever = new EventReciever(this);

	this.emit = function(variable, object) {
		eventEmitter.emit(socket, variable, object);
	}
	this.bind = function(variable, fct) {
		fct = fct || function(){};
		eventReciever.listen(socket, variable, fct);
	}
	this.addModule = function(module) {
		if(module) {
			var moduleLib = require("./modules/"+module);
			modules[module] = new moduleLib(this);
		}
	}
}

module.exports = IO;