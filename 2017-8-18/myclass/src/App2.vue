<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>{{arr}}</div>
    <button @click="addFn">这是父组件的按钮</button>
    <input type="text" v-model="val"/>
    <hr />
    <ppa :pArr="arr" :pVal="val"></ppa>
    
  
  </div>
</template>

<script>
import Hello from './components/Hello';
import Ppa from './components/PPa';

/*
  父组件传递数据是在子组件中添加属性
  子组件拿父组件的数据，props:[] || {}
  
  1.父组件再data函数中定义数据
    data(){
      return {
        val:'456'
      }
    }
  
  2.传递给子组件的时候加上:传递的名字="传递的数据"
    <children :pVal="val"></children>
    
  3.子组件还是通过props:['pVal']
  
*/


export default {
  name: 'app',
  components: {
    Hello,
    Ppa
  },
  data(){
    return {
      val:'123',
      arr:0,
      a:3
    }
  },
  methods:{
    addFn(){
      this.val = '56789';
      // this.a++;
      // this.arr.push(this.a);
    }
  }
}
</script>

<style>

</style>
