import { DefaultConfig } from './config.default';

export default () => {
  const config: DefaultConfig = {};

  config.art = {
    compileDebug: true,
    cache: false,
    minimize: false
  };

  return config;
};
