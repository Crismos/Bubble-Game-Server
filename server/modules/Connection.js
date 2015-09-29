
var Connection = function(IO) {
	IO.bind("connect", function() {
		console.log("connected !");
	});

	IO.bind("bonjour", function(o) {
		console.log(o.content);
		IO.emit("reponse", {content: "salut copain server !"});
	});
}

module.exports = Connection;