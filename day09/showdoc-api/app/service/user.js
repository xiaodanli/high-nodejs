/*
 * @Author: 李晓丹 
 * @Date: 2019-10-17 10:41:56 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-10-18 10:34:03
 */

'use strict';

const {Service} = require('egg');

class UserService extends Service{
    //注册
    async registry(username,password){
        let result = await this.app.mysql.insert('userlist',{username,password});
        return result
    }

    //查询
    async selectUser(username){
        let user = await this.app.mysql.get('userlist',{username});
        return user
    }

    //登录
    async login(username,password){
        let user = await this.app.mysql.get('userlist',{username,password});

        return user
    }

    //修改密码
    async edit(username,password){
        let result = await this.app.mysql.update('userlist',{password},{where:{username}});
        return result
    }
}

module.exports = UserService