'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, hello';
  }
  async userlist(){
      const {ctx} = this;
      ctx.body = '成员列表信息'
  }
}

module.exports = HomeController;
