import VueRouter from 'vue-router'
import Home from './views/Home.vue'
import Cars from './views/Cars.vue'
import Car from './components/Car.vue'
import Animals from './views/Animals.vue'
import Drugs from './views/Drugs.vue'

export default new VueRouter({
  routes: [
    {
      path: '',  // localhost:8080/
      component: Home
    },
    {
      path: '/cars',
      component: Cars,
      children: [
        {
          path:'/car/:id',
          component: Car
        }
      ]
    },
    {
      path: '/animals',
      component: Animals
    },
    {
      path: '/drugs',
      component: Drugs
    },
  ],
  mode: 'history'
})