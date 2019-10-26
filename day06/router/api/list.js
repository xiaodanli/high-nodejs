const router = require('koa-router')();

router.get('/list',async (ctx) => {
    console.log(ctx.query) //获取前端get传递的参数  object
    console.log(ctx.querystring); //序列化字符串
    console.log(ctx.url) //请求的地址
    ctx.body = 'list'
})

module.exports = router;