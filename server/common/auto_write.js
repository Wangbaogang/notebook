import UserModel from '../model/user'
import RecordsModel from '../model/records'

function autoWrite(model_name) {
	if (!model_name) throw Error("which model do you want?")
	return function (target) {
		let model
		switch (model_name) {
			case 'user':
				model = new UserModel()
				break
			case 'records':
				model = new RecordsModel()
				break
		}
		target.model = model
	}
}

export default autoWrite