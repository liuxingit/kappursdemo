import view from './helpers/view';

export default [
    {
        path: '/',
        name: 'layout',
        component: view('layout/index')
        //redirect: '/demo'
    },
    {
        path: '/index',
        name: 'layout',
        component: view('layout/index')
        //redirect: '/demo'
    },
    {
        path: '/demo',
        name: 'index',
        component: view('index/index')
        //redirect: '/demo'
    }
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: view('login/index')
    // },
    // {
    //     path: '/demo/page/:id',
    //     name: 'Demo',
    //     component: view('demo/page/index')
    // },
    // {
    //     path: '/demo',
    //     name: 'Demo',
    //     component: view('demo/index')
    // }
];