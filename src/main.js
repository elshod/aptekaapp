import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter)
Vue.use(Vuelidate)

Vue.config.productionTip = false

export const eventEmitter = new Vue()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
