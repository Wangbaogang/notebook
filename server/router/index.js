import Router from 'koa-router'
const router = new Router();
import userService from '../service/user'
import recordsService from '../service/records'
import STATUS from '../config/status'
import getRawBody from 'raw-body'
import jwt from 'jsonwebtoken'
import {
	SERVER_SECRET
} from '../../config/constant'

/********************** post路由 ********************************/

//登录
router.post('/api/login', async (ctx, next) => {
	ctx.type = "application/json;charset=UTF-8";
	ctx.status = 200;

	await next();
	console.log(getRawBody)
	const body = await getRawBody(ctx.req)
	const bodyStr = body.toString()
	const bodyObj = JSON.parse(bodyStr)
	console.log(body, bodyStr, '--------')
	let docs = await userService.baseFind({
		username: bodyObj.username,
	}).limit(1).toArray()
	const data = {}
	if (docs.length) {
		data.status = STATUS.SUCCESS
		data.username = docs[0].username
		const token = jwt.sign({
			username: 'wangbg'
		}, SERVER_SECRET, {
			expiresIn: 60 * 60
		})
		ctx.cookies.set('token', token)
	} else {
		data.status = STATUS.LIMIT
		data.message = "用户名或密码不正确"
	}
	ctx.body = data;
})

//获取日记列表
router.post('/api/records', async (ctx, next) => {
	await next();
	let docs = await recordsService.baseFind().limit(10).toArray();
	ctx.body = {
		status: STATUS.SUCCESS,
		data: docs
	}
})


export default router;