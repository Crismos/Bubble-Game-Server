
var Connection = function(IO) {
	IO.eventListener("connect", function() {
		console.log("connected !");
	});

	IO.eventListener("bonjour", function(o) {
		console.log(o.content);
		IO.callEmitter("reponse", {content: "salut copain server !"});
	});
}

module.exports = Connection;