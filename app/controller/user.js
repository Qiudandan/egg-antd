'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
    async index() {
        const {ctx} = this;
        const {username} = ctx.query;
        ctx.body = username;
    }

    async getid() {
        const {ctx} = this;
        const {id} = ctx.params;
        ctx.body = id;
    }

    async add() {
        const {ctx} = this;
        const {title, content} = ctx.request.body;
        // 框架内置了 bodyParser 中间件来对这两类格式的请求 body 解析成 object 挂载到 ctx.request.body 上
        // HTTP 协议中并不建议在通过 GET、HEAD 方法访问时传递 body，所以我们无法在 GET、HEAD 方法中按照此方法获取到内容。
        ctx.body = {
            title,
            content,
        };
    }
}

module.exports = UserController;
