import { Controller } from 'egg';
import * as path from 'path';
import * as fs from 'fs';

export default class HomeController extends Controller {

    public async index() {
        const { ctx } = this;
        console.log('ctx- url', ctx.request.url)
        const html = path.join(__dirname, '../public/index.html');

        if (await new Promise(
            resolve => fs.exists(html, resolve)
        )) {
            ctx.body = fs.createReadStream(html);
            ctx.type = 'html';
        }
   }
    async notFound() {
        this.ctx.json('hi, RPC notFound');
    }
//   async login() {
//       const { ctx } = this;
//       const html = path.join(__dirname, '../public/index.html');
//       if (await new Promise(
//           resolve => fs.exists(html, resolve)
//       )) {
//           ctx.body = fs.createReadStream(html);
//           ctx.type = 'html';
//       }
//   }
}
