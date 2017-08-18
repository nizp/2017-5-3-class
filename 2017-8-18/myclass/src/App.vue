<template>
  <div id="app">
    <slots>
      <span class="s1" slot="1">Hello</span>
      <span class="s2" slot="2">Word</span>
    </slots>
  </div>
</template>

<script>
/*
  slot类似于react中的this.props.children
  
  在没有在组件双标签中传入元素时，走的是默认的结构
  如果传入了元素，那么走传入的元素
  
  如果页面中有多个slot，那么需要在子组件中给slot取name="xx"
  父组件就通过slot="xx"来定位子组件slot替换的顺序。
  
*/
import Slots from './components/slot';
export default {
  name: 'app',
  components: {
    Slots
  }
}
</script>
<style>
.s1{
  color: red;
}
.s2{
  color: green;
}
</style>
