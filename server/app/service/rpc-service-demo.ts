// docs：http://kapp-kl.netease.com/docs/customs/dubbo.html

import {RPCService} from '@kapp/dubbojs';

/**
 * Test Service
 */
class Test extends RPCService {
  static config(groups) {
    return {
        interface: 'com.netease.kaola.onlinetest.demo.jsonrpc.JsonRpcService',
        version: '',
        group: groups.group2,
        protocol: 'jsonrpc',
        // timeout: 3000
    };
  }

  async gwtest() {
      const data = await this.invoke('findAttachments', ['k2']);

      return data;
  }
}

export default Test;