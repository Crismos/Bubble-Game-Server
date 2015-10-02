
var Infos = function(IO, callback) {
	callback();

	this.sendNbPlace = function() {
		var cur = require("./../../clients/io").getIO().getPlace();
		IO.emit("place", {key: IO.getConfig()["game.key"], current: cur, max: IO.getConfig()["game.maxPlayer"]});
	}
	this.update = function() {
		this.sendNbPlace();
	}
}

module.exports = Infos;