
var Logging = function(IO, callback) {
	var prefix = "::red::[client/logging]::white";
	callback();

	this.event = function(socket){
		IO.bind("getServerInfos", function(o) {
			console.log("::green::"+o.pseudo+"::white:: joined the game");
		}, socket);
	}

}

module.exports = Logging;