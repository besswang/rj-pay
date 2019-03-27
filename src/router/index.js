import Vue from 'vue'
import Router from 'vue-router'
import Center from '@/components/Center'
import Pay from '@/components/Pay'
import Agreement from '@/components/Agreement'
Vue.use(Router)

export default new Router({
  mode: 'history', // 消除#
  base: '/dist',
  routes: [
    {
      path: '/',
      name: 'Center',
      component: Center
    }, {
      path: '/pay',
      name: 'Pay',
      component: Pay
    }, {
      path: '/agreement',
      name: 'Agreement',
      component: Agreement
    }
  ]
})
