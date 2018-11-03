import { Controller } from 'egg';

export default class DemoController extends Controller {
  public async index() {
    const data = await this.ctx.service.rpcServiceDemo.gwtest()
    this.ctx.json(data);
  }
}
