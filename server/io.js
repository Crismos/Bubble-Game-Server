"use strict"

var eventCaller = require("./server.event.caller");
var eventReciever = require("./server.event.reciever");
var io = require('socket.io-client');

var IO = function(addr) {
	this.socket = io.connect(addr, {reconnect: true});
	this.io = io;

	var eCaller = new eventCaller(this);
	var eReciever = new eventReciever(this);

}

module.exports = IO;