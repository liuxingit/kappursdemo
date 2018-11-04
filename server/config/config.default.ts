import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';
import { getEnv, adapters} from '@kapp/disconf-toolkit';
import * as path from 'path';
import * as helper from '../app/helper';

// for config.{env}.ts
export type DefaultConfig = PowerPartial<EggAppConfig & BizConfig>;

// app special config scheme
export interface BizConfig {
    sourceUrl: string;
}

interface KappAppInfo extends EggAppInfo {
    kaolaEnv;
    region: string;
    baseDir: string;
}

export default (appInfo: KappAppInfo) => {
    const config = {} as PowerPartial<EggAppConfig> & BizConfig;

    // app special config
    config.sourceUrl = `https://github.com/eggjs/examples/tree/master/${appInfo.name}`;

    // override config from framework / plugin
    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1528688881895_6143';

    // add your config here
    config.middleware = [];

    config.cluster = {
        listen: {
            port: 8009
        }
    }

    config.view = {
        defaultViewEngine: 'art',
        root: [
            path.join(appInfo.baseDir, 'app/view'),
        ].join(','),
    };

    config.art = {
        imports: helper,
        writeResp: true,
        debug: false,
        htmlMinifierOptions: {
            collapseWhitespace: true,
            minifyCSS: false,
            minifyJS: false,
            // 运行时自动合并：rules.map(rule => rule.test)
            ignoreCustomFragments: []
        }
    };


    const disconfEnv = getEnv(appInfo);

    config.disconf = {
        groups: [
            {
                type: 'normal',
                name: 'trace_config',
                env: disconfEnv.normal,
                adapter: adapters.trace({
                    percent: `kaola#${appInfo.name}_sample_rate`
                })
            }, {
                type: 'normal',
                name: 'node_grayscale_config',
                env: disconfEnv.normal,
                adapter: adapters.grayscale({
                    name: `${appInfo.name.replace(/^kaola\-/, '').replace(/\-fed/, '')}_gc`
                    // 填写 UCC 上 `node_grayscale_config` 配置项内的 key，如 tradecenter_gc 或者 mykaola_gc
                })
            }, {
                type: 'rate-limiter',
                application: appInfo.name,
                env: disconfEnv.normal,
                adapter: adapters.rateLimiter()
            }, {
                // 静态配置填写字符串 'static'
                type: 'static',
                name: 'dubbo',
                // 静态配置 env 可填写 appInfo.kaolaEnv，代表集群名
                env: disconfEnv.static,
                // 静态配置必须带上 application 字段
                application: 'kaola-market-compose', //
                adapter: adapters.dubbo()
            }
        ]
    }

    config.dubbo = {
        groups: {
            default: appInfo.kaolaEnv,
            group2: 'performance'
        }
    }

    // config.urskl = {
    //     cookieNames: ['NTES_SESS','NTES_YD_SESS','NTES_OSESS','NTES_PASSPORT','NTES_YD_PASSPORT'],
    //     loginUrl: 'http://localhost:8080/login?target=#TOPURL' //'https://www.kaola.com/login.html?target=#TOPURL#'
    // };

    return config;
};
