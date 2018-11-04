import Element from 'element-ui';
import core from '@kaola/core';

export const requestInterceptors = [
    {
        name: 'addHttpRequestHeader',
        success(config) {
            config.headers['X-Requested-With'] = 'XMLHttpRequest';
            config.headers['x-csrf-token'] = core.tools.cookie('csrfToken');
            return config;
        },
        fail(err) {
            console.error('request error: ', err);
            return Promise.reject(err);
        }
    }
];

export const responseInterceptors = [
    {   
        name: 'formatResponse',
        success(response) {
            console.log(response, 'response');
            const data = response.data || {};
            // const data = Object.assign({}, response.data, {
            //     __response: response
            // });
            return data;
        }
    },
    {
        name: 'handleError',
        success(response) {
            console.log(response, '-----');
            if (response.code !== 200) {
                // do something
                Element.Notification.error({
                    title: '请求异常',
                    message: 'oooooops~~~~',
                    duration: 3000
                });
            }
            return response;
        },
        fail(err) {
            console.error('response error: ', err);
        }
    }
];

const interceptors = {
    response: responseInterceptors,
    request: requestInterceptors
};

function doInstall(instance, options = {}) {
    const { type, ignoreIntercepors = [] } = options;
    interceptors[type]
        .filter(interceptor => !~ignoreIntercepors.indexOf(interceptor.name))
        .forEach((interceptor) => {
            const { success, fail } = interceptor;
            instance.interceptors[type].use(success, fail);
        });
}

export function install(instance, option = {}) {
    const {
        ignoreIntercepors = []
    } = option;

    doInstall(instance, {
        type: 'request',
        ignoreIntercepors
    });

    doInstall(instance, {
        type: 'response',
        ignoreIntercepors
    });
}