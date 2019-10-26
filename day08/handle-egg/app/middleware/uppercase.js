module.exports = (options,app) => {
    return async (ctx,next) => {
        ctx.params.name = ctx.params.name.toLocaleUpperCase();
        await next()
    }
}