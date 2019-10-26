module.exports = () => {
    return async (ctx,next) => {
        let ip = ['192.168.133.1'];

        if(ip.includes(ctx.ip)){
            ctx.body = {
                code:4,
                msg:'当前ip被阻止'
            }
        }else{
            await next()
        }
    }
}