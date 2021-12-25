/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;

  // 中间件
  const responseTime = middleware.responseTime();
  // 请求路径
  router.get('/', controller.home.index);
  
  router.post('/zhidl', responseTime, controller.home.zhidl);

};
