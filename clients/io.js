"use strict"

var EventEmitter = require("./ClientEventEmitter");
var EventReciever = require("./ClientEventReciever");

var IO = function(port) {

	this.io = require("socket.io")(port);
	console.log("Listening port "+port);

	this.eventEmitter = new EventEmitter(this);
	this.eventReciever = new EventReciever(this);
}

module.exports = IO;