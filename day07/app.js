const Koa = require('koa');

const app = new Koa();

//1.处理静态资源
const koaStatic = require('koa-static');

const path = require('path');

const bodyparser = require('koa-bodyparser');

app.use(koaStatic(path.join(process.cwd(),'public')))

app.use(bodyparser())

//2.路由 koa-router

const router = require('./router')

app.use(router.routes());

app.use(router.allowedMethods());


app.listen(3000,() => {
    console.log("服务启动成功3000")
})