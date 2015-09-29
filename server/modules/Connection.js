
var Connection = function(IO) {
	IO.bind("connect", function() {
		console.log("->> connected to connection server");
	});
}

module.exports = Connection;