# npmreg [![Build Status](https://secure.travis-ci.org/hiwanz/npmreg.png?branch=master)](http://travis-ci.org/hiwanz/npmreg)

A npm registry mirror switching shortcut command.

## Getting Started
Install the module with: 

`npm install npmreg -g`

You can easily set registry to taobao mirror(http://registry.npm.taobao.org) with:

`npmreg taobao`

or set it back to default(http://registry.npmjs.org/) with:

`npmreg default`

## Supported Registry

	{
		"default":"http://registry.npmjs.org/",
		"taobao":"http://registry.npm.taobao.org/",
		"cnpm":"http://r.cnpmjs.org/",
		"eu":"http://registry.npmjs.eu/",
		"au":"http://registry.npmjs.org.au/",
		"sl":"http://npm.strongloop.com/",
		"nj":"https://registry.nodejitsu.com/"
	}

## Release History

2014/6/10 11:32:11	Add supported registry.

2014/6/9 15:47:01	Switching registry mirror between npmjs and taobao.

## License
Copyright (c) 2014 hiwanz. Licensed under the MIT license.
