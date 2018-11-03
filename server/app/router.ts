import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/404', controller.home.notFound);

  router.get('/api/demo/index', controller.demo.index);
  router.get('/', controller.home.index);
  router.get('/api/user/info', controller.user.getInfo);
};
