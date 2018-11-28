import BaseService from './base'
import autoWrite from '../common/auto_write'

@autoWrite('records')
class RecordsService extends BaseService {
	constructor() {
		super(RecordsService.model)
	}
}

export default new RecordsService()