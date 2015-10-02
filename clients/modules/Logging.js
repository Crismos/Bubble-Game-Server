
var Logging = function(IO, callback) {
	var prefix = "::red::[client/logging]::yellow::";
	callback();
	var users = {};

	this.getUsers = function() {
		return users;
	}
	var addUserData = function(id, valueName, value) {
		if(users[id] instanceof Object == false) {
			users[id] = {};
		}
		users[id][valueName] = value;
	}
	var removeUserData = function(id, valueName) {
		delete users[id][valueName];
	}
	var removeUser = function(id) {
		delete users[id];
	}
	var updatePlace = function() {
		require("./../../server/io").getIO().getModules()["Infos"].update();
	}


	this.event = function(socket){
		IO.bind("getServerInfos", function(o) {
			if(!IO.isFull()) {
				addUserData(socket.id, "pseudo", o.pseudo);
				console.log("user ::green::"+o.pseudo+"::yellow:: joined the game", prefix);
				updatePlace();
			} else {
				console.log("Server full !", prefix);
			}
		}, socket);
		IO.bind("disconnect", function() {
			removeUser(socket.id);
			updatePlace();
		}, socket)
	}

}

module.exports = Logging;