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

  router.get("/addGirl", controller.girlManage.addGirl);
router.get("/delGirl", controller.girlManage.delGirl);
router.get("/updateGirl", controller.girlManage.updateGirl);
router.get("/getGirls", controller.girlManage.getGirls);
};
