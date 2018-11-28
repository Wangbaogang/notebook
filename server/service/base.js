class BaseService {
	constructor(instance) {
		this.instance = instance
	}

	baseFind(attributes = {}) {
		return this.instance.find(attributes) 
	}

	baseInsertOne(attributes) {
		return this.instance.insertOne(attributes)
	}

	baseInsertMany(list) {
		return this.instance.insertMany(list)
	}

	baseUpdateOne(filter, attributes) {
		return this.instance.updateOne(filter, attributes)
	}

	baseUpdateMany(filter, attributes) {
		return this.instance.updateMany(filter, attributes)
	}

	baseDeleteOne(filter) {
		return this.instance.deleteOne(filter)
	} 

	baseDeleteMany(filter) {
		return this.instance.deleteMany(filter)
	}
}

export default BaseService