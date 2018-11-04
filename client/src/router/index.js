import Vue from 'vue';
import Router from 'vue-router';
//import view from './helpers/view';

import demo from './demo';
import exception from './exception';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        ...demo,
        ...exception
    ]
});

router.beforeEach((to, from, next) => {
    console.log('you are going to', to);
    next();

    // console.log('路由拦截');
    // //判断要去的路由有没有requiresAuth
    // if (to.meta.requiresAuth) {
    //     let token = document.cookie.getCookie('token');
    //     if (token) {
    //         next();
    //     } else {
    //         next({
    //             path: '/login'
    //         });
    //     }
    // } else {
    //     next(); //如果无需token,那么随它去吧
    // }
});

export default router;
