
var Connection = function(IO) {

	var sockets = {};

	IO.bind("connection", function(soc) {
		sockets[soc.id] = soc;
		var idConnection = soc.id;
		console.log(">> user "+idConnection+" connected");

		IO.bind("disconnect", function() {
			delete sockets[idConnection];
			console.log("<< user "+idConnection+" disconnected");
		}, soc);

		var modules = IO.getModules();
		for(key in modules) {
			modules[key].event(soc);
		}
	});

	this.event = function(socket) {
		
	}

	this.getSockets = function() {
		return sockets;
	}
}

module.exports = Connection;