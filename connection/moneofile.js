module.exports = function (moneo, mongoose) {

	// declaration for moneo and connection settings for neo4j graphdb
	var moneo = require("moneo")({url:'http://localhost:7474'});

	var User = require('./../model/userModel')(moneo, mongoose);
	var Notice = require('./../model/noticeModel')(moneo, mongoose);

// Sample data to be added in userModel
	var _user = {
		username: 'aki',
		password: '123',
		nome: 'Akarsh Seggemu',
		place: 'Germany'
	};

// Sample data to be added in noticeModel
	var _notice = {
		title: 'I was able to connect in moneo',
		caption: 'Yes, i am connected now',
		image: 'akidroid.jpg'
	};

// Adding sample data in the two models
	var User = new User(_user);
	var Notice = new Notice(_notice);

// saving the user sample data
	User.save(function (user) {
	});

// saving the notice sample data
	Notice.save(function (notice) {
	});

}
