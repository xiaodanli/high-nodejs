/*
 * @Author: 李晓丹 
 * @Date: 2019-10-17 10:30:31 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-10-18 10:35:57
 */

'use strict';

const {Controller} = require('egg');
const jwt = require('jsonwebtoken');

class UserController extends Controller{
    //注册
    async registry(){
        const {ctx,service} = this;
        //1.获取参数
        let {username,password} = ctx.request.body;

        //2.查询此人是否存在
        let user = await service.user.selectUser(username);
        console.log(user)
        console.log(username,password)
        if(!user){
            //不存在
            try{
                await service.user.registry(username,password);
                ctx.body = {
                    code:1,
                    message:'注册成功'
                }
            }catch(e){
                ctx.throw(422,'注册失败')
            }
        }else{
            //存在
            ctx.throw(422,'此人已存在')

        }
    }

    //登录
    async login(){
        let {ctx,service} = this;
        let {username,password} = ctx.request.body;

        //1.查 username password
        let user = await service.user.login(username,password);
        if(!user){
            ctx.throw('用户名或密码错误')
        }else{
            //生成token
            let token = jwt.sign({...user},'lixd',{expiresIn:60*60});
            ctx.cookies.set('token',token);
            ctx.body = {
                code:1,
                message:'登录成功'
            }
        }
    }

    //修改密码
    async edit(){
        let {ctx,service} = this;

        let {username,password} = ctx.request.body;

        try{
            await service.user.edit(username,password);
            ctx.body = {
                code:1,
                message:'修改成功'
            }
        }catch(e){
            ctx.body = {
                code:0,
                message:'修改失败'
            }
        }
    }
}

module.exports = UserController