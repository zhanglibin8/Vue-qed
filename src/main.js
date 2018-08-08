// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './css/reset.min.css';
//Animate.css
import 'animate.css';
import App from './App';
import axios from "axios";
import qs from 'qs';
Vue.prototype.$qs = qs;
import $ from 'jquery';
import { getData } from './axios'
import { deepCopy } from './copy'

import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
// Vue.use(iView)

// import './my-theme/index.less';

Vue.use(ElementUI);
Vue.use(Vuex);


Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$axios = axios;
Vue.prototype.$ = $;
Vue.prototype.getData = getData;
Vue.prototype.deepCopy = deepCopy;

Vue.component('test-component',{
  props:['title'],
  data:function () {
    return {
      message:'largerSize'
    }
  },
  template:`<div><button v-on:click="$emit('larger-text',5)">{{message}}</button>{{title}}</div>`
});



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
