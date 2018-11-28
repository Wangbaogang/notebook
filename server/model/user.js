
import BaseModel from './base'
class User extends BaseModel {
	/**
	 * @param {String} db_name database name
	 * @param {String} co_name collection name
	 */
	constructor() {
		super('notebookUsers');
		this.model = super.getModel();
	}
}

export default User