/*
* Game server
* Buble
*
*/
// modules
var serverIO = require("./server/io");
var clientIO = require("./clients/io");
var ModuleLoader = require("./modules/moduleLoader");
var Config = require("./modules/Config");

var cfg = new Config(null, function(config) {
	var serverConnection = new serverIO(config);
	var loader = new ModuleLoader(serverConnection);
	loader.load("server");

	var clientConnection = new clientIO(config);
	var loader = new ModuleLoader(clientConnection);
	loader.load("clients");

});

