<template lang="html">
  <li>
    <input @click="click(val)" type="checkbox" v-model="val.checked">
    <span>{{val.name}}</span>
  </li>
</template>

<script>
export default {
  name:'Ctop',
  props:['pVal'],
  data(){
    return {
      val:{...this.pVal}
    }
  },
  methods:{
    
    click(val){
      this.$emit('childChange',val);
    }
    
    
    
    // click(val){
    //   // console.log(1111)
    //   //在子组件点击数据的时候，触发一个childChange的子定义事件，
    //   //并且把最新的vlue值专递给父组件
    //   this.$emit('childChange',val);
    // }
  }
}
</script>

<style lang="css">
</style>
