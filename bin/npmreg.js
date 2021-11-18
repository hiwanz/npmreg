#!/usr/bin/env node
(function () {
	let fs = require('fs')
	let path = require('path')
	let exec = require('child_process').exec
	let configFile = path.join(__dirname, '../config.json')

	function lsConfig() {
		let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
		let configList = ''
		for (let item in config) {
			configList += (item + '\t' + config[item] + '\n')
		}
		console.log('Available registry:\n')
		console.log(configList)
		console.log('Current registry:\n')
		exec('npm config get registry', (error, stdout, stderr) => {
			console.log(stdout)
		})
	}
	
	function addConfig() {
		let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
		console.log('Adding', process.argv[3] + '(' + process.argv[4] + ')', 'to config...')
		config[process.argv[3]] = process.argv[4]

		fs.writeFile(configFile, JSON.stringify(config, null, 4), function (e) {
			console.log('Done!')
			if (e) { throw e }
		})
	}

	function rmConfig() {
		let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
		console.log('Removing', process.argv[3], 'from config...')
		delete config[process.argv[3]]
		fs.writeFile(configFile, JSON.stringify(config, null, 2), function (e) {
			console.log('Done!')
			if (e) { throw e }
		})
	}

	function sayHello() {
		console.log('Usage : npmreg taobao\n' +
			'will set npm registry to https://registry.npmmirror.com/\n' +
			'visit https://github.com/hiwanz/npmreg for more help.\n')
		lsConfig()
	}

	function runApp() {
		let config = JSON.parse(fs.readFileSync(configFile, 'utf-8'))
		if (process.argv.length == 2) {
			sayHello()
		}
		if (process.argv.length == 3) {
			let repo = process.argv[2]
			if (typeof config[repo] !== 'undefined') {
				console.log('Setting npm registry to', repo, config[repo])
				exec('npm config set registry ' + config[repo], function () {
					console.log('Done!')
				})
			} else {
				console.log(repo, 'can not be found in config!')
			}
		}
		if (process.argv.length == 4 && process.argv[2] === 'rm') {
			rmConfig()
		}
		if (process.argv.length == 5 && process.argv[2] === 'add') {
			addConfig()
		}
	}

	runApp()
})()

