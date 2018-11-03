import Vue from 'vue';
import Router from 'vue-router';
import view from './helpers/view';

import demo from './demo';
import exception from './exception';

Vue.use(Router);

const router = new Router({
    mode: 'hash',
    routes: [
        ...demo,
        ...exception,
        {
            path: '/',
            name: 'Layout',
            component: view('layout/index'),
            redirect: {
                name: 'NewActivity'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log('you are going to', to);
    next();
});

export default router;
