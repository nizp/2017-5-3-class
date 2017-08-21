import Vue from 'vue'
import Router from 'vue-router'
import Is1 from '@/components/1';
import Is2 from '@/components/2';
import Is3 from '@/components/3';

//中间件
Vue.use(Router);

export default new Router({
  routes:[
    {
      path:'/',
      component:Is1
    },
    {
      path:'/Is2',
      component:Is2
    },
    {
      path:'/Is3',
      component:Is3
    }
  ]
});
