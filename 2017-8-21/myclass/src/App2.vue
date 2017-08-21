<template>
  <div id="app">
    <!-- <button @click="fn(key)" :class="{active:key==num}" v-for="(val,key) in arr">{{val}}</button> -->
    <router-link to="/" tag="button">切换到第一个</router-link>
    <router-link to="/Is2" tag="button">切换到第二个</router-link>
    <router-link to="/Is3" tag="button">切换到第三个</router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Is1 from './components/1';
import Is2 from './components/2';
import Is3 from './components/3';

/*

小技巧：
  在v-if，动态组件，路由中使用keep-alive将已经使用过的组件缓存，提高性能。
 
 如果要进行切换，那么vue提供了一个router-link-exact-active，
 当前选中的，可以在某个元素下的router-link-exact-active加样式
 
 
 
 */

export default {
  name: 'app',
  data(){
    return {
      arr:['点击第一个','点击第二个','点击第三个'],
      num:0
    }
  },
  methods:{
    fn(key){
      this.num = key;
    
      
    }
  }
}
</script>
<style>
.router-link-exact-active{
  background: yellow;
}
#app div{
  width:200px;
  height: 150px;
  border: 1px solid #000;
}
</style>

