import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Public from '../components/routers/login/public';
import Prve from '../components/routers/login/prve';
import Login from '../components/routers/login/login';
console.log(Public)
const routes = [
  {
    path:'/public',
    component:Public
  },
  {
    path:'/prve',
    
    redirect:(to)=>{
      let {query,params} = to;
      // console.log(Vue.$router)
      if(!query.user){
        return {path:'/login'}
      }else{
        return {path:'/prve/ok'}
      }
      
    }
  },
  {
      path:'/prve/ok',
      component:Prve
  },
  {
      path:'/login',
      component:Login
  },
];
//通过mode来设置/xx的路径，就不再是#/xx
export default new Router({mode: 'history',routes});
