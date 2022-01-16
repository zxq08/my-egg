'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    console.log(ctx.session.counter)
    ctx.body = 'hi, egg';
  }
  async inde2x() {
    const { ctx,app } = this;
    console.log(ctx.session.counter)
    console.log(ctx.params())
    ctx.body = `hi, hello eggjs!\r\nnow: ${app.currentTime()}`;
  }
  async indexWithToken() {
    const { ctx } = this;
    const token = ctx.request.token
    ctx.body = {
      status: 200,
      body: token
    };
  }
  async newResponse() {
    const {ctx} = this;
    ctx.response.token = 'xq-z'
    const testBase64 = ctx.helper.base64Encode('lszxq.cn')
    ctx.body = testBase64
  }
}

module.exports = HomeController;
