
var Command = function() {

	var cmds = {
		help: {
			process: function() {help();},
			example: "help"
		},
		say: {
			process: function(o) {
				console.log(o[1]);
			},
			description: "Say something on server console",
			example: "say Hello world!"
		},
		stop: {
			process: function() {process.exit(0);},
			description: "Stop this game server",
			example: "stop"
		},
		default: {
			process: function(o){cmdNotFound(o[0]);},
			example: ""
		}
	};

	var help = function() {
	  console.log("::green:: ======= Help ======");
	  for(key in cmds) {
	  	if(key != "default" && key != "help") {
	  		var cmd = cmds[key]
	  		console.log("::green::"+key+" : "+cmd.description);
	  		console.log("::green::         use as : "+cmd.example);
	  	}
	  }
	}
	var cmdNotFound = function(txt) {
		console.log("::red::Unknow command ::white::"+txt+" use ::green::help");
	}

	this.execute = function(cmd) {
		var input = cmd.split(" ");
		if(cmds[input[0]] != undefined) {
			cmds[input[0]].process(input);
		} else {
			cmds.default.process(input);
		}
	}
}

var A = (function() {
	var command;
	return {
		get: function() {
			if(!command) {
				command = new Command();
			}
			return command;
		}
	}
})();

module.exports = A;