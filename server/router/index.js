import Router from 'koa-router'
const router = new Router();
import UserService from '../service/user'
import RecordsService from '../service/records'

/********************** post路由 ********************************/

//登录
router.post('/api/login', async (ctx, next) => {
	let docs = await UserService.baseFind().limit(1).toArray()
	ctx.type = "application/json;charset=UTF-8";

	const data = {}
	if (docs.length) {
		data.status = 0
	} else {
		data.status = 1
	}
	ctx.status = 200;
	ctx.body = JSON.stringify(data);
})

//获取日记列表
router.post('/api/records', async (ctx, next) => {
		let docs = await RecordsService.baseFind().limit(10).toArray();
	ctx.body = JSON.stringify({ status: 0, data: docs })
})


export default router;