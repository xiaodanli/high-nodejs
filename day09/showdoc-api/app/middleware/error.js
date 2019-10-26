/*
 * @Author: 李晓丹 
 * @Date: 2019-10-17 10:56:07 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-10-17 11:00:28
 */

 //全局错误处理
 module.exports = () => {
     return async (ctx,next) => {
         try{
            await next();
         }catch(e){
             if(ctx.response.status >= 500){
                 ctx.body = {
                     code:0,
                     message:'网络错误'
                 }
             }else{
                 ctx.body = {
                     code:0,
                     message:e.message
                 }
             }
         }
     }
 }