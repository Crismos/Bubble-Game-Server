"use strict"

var moduleLoader = function(IO) {
	var fs = require('fs');
	var path = require('path');

	this.IO = IO;

	function getDirectories(srcpath) {
	  	return fs.readdirSync(srcpath).filter(function(file) {
	    	return fs.statSync(path.join(srcpath, file));
	  	});
	}

	this.load = function(srcpath, callback) {
		var prefix = "::green::[::yellow::"+srcpath+"::green::>modules]::white::";
		var path = srcpath+"/modules";
		console.log("Loading modules for "+srcpath+"...",prefix);
		var modules = getDirectories(path);

		for(var key in modules) {
			var module = modules[key].replace(".js", "");
			IO.addModule(module, function() {
				console.log(module+" loaded",prefix);
			});
		}

		callback = callback || function() {};
		callback();
	}
}

module.exports = moduleLoader;