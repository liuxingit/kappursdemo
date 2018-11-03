import { Controller } from 'egg';

export default class UserController extends Controller {
  // async getInfo() {
  //   const user = await this.service.user.getUser();
  //   this.ctx.json(user);
  // }
  async getInfo() {
    const { ctx } = this;
    const isLocal = ctx.app.env === 'local';
    let userInfo = {};
    if (!isLocal) {
        const mockCasInfo = require('../../mock/com.netease.kaola.onlinetest.demo.rest.UserService/getUser.json');
        userInfo = mockCasInfo;
    } else {
        userInfo = await ctx.service.user.getUser();
        console.log(JSON.stringify(userInfo,null, 4),'----userInfo')
    }
    // if(!userInfo.name){
       
    // }
    ctx.body = {
      data: userInfo,
      code: 200
    };
}
}
