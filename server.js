/*
* Game server
* Buble
*
*/
// modules
var serverIO = require("./server/io");
var clientIO = require("./clients/io");
var ModuleLoader = require("./moduleLoader");

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
var loader = new ModuleLoader(serverConnection);
loader.load("server/modules");


// interactions with clients
var clientConnection = new clientIO(gameServerPort);