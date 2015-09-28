/*
* Game server
* Buble
*
*/

var serverConnectionAdress = "http://localhost:3000";
var sConnection = require("./s.connection");

new sConnection(serverConnectionAdress);
