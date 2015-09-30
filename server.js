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
	var serverConnection = new serverIO(config);
	var loader = new ModuleLoader(serverConnection);
	loader.load("server");

<<<<<<< HEAD
modulesServer = getDirectories("server/modules");
console.log(modulesServer);
console.log("Loading server modules...");
//modulesClient = getDirectories("clients/modules");
/*
* CONFIG
*/
// adress of connection server
var serverConnectionAdress = "http://localhost:4000";
// this port will be used to permit the connection of the client
var gameServerPort = "8000";
=======
	var clientConnection = new clientIO(config);
	var loader = new ModuleLoader(clientConnection);
	loader.load("clients");
>>>>>>> origin/master

});

<<<<<<< HEAD
// interactions with clients
var clientConnection = new clientIO(gameServerPort);
=======
>>>>>>> origin/master
