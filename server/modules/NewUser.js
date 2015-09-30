var NewUser = function(IO, callback) {
	var prefix = "::cyan::[Server/userInc]::white::";
	callback = callback ||function(){};
	callback();

	IO.bind("newUserInc", function(o) {
		console.log(o.key+" > "+IO.getConfig()["game.key"]);
		if(o.key == IO.getConfig()["game.key"]) {
			console.log("Waiting for user ::green::"+o.pseudo, prefix);
		}
	});
}
module.exports = NewUser;