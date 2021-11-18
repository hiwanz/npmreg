# npmreg [![Build Status](https://secure.travis-ci.org/hiwanz/npmreg.png?branch=master)](http://travis-ci.org/hiwanz/npmreg)

A npm registry mirror switching shortcut command.

## Getting Started
Install the module with: 

`npm install npmreg -g`

You can easily set registry to taobao mirror(http://registry.npm.taobao.org) with:

`npmreg taobao`

or set it back to npm(http://registry.npmjs.org/) with:

`npmreg npm`

## Supported Command

Add registry to config file:

`npmreg add <newkey> <http://r.example.com/>`

Remove registry from config file:

`npmreg rm <key>`

## Supported Registries

	{
		"npm": "https://registry.npmjs.org/",
		"taobao": "https://registry.npmmirror.com/",
		"cnpm": "https://r.cnpmjs.org/"
	}

## License
Copyright (c) 2021 hiwanz. Licensed under the MIT license.
