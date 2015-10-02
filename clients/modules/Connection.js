
var Connection = function(IO, callback) {
	var prefix = "::red::[clients/Connection]::yellow::";
	var sockets = {};

	var load = function(IO, callback) {
		callback = callback ||function(){};
		
		IO.bind("connection", function(soc) {
			sockets[soc.id] = soc;
			var idConnection = soc.id;

			IO.bind("disconnect", function() {
				delete sockets[idConnection];
			}, soc);

			var modules = IO.getModules();
			for(key in modules) {
				modules[key].event(soc);
			}
		});
		callback();
	}
	load(IO,callback);

	this.event = function(socket) {

	}
	this.getSockets = function() {
		return sockets;
	}
}

module.exports = Connection;