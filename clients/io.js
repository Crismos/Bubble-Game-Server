"use strict"

var eventCaller = require("./client.event.caller");
var eventReciever = require("./client.event.reciever");

var IO = function(port) {

	this.io = require("socket.io")(port);
	console.log("Listening port "+port);

	var eCaller = new eventCaller(this);
	var eReciever = new eventReciever(this);
}

module.exports = IO;