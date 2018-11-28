import db from '../config/db';

class Base {
	constructor(collection_name) {
		db.define(collection_name).then(collection => {
			this.model = collection
		})
	}

	getModel() {
		return this.model
	}

	/***************************************查询方法****************************************/
	find(attributes = {}) {
		return this.model.find(attributes) 
	}

	insertOne(attributes) {
		return this.model.insertOne(attributes)
	}

	insertMany(list) {
		return this.model.insertMany(list)
	}

	updateOne(filter, attributes) {
		return this.model.updateOne(filter, attributes)
	}

	updateMany(filter, attributes) {
		return this.model.updateMany(filter, attributes)
	}

	deleteOne(filter) {
		return this.model.deleteOne(filter)
	} 

	deleteMany(filter) {
		return this.model.deleteMany(filter)
	}
}

export default Base