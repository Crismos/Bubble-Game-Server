
var Connection = function(IO, callback) {
	callback = callback ||function(){};
	var prefix = "[::cyan::Server.Connection::white::]";

	IO.bind("connect", function() {
		console.log("connected",prefix);
		IO.emit("gameConfig", IO.getConfig());
	});

	IO.bind("Validation", function(o) {
		console.log("identified with key "+o.id,prefix);
		IO.setKey(o.id);
	});

	callback();
}

module.exports = Connection;