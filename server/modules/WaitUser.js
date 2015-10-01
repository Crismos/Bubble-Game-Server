var WaitUser = function(IO, callback) {
	var prefix = "::cyan::[Server/waitingUser]::white::";
	callback = callback ||function(){};
	

	IO.bind("newUserInc", function(o) {
		if(o.key == IO.getConfig()["game.key"]) {
			console.log("Waiting for user ::green::"+o.pseudo, prefix);
		}
	});
}
module.exports = WaitUser;