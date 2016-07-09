'use strict';

module.exports = {
	port:8000,
	session:{
		secret: 'uwotm8xxc',
		age: 20 *60 * 1000 // 20 minutes in ms
	},
	app:{
		name:'demo_app',
		root:'.'
	},
	jwt:{
		secret: 'myusername_hmacsha256',
		algorithm: 'HS256',
		expiresInSeconds: 1800
	},
	db:{
		host: 'localhost',
		name: 'phenix',
		port: '27017',
	},
	
	'secret': 'ilovescotchyscotch',
	'database': 'mongodb://localhost:27017/rest'

};