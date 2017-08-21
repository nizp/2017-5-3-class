import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Is1 from '@/components/1';
import Is2 from '@/components/2';
import Is3 from '@/components/3';
import router from '@/components/router';
import router1 from '@/components/router1';
const routes = [
  {
    path:'/Is1',
    component:Is1
  },
  {
    path:'/Is2',
    component:Is2,
    children:[
      {
        path:'num1',
        component:router1
      }
    ]
  },
  {
    path:'/Is3',
    component:Is3
  },
  {
    path:'/abc/:id',
    component:router
  },
  {
    path:'/num3',
    name:'num3',
    component:Is3
  },
  { path: '/miaov', redirect: '/Is1' }
  
];
//通过mode来设置/xx的路径，就不再是#/xx
export default new Router({mode: 'history',routes});
