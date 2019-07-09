module.exports = function (moneo, mongoose) {

	// declaration for moneo and connection settings for neo4j graphdb
	// var moneo = require("moneo")({url:'http://localhost:7474'});

	var moneo = require("moneo")({
		url:'http://localhost:7474', 
		auth: {
	      user: 'neo4j',
	      pass: 'aneep1234'
	    }
	});

	var User = require('./../model/userModel')(moneo, mongoose);
	var Project = require('./../model/projectModel')(moneo, mongoose);

// Sample data to be added in userModel
	var _user = {
		username: 'aneepct',
		password: '123',
		name: 'Aneep Tandel',
		place: 'India'
	};

// Sample data to be added in projectModel
	var _project = {
		title: 'I was able to connect in moneo',
		caption: 'Yes, i am connected now',
		image: 'aneepct.jpg'
	};

// Adding sample data in the two models
	var User = new User(_user);
	var Project = new Project(_project);

// saving the user sample data
	User.save(function (user) {
	});

// saving the project sample data
	Project.save(function (project) {
	});

}
