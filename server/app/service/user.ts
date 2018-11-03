import { LoginUser } from '../interface/login-user';
import { Service } from 'egg';


export default class User extends Service {
    async getUser(): Promise<LoginUser> {
        if (this.config.kaolaEnv === 'local') {
            return {
                email: 'liuxin01@corp.netease.com',
                name: 'lx',
            };
        } else {
            let userInfo = this.ctx.session.userInfo || {};
            console.log(this.ctx.session, '-----this.ctx.session')
            return userInfo;
        }
    }
}
