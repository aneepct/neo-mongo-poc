module.exports = function (moneo, mongoose) {
	// declaration for mongoose Schema
	var Schema = mongoose.Schema;

// user schema
	var UserSchema = new Schema({
		username: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
		password: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
		nome: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
		place: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
	  dateregister: {
			type: Date,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: Date.now
		},
	  active: {
			type: Boolean,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: true
		}
	});

	// pushing the data into neo4j graph db
	UserSchema.plugin(moneo);

	// declaration of mongoose data model
	var usermodel = mongoose.model('User', UserSchema);

	// running a cypherQuery for the data model
	// this query will fetch all the nodes and return all the nodes.
	usermodel.cypherQuery({query: 'match (n:User) return n limit 1'}, function (err, res) {
				console.log("Result of user model "+res);
		});

	// data model is returned
	return usermodel;
}
