/*
 * @Author: 李晓丹 
 * @Date: 2019-10-17 11:25:12 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-10-18 10:41:17
 */

 //身份验证

 const jwt = require('jsonwebtoken');

 let writePaths = [
     '/api/user/login',
     '/api/user/registry'
 ]

 module.exports = () => {
     return async (ctx,next) => {
         //ctx.url /api/list?pagenum=1  ctx.request.path  /api/list
        try{
            if(writePaths.includes(ctx.request.path)){
                await next()
             }else{
                let token = ctx.cookies.get('token');
                let info = jwt.verify(token,'lixd');
                ctx.info = info;
                await next();
             }
         }catch(e){
             ctx.throw(401,e.message)
         }
    }
 }

