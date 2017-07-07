// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyLoad from 'vue-lazyload'
Vue.prototype.axios = axios;
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  preLoad: 1,
  loading: require('../static/timg.gif'),
  error: require("../static/timg.gif")
})

let vm=new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data:{
    ok:false
  }
})
router.beforeEach((to, from, next) => {
    vm.ok=true;
    next()
});
