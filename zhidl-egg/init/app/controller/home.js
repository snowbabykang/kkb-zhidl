const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg111';
  }
  async zhidl() {
    const { ctx } = this;
    console.log(ctx.params, 'ctx');
    ctx.body = 'zhidl';
  }
  
}
module.exports = HomeController;
