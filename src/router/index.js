import Vue from 'vue'
import Router from 'vue-router'
import Center from '@/components/Center'
import Agreement from '@/components/Agreement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Center',
      component: Center
    }, {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})
