#!/usr/bin/env node
'use strict';

(function(){
	var fs = require('fs'),
	path = require('path'),
	exec = require('child_process').exec,
	repo = process.argv[2],
	config = JSON.parse(fs.readFileSync(path.join(__dirname, '../config.json'),"utf-8"));

	function setRegistry(){
		if (typeof repo==='undefined') {
			sayHello();
		}
		if (typeof config[repo]!=='undefined') {
			console.log('Setting npm registry to',repo,config[repo]);
			exec('npm config set registry '+config[repo],function(){
				console.log('Done!');
			});

		} else{
			console.log(repo,'can not be found in config!');
		}		
	}

	function sayHello(){
		var usageString = 	'Example : npmreg taobao\n'+
							'will set npm registry to http://registry.npm.taobao.org/\n'+
							'visit https://github.com/hiwanz/npmreg for more.';
		console.log(usageString);
		process.exit();
	}
	setRegistry();
})();

