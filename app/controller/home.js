'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = 'hi, egg';
  }
  async inde2x() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = 'hi, hello eggjs!';
  }
}

module.exports = HomeController;
