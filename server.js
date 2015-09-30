/*
* Game server
* Buble
*
*/
// modules
var serverIO = require("./server/io");
var clientIO = require("./clients/io");
var ModuleLoader = require("./moduleLoader");
var Config = require("./server/modules/Config");

var cfg = new Config(null, function(config) {
	var serverConnectionAdress = "http://"+config["server.address"]+":"+config["server.port"];
	var gameServerPort = config["game.port"];


	var serverConnection = new serverIO(serverConnectionAdress);
	var loader = new ModuleLoader(serverConnection);
	loader.load("server");

	var clientConnection = new clientIO(gameServerPort);
	var loader = new ModuleLoader(clientConnection);
	loader.load("clients");

});

