const {Controller} = require('egg');

class HomeController extends Controller{
    async index(){
        let {ctx} = this;
        ctx.body = "hello world"
    }
}

module.exports = HomeController