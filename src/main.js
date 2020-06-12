import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import wjWheel from './packages/index'
Vue.use(wjWheel)

new Vue({
  render: h => h(App),
}).$mount('#app')
