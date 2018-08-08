/**
 * Created by zlb on 18-7-24.
 */
import axios from 'axios'
//定义fetch函数，config为配置
export function fetch(config){
  //返回promise对象
  return new Promise((resolve,reject) =>{
    //创建axios实例，把基本的配置放进去
    const instance = axios.create({
      //定义请求文件类型
      headers:{
        'Content-Type': 'application/json',
      },
      timeout: 3000,
      //定义请求根目录
      baseURL: 'http://192.168.1.245:3001/'
    });
    //请求成功后执行的函数
    instance(config).then(res =>{
      //console.log(res);
      resolve(res);
      //失败后执行的函数
    }).catch(err => {
      //console.log(err);
      reject(err);
    })
  });
}
