/*
 * @Author: 李晓丹 
 * @Date: 2019-09-03 16:30:09 
 * @Last Modified by: 李晓丹
 * @Last Modified time: 2019-10-22 16:49:19
 */

import axios from 'axios'
import getParams from './getParams'

var instance = axios.create(); //创建axios的实例  
// 全局拦截

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    console.log(config);
    config.headers['x-csrf-token'] = getParams('csrfToken')
    
    // 在发送请求之前做些什么
    return config
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
      post(url,data){
        return instance.post(url,data)
      },
      get(url,data){
        return instance.get(url,{params:data})
      }
}