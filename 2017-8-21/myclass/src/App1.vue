<template>
  <div id="app">
    <button @click="fn(key)" :class="{active:key==num}" v-for="(val,key) in arr">{{val}}</button>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import Is1 from './components/1';
import Is2 from './components/2';
import Is3 from './components/3';
export default {
  name: 'app',
  data(){
    return {
      currentView:'Is1',
      arr:['点击第一个','点击第二个','点击第三个'],
      num:0
    }
  },
  components:{
    Is1,
    Is2,
    Is3
  },
  methods:{
    fn(key){
      this.num = key;
      this.currentView = 'Is'+(key+1);
      
    }
  }
}
</script>
<style>
.active{
  background: yellow;
}
#app div{
  width:200px;
  height: 150px;
  border: 1px solid #000;
}
</style>

