<template lang="html">
  <div>
    {{users}}
    <div v-if="user">
      这是私有信息
    </div>
    
  </div>
</template>
<script>


export default {
  data(){
    return {
        user:localStorage.getItem('user')
    }
  },
  computed:{
    users:function(){
      if(!this.user){
        this.$router.push({
          path:'/login'
        });
      }
    }
  }
}
</script>

<style lang="css">
</style>
