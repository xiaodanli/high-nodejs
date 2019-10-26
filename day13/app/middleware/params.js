module.exports = () => {
    return async (ctx,next) => {
        console.log("第一个中间件开始")
        ctx.params = {...ctx.query,...ctx.request.body,...ctx.params};
        await next()
        console.log("第一个中间件结束")
    }
}