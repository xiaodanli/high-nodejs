const {Service} = require('egg');

class UserService extends Service{
    async find(){
        let {app} = this;
        let result = await app.mysql.select('userlist');
        return result
    }
}

module.exports = UserService