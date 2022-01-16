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

  config.mysql = {
    app:true,     //是否挂载到app下面
    agent:false,  //是否挂载到代理下面
    client:{
      host:'127.0.0.1',      // 数据库地址
      port:'3306',           // 端口
      user:'root',           // 用户名
      password:'123456',    // 密码
      database:'myegg'    // 连接的数据库名称
    }
  }

  return {
    ...config,
    ...userConfig,
  };
};
