/*
* Game server
* Buble
*
*/

var serverConnectionAdress = "http://localhost:3000";
var gameServerPort = "8000";
var sConnection = require("./s.connection");
var cConnection = require("./c.connection");

new sConnection(serverConnectionAdress);
new cConnection(gameServerPort);