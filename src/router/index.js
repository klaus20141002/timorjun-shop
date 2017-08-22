import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
/*import secondcomponent from '@/components/secondcomponent'*/
import firstcomponent from '@/components/firstcomponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/1',
      name: 'firstcomponent',
      component: firstcomponent
    }/*,
    {
      path: '/2',
      name: 'secondcomponent',
      component: secondcomponent
    }*/
  ]
})
