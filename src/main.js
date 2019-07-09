import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import fastclick from 'fastclick'

// stylus
import 'common/stylus/index.styl'

fastclick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
