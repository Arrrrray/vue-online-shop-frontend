// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vue 应用入口
import Vue from 'vue'
import { ValidationProvider } from 'vee-validate';

import App from './App'
import router from './router'
import store from './store';

Vue.config.productionTip = false
Vue.component('ValidationProvider', ValidationProvider);
/* eslint-disable no-new */
// 生成Vue实例
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
