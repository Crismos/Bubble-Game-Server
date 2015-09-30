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

	this.load = function(srcpath) {
		var prefix = "["+srcpath+"] ";
		var path = srcpath+"/modules";
		console.log(prefix+"Loading modules for "+srcpath+"...");
		var modules = getDirectories(path);

		for(var key in modules) {
			var module = modules[key].replace(".js", "");
			IO.addModule(module, function() {
				console.log(prefix+module+" loaded");
			});
		}
	}
}

module.exports = moduleLoader;