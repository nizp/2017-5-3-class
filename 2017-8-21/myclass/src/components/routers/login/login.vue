<template lang="html">
  <div>
    <div>
      {{users}}
      <button  @click="fn({user:1})">请登录1</button>
      <!-- <router-link @click="fn({user:1})" :to="{path:'/prve',query:{user:1}}">请登录</router-link> -->
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
  methods:{
    fn(obj){
      localStorage.setItem('user',1);
      
      setTimeout(()=>{
        this.$router.push({
          path:'/prve/ok'
        });
      },2000)
    }
  },
  computed:{
    users:function(){
      if(this.user){
        this.$router.push({
          path:'/prve/ok'
        });
      }
    }
  }
}
</script>

<style lang="css">
</style>
