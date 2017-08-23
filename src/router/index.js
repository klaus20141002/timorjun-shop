import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import firstcomponent from '@/components/firstcomponent'
import secondcomponent from '@/components/secondcomponent'

Vue.use(Router);
Vue.use(VueResource);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstcomponent',
      component: firstcomponent
    },
    {
      path: '/2',
      name: 'secondcomponent',
      component: secondcomponent
    }
  ]
})
