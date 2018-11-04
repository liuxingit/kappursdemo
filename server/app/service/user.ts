import { LoginUser } from '../interface/login-user';
import { Service } from 'egg';


export default class User extends Service {
    async getUser(): Promise<LoginUser> {
        const userInfo = this.ctx.session.userInfo;
        if (!userInfo || !Object.keys(userInfo).length) {
            this.ctx.logger.info('[usr] 未能成功获取用户登录信息，urs 返回: ', userInfo);
        } else {
            this.ctx.logger.info('[usr] 成功获取用户登录信息，urs 返回: ', userInfo)
        }
        return userInfo || {};
    }
}
