// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入swiper
import Swiper from 'swiper'
Vue.prototype.$swiper = Swiper;
import '../node_modules/swiper/dist/css/swiper.min.css'

// 引入axios
import axios from 'axios'
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

// 引入css js
import './assets/js/remScale'
import './assets/css/base.css'
// 引入icon字体
import './assets/iconFont/iconfont.css'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
