import { DefaultConfig } from './config.default';

export default (appInfo) => {
  const config: DefaultConfig = {};

  let zkHosts = 'kaola-test-dubbozk01.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk02.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk03.v1.kaola.jdb.vpc:2181';

  config.dubbo = {
    zkHosts
  }

  return config;
};
