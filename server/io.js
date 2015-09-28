"use strict"

var EventEmitter = require("./ServerEventEmitter");
var EventReciever = require("./ServerEventReciever");
var io = require('socket.io-client');

var IO = function(addr) {
	this.socket = io.connect(addr, {reconnect: true});
	this.io = io;

	this.eventEmitter = new EventEmitter(this);
	this.eventReciever = new EventReciever(this);

}

module.exports = IO;