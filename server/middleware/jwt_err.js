import STATUS from '../config/status'

const jwt_err = async function(ctx, next) {
	return next().catch(err => {
		if(err.status == 401) {
			ctx.status = 200
			ctx.body = {
				status: STATUS.LIMIT,
				msg: err.originalError ? err.originalError.message : err.message
			}
		} else {
			throw err
		}
	})
}

export default jwt_err