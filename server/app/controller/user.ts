import { Controller } from 'egg';
import { LoginUser } from '../interface/login-user';

export default class UserController extends Controller {
    async getInfo() {
        const { ctx } = this;
        const isLocal = ctx.app.env === 'local';
        let userInfo: LoginUser = {};
        if (!isLocal) {// 待改？？？？
            const mockCasInfo = require('../../mock/com.netease.kaola.onlinetest.demo.rest.UserService/getUser.json');
            userInfo = mockCasInfo;
        } else {
            userInfo = await ctx.service.user.getUser();
            this.ctx.logger.info('[usr] controller 层 urs 返回: ', JSON.stringify(userInfo, null, 4));
        }
        // account String 主帐号
        // isOldUser String 用户IP
        // nickname String 用户昵称
        // subAccount String 子帐号
        ctx.body = {
            data: userInfo,
            code: 200,
        };
    }
}
