import view from './helpers/view';

export default [
    {
        path: '*',
        redirect: '/404'
    },
    {
        path: '/404',
        name: '404',
        component: view('exception/404')
    },
    // {
    //     path: '/login',
    //     name: '404',
    //     component: view('exception/404')
    // }
    {
        path: '/login',
        name: 'Login',
        component: view('exception/login')
    }
];