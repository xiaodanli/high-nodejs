const {Controller} = require('egg');

class SearchController extends Controller{
    async index(){
        let {ctx} = this;
        console.log(ctx.query.key);
        ctx.body = "羽绒服列表"
    }
}

module.exports = SearchController