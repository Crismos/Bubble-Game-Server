/*
* Game server
* Buble
*
*/
// modules
var console = require("./modules/console.js");
var serverIO = require("./server/io");
var clientIO = require("./clients/io");
var ModuleLoader = require("./modules/moduleLoader");
var Config = require("./modules/Config");

var cfg = new Config(function(config) {
	var serverConnection = serverIO.getIO(config);
	var serverLoader = new ModuleLoader(serverConnection);


	var clientConnection = clientIO.getIO(config);
	var clientLoader = new ModuleLoader(clientConnection);

	serverLoader.load("server");
	clientLoader.load("clients");
});
