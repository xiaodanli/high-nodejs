const Koa = require('koa');

const app = new Koa();

const router = require('./router');

//处理静态资源的中间件  koa-static

const koaStatic = require('koa-static');

//处理前端post传递的参数  koa-bodyparser

const bodyparser = require('koa-bodyparser');

const path = require('path');

//__dirname和process.cwd()区别：

console.log("工作目录",process.cwd())

console.log("__dirname",__dirname);

const staticPath = koaStatic(path.join(process.cwd(),'public'));

app.use(staticPath);

app.use(bodyparser()) //注注注：必须要放在启动路由前  req.request.body = "前端传递的参数"

app.use(router.routes()); //启动路由

app.use(router.allowedMethods()); //根据ctx.status 设置响应头

// app.use(async (ctx) => {
//     //ctx.request.url  请求的地址  简写成 ctx.url
   
// })

//分页  pagenum=1 limit=10
// router.get('/list',async (ctx) => {
//     console.log(ctx.query) //获取前端get传递的参数  object
//     console.log(ctx.querystring); //序列化字符串
//     console.log(ctx.url) //请求的地址
//     ctx.body = 'list'
// })

// router.post('/login',async (ctx) => {
//     console.log(ctx.request.body);
//     ctx.body = '登录成功'
// })

app.listen(3000,() => {
    console.log("服务启动成功")
})