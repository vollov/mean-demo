var mongojs = require('mongojs');
var db = mongojs('localhost/demo');

module.exports = {
	find : function(collection, query, projection, sort, limit, callback) {
		db.collection(collection).find(query, projection).sort(sort).limit(limit).toArray(callback);
	},
	
	findOne : function(collection, query, projection, callback) {
		db.collection(collection).findOne(query, projection, callback);
	},
	
	save : function(collection, body, callback) {
		db.collection(collection).save(body, callback);
	
	},
	update : function(collection, query, body, options, callback) {
		db.collection(collection).update(query, body, options, callback);
	},
	
	findAndModify : function(collection, query, update, callback) {
		db.collection(collection).findAndModify({
			query: query,
			update: update,
			new: true,
		}, callback);
	},
	
	remove : function(collection, query, callback) {
		db.collection(collection).remove(query, callback);
	}
};
