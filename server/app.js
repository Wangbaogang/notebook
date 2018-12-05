require('babel-register')()
/**
 * @description 该文件中不能使用es6 module语法
 * https://github.com/babel/babel/issues/5479
 */
const Koa = require('koa')
const {
	SERVER_PORT,
	SERVER_SECRET
} = require('../config/constant')
const router = require('./router').default
const jwt = require('koa-jwt')
const middleware = require('./middleware')

const app = new Koa();

// app.use(bodyParser())
app.use(jwt({
	secret: SERVER_SECRET,
	getToken(ctx, options) {
		let token = ctx.cookies.get('token')
		return token
	},
	isRevoked(ctx, decodedToken, token) {
		//resolve false代表token有效
		return Promise.resolve(false)
	}
}).unless({
	path: [/\/api\/login/]
}))
app.use(
	middleware.jwt_err
);
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(SERVER_PORT);
console.log(`server running at port ${SERVER_PORT}`);