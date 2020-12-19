import Vue from 'vue'
import App from './App.vue'
import router from 'vue-router'

// component imports

Vue.config.productionTip = false
Vue.use(router)

new Vue({
  render: h => h(App),
}).$mount('#app')
