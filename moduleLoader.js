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
		console.log("Loading modules for "+srcpath+"...");
		var modules = getDirectories(srcpath);

		for(var key in modules) {
			var module = modules[key].replace(".js", "");
			IO.addModule(module);
			console.log(module+" loaded");
		}
	}
}

module.exports = moduleLoader;