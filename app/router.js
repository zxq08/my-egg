'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const counter = app.middleware.counter()
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/token', controller.home.indexWithToken);
  router.get('/setToken', controller.home.newResponse);
  router.get('/myegg', counter, controller.home.inde2x);
};
