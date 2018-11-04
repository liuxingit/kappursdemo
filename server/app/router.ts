import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;
  const ursklMiddleware = app.middleware.urskl({
      cookieNames: ['NTES_SESS', 'NTES_YD_SESS', 'NTES_OSESS', 'NTES_PASSPORT', 'NTES_YD_PASSPORT'],
      loginUrl: 'http://localhost:8080/login?target=#TOPURL', // 'https://www.kaola.com/login.html?target=#TOPURL#'
  });
  console.log(ursklMiddleware, '=======',app.middleware,'======', '---app.middleware.urskl');

  router.get('/api/404', controller.home.notFound);
  router.get('/api/demo/index', controller.demo.index);
  router.get('/api/userInfo', controller.user.getInfo);
  router.get('/', ursklMiddleware, controller.home.index);
};
