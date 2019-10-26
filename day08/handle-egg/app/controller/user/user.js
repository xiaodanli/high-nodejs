const {Controller} = require('egg');

class UserController extends Controller{
    async userlist(){
        let {ctx} = this;
        console.log(ctx.params.name)
        let list = await ctx.service.user.find();
        ctx.body = list
    }

    async add(){
        let {ctx} = this;
        //校验规则 --egg-validate
        const createRule = {
            username: {
              type: 'email',
            },
            password: {
              type: 'password'
            },
          };
          ctx.validate(createRule);
        ctx.body = ctx.request.body;
    }
}

module.exports = UserController