<template lang="html">
  <div>
    {{arr[this.$route.params.id]}}
  </div>
  
</template>

<script>
/*
在配置路由的时候，需要在路径处加上/:id
如果匹配到了路径，那么可以通过this.$route.path找到整个路径
也可以通过this.$route.params.id找到id为多少。
  
*/
export default {
  data(){
    return {
      arr:[
        '今天的第一条最大的新闻1',
        '今天的第一条最大的新闻2',
        '今天的第一条最大的新闻3'
      ]
    }
  }
}
</script>

<style lang="css">
</style>
