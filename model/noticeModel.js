module.exports = function (moneo, mongoose) {
	// declaration for mongoose Schema
	var Schema = mongoose.Schema;

// notice schema
	var NoticeSchema = new Schema({
		title: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
		caption: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
		image: {
			type: String,
			// setting the nodeProperty to true; will save this schema property in neo4j graph db
			nodeProperty: true,
			default: ''
		},
	   data: {
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
	NoticeSchema.plugin(moneo);

	// declaration of mongoose data model
	var noticemodel = mongoose.model('Notice', NoticeSchema);

	// running a cypherQuery for the data model
	// this query will fetch all the nodes and return all the nodes.
	noticemodel.cypherQuery({query: 'match (n) return n'}, function (err, res) {
				console.log("Result of notice model "+res.length);
		});

	// data model is returned
	return noticemodel;
}
