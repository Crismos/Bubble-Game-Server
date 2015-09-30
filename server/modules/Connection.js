
var Connection = function(IO) {
	IO.bind("connect", function() {
		console.log("[S.CO] connected");
		IO.emit("gameConfig", IO.getModules()["Config"].getConfig());
	});

	IO.bind("Validation", function(o) {
		console.log("[S.CO] identified with key "+o.id);
		IO.setKey(o.id);
	});
}

module.exports = Connection;