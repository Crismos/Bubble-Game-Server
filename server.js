/*
* Game server
* Buble
*
*/
// modules
var serverIO = require("./server/io");
var clientIO = require("./clients/io");

/*
* CONFIG
*/
// adress of connection server 
var serverConnectionAdress = "http://localhost:3000";
// this port will be used to permit the connection of the client
var gameServerPort = "8000";

/*
* RUNNING SERVER
*/
// connection to the connection server
var serverConnection = new serverIO(serverConnectionAdress);
// interactions with clients
var clientConnection = new clientIO(gameServerPort);