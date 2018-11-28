import BaseService from './base'
import autoWrite from '../common/auto_write'

@autoWrite('user')
class UserService extends BaseService {
	constructor() {
		super(UserService.model)
	}
}

export default new UserService()