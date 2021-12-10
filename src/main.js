import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import axios from 'axios'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import UserProfile from './components/UserProfile.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.axios = axios
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/user',
      component: UserProfile
    }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')