/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1642299316288_5705';

  // add your middleware config here
  config.middleware = []; // ['counter'];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.security = {
    csrf :{
      enable:false,
    }
  }

  config.session = {
    key :"XQZ_SESS",   // 设置Key的默认值
    httpOnly:true,      // 设置服务端操作
    maxAge:1000*60  ,   // 设置最大有效时间
    renew: true,        // 页面有访问动作自动刷新session 
  }

  return {
    ...config,
    ...userConfig,
  };
};
