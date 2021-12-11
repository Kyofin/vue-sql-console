import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
// 引用router/index.js文件
import router from './router'
import axios from 'axios'
// 引入element样式
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios



new Vue({
  render: h => h(App),
  router
}).$mount('#app')