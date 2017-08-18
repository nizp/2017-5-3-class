<template lang="html">
  <div>
    <div>我是PPa</div>
    <button @click="fn">按钮</button>
    <!-- <ul>
      <li v-for="(val,key) in Reverse">{{val}}</li>
    </ul> -->
    <ul>
      <li v-for="(val,key) in arr">{{val}}</li>
    </ul>
    <!-- <span>{{arr}}</span> -->
    <!-- <p>{{pVal}}</p> -->
  </div>
</template>

<script>
/*
  如果要把父组件的数据直接用于子组件的操作，那么需要把父组件的
  数据继承下来，也就是说，给子组件定义一个数据等于父组件的数据
  注意：
    如果父组件传递的是一个对象类型，那么需要deepclone
*/
export default {
  name:'PPa',
  // props:['pArr','pVal'],
  props:{
    pArr:Array
  },
  data(){
    return {
      // val:this.pVal
      arr:[...this.pArr]//.concat()
    }
  },
  
  // computed:{
  //   Reverse:function(){
  //     return this.pVal.split('').reverse().join('');
  //   }
  // },
  
  methods:{
    fn(){
    //  console.log(this.pArr == this.arr)
    //this.val = '789';
    this.arr.push(5);
      //console.log(this.pArr);
    }
  }
}
</script>

<style lang="css">
</style>
