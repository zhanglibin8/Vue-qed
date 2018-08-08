/**
 * Created by zlb on 18-8-8.
 *   axios 封装
 */
import axios from "axios";
import qs from 'qs';
Vue.prototype.$qs = qs;
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 环境的切换
axios.defaults.baseURL = 'http://192.168.1.245:3001/';

if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'http://192.168.1.245:3001/';
}
else if (process.env.NODE_ENV == 'debug') {
  axios.defaults.baseURL = 'http://192.168.1.245:3001/';
}
else if (process.env.NODE_ENV == 'production') {
  axios.defaults.baseURL = 'http://192.168.1.245:3001/';
}
//环境变量的配置
  //查看
  //echo $NODE_ENV
  //配置
  //export NODE_ENV=production
  //删除
  //unset NODE_ENV

//设置超时时间 10s
axios.defaults.timeout = 10000;

