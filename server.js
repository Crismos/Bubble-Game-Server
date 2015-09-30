/*
* Game server
* Buble
*
*/
// modules
var serverIO = require("./server/io");
var clientIO = require("./clients/io");
var fs = require('fs');
var path = require('path');

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file));
  });
}

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

/*
* RUNNING SERVER
*/
// connection to the connection server
var serverConnection = new serverIO(serverConnectionAdress);
for(key in modulesServer) {
	var module = modulesServer[key].replace(".js", "");
	serverConnection.addModule(module);
	console.log(module+" loaded");
}

// interactions with clients
var clientConnection = new clientIO(gameServerPort);
