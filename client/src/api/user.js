import ajax from '@/common/utils/ajax';

export function getUserInfo() {
    return ajax.get('/api/user/info');
}

export function login() {
    return ajax.post('/api/user/login');
}

export function logout() {
    return ajax.post('/api/user/logout');
}