
var Config = function(callback) {
	var prefix = "[Config] ";
	console.log(prefix+"Loading config...");
	callback = callback || function(){};

	var fs = require('fs');
	var config = {};
	fs.readFile('./config.cfg', 'utf8', read);

	function read(err, data) {
		if (err) {
	    	return console.log(err);
		}
		var tmp = data.replace(/\r/g,"").split("\n");
		for(key in tmp) {
			if(tmp[key] != "")
				config[tmp[key].split(" = ")[0]] = tmp[key].split(" = ")[1];
		}
		console.log(prefix+"Config loaded!");
		callback(config);
	}

	this.get = function(txt) {
		return config[txt];
	}
	this.getConfig = function() {
		return config;
	}
	
}

module.exports = Config;