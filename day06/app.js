const Koa = require('koa');

const app = new Koa();

//中间件  函数  app.use()  async --- await

//ctx.response.body 简写成 ctx.body

//在koa内部把这些async函数组合成一个处理链，每一个async都可以做自己的事，

//await next() 执行下一个中间件

// koa-bodyparser

app.use(async (ctx,next) => {
    //ctx是封装了request，response
    let startTime = new Date().getTime();
    ctx.body = 'hello world';
    console.log("mddleware1");
    ctx.request.test = '4444444'
    await next()
    console.log("middleware3");
    let endTime = new Date().getTime();
    let timer = endTime - startTime;
    console.log(timer);  //100x
})

app.use(async (ctx,next) => {
    ctx.body = 'hello 中国';
    console.log("mddleware2")
    console.log(ctx.request.test)
    await next()
    console.log("middlewarre4")
})

//延迟
let delay = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },1000)
    })
}

app.use(async (ctx) => {
    console.log("middlewarre5")
    await delay() //1000
})

app.listen(3000,() => {
    console.log("服务启动成功，端口号3000")
})