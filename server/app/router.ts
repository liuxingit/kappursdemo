import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const ursklMiddleware = app.middleware.urskl({
      cookieNames: ['NTES_SESS', 'NTES_YD_SESS', 'NTES_OSESS', 'NTES_PASSPORT', 'NTES_YD_PASSPORT'],
      loginUrl: 'http://urs.reg.163.com:8009/login?target=#TOPURL#',
      //'http://localhost:8009/login?target=#TOPURL#', 
      //'https://www.kaola.com/login.html',
  });
  router.get('/api/userInfo', controller.user.getInfo);
  router.get('/404', controller.home.notFound);
  router.get('/', ursklMiddleware, controller.home.index);
  router.get('/demo', ursklMiddleware, controller.home.index);
  router.get('*', controller.home.index);
};
