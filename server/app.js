require('babel-register')()
/**
 * @description 该文件中不能使用es6 module语法
 * https://github.com/babel/babel/issues/5479
 */
const Koa = require('koa')
const { SERVER_PORT } = require('../config/constant')
const router = require('./router').default
const app = new Koa();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(SERVER_PORT);
console.log(`server running at port ${SERVER_PORT}`);