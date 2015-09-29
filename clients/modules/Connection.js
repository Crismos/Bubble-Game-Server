
var Connection = function(IO) {

	var socket;

	IO.bind("connection", function(socket) {
		var idConnection = socket.id;
		console.log(">> user "+idConnection+" connected");

		IO.bind("disconnect", function() {
			console.log("<< user "+idConnection+" disconnected");
		}, socket);
	});
}

module.exports = Connection;