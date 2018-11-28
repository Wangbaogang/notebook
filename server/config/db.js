import {DB_NAME, DB_URL} from '../../config/constant';
import MongoClient from 'mongodb'

/**
 * @param {string} collection_name 集合名称
 */
function define(collection_name) {
	return MongoClient.connect(DB_URL).then((client) => {
		console.log('connected successfully to database');
		let db = client.db(DB_NAME, {
			useNewUrlParser: true
		});
		return db.collection(collection_name);
	})
}

export default {
	define
}