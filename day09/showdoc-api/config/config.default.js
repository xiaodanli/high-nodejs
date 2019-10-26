/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

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
  config.keys = appInfo.name + '_1571279173704_1264';

  // add your middleware config here
//   config.middleware = ['error','authentication'];

  config.static = {
      prefix:'/',
      dir:path.join(appInfo.baseDir,'app/public')
  }

  exports.cors = {
    // {string|Function} origin: '*',
    // {string|Array} allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
    // origin:'http://localhost:8080',
    // allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    mysql:{
        client:{
            host:'localhost',
            user:'root',
            password:'root',
            port:'3306',
            database:'showdoc-1704d'
        },
        app:true,
        agent:false
    },
    security : {
        // csrf:{
        //     queryName: '_csrf', // 通过 query 传递 CSRF token 的默认字段为 _csrf
        //     bodyName: '_csrf',
        //     headerName: 'x-csrf-token'
        // }
        
        // csrf: false,
        // domainWhiteList: [ 'http://localhost:8080' ]
    },
    view : {
        mapping: {
          '.html': 'ejs',
        }
    }
  };

  return {
    ...config,
    ...userConfig,
  };
};
