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
        const res = await ctx.service.testdb.delGirl()
        ctx.body = "删除女孩";
    }

    async updateGirl() {
        const { ctx } = this;
        const res = await ctx.service.testdb.updateGirl()
        ctx.body = "修改女孩";
    }

    async getGirls() {
        const { ctx } = this;
        const res = await ctx.service.testdb.getGirls()

        ctx.body = '查询女孩:'+JSON.stringify(res);
    }
}

module.exports = GirlManage;