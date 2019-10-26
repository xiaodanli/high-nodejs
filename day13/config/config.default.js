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
  config.keys = appInfo.name + '_1571799355661_4136';

  // add your middleware config here
  config.middleware = ['params'];
  


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql:{
        client:{
            host:'localhost',
            user:'root',
            password:'root',
            database:'yk-1704d-a',
            port:3306
        },
        app:true,
        agent:false
    },
    security : {
        csrf: false,
        domainWhiteList: [ 'http://192.168.133.1:3000' ]
    },
    cors:{
        origin:'*',
        allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
