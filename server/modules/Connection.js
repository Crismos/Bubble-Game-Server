
var Connection = function(IO, callback) {
	callback = callback ||function(){};

	IO.bind("connect", function() {
		console.log("[S.CO] connected");
		IO.emit("gameConfig", IO.getConfig());
	});

	IO.bind("Validation", function(o) {
		console.log("[S.CO] identified with key "+o.id);
		IO.setKey(o.id);
	});

	callback();
}

module.exports = Connection;