import { DefaultConfig } from './config.default';

export default (appInfo) => {
  const config: DefaultConfig = {};

  config.onerror = {
    html(e) {
      this.body = `<p>message</p><pre>${e.message}</pre><p>stack</p><pre>${e.stack}</pre>`;
    },
    json(e) {
      this.body = {
        code: 500,
        message: e.message
      };
    }
  };

  config.cluster = {
    listen: {
        port: 9191 // 线上环境统一 9191
    }
  };

  config.art = {
    compileDebug: false,
    cache: true,
    minimize: true
  };

  return config;
};
