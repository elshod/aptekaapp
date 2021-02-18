import VueRouter from 'vue-router'

import Home from './views/Home.vue'
import Cars from './views/Cars.vue'
import Car from './components/Car.vue'
import ErrorPage from './views/ErrorPage.vue'
import Drugs from './views/Drugs.vue'

const Animals = resolve => {
  require.ensure(['./views/Animals.vue'],()=>{
    resolve(
      require('./views/Animals.vue')
    )
  })
}

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
          component: Car,
          name: 'car'
        }
      ]
    },
    {
      path: '/animals',
      component: Animals
    },
    {
      path: '/hayvon',
      redirect: 'animals'
    },
    {
      path: '/drugs',
      component: Drugs
    },
    {
      path: '*',
      component: ErrorPage
    }
  ],
  mode: 'history'
})