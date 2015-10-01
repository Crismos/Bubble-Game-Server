"use strict"
var Connection = function(IO, callback) {
	callback = callback ||function(){};
	var prefix = "::cyan::[ConnectionServer]::white::";

	IO.bind("connect", function() {
		console.log("connected",prefix);
		IO.emit("gameConfig", IO.getConfig());
	});

	IO.bind("Validation", function(o) {
		console.log("identified with key ::green::"+o.key,prefix);
	});

	callback();
}

module.exports = Connection;