"use strict";

const Controller = require("egg").Controller;

class GirlManage extends Controller {
    async addGirl() {
        const { ctx } = this;
        const params = {
            name:'coderM',
            age:28,
            skill:'run code'
        }
        const res = await ctx.service.testdb.addGirl(params)
        ctx.body = `添加女孩${res?'成功':'失败'}`;
    }

    async delGirl() {
        const { ctx } = this;
        const id={"id":1};
        const res = await ctx.service.testdb.delGirl(id)
        console.log(res)
        ctx.body = `删除女孩${res?'成功':'失败'}`;
    }

    async updateGirl() {
        const { ctx } = this;
        const params = {
            id:1,
            name:'小白',
            age:20,
            skill:'头疗'
        }
        const res  = await ctx.service.testdb.updateGirl(params)
        ctx.body = `修改女孩${res?'成功':'失败'}`;
    }

    async getGirls() {
        const { ctx } = this;
        const res = await ctx.service.testdb.getGirls()

        ctx.body = '查询女孩:'+JSON.stringify(res);
    }
}

module.exports = GirlManage;