<template lang="html">
  <div>
    <!-- <router-link to="/Is1">首页</router-link>
    <router-link to="/Is2">详情页1</router-link>
    <router-link to="/Is3">详情页2</router-link> -->
    <router-link to="/abc/0" tag="button">首页</router-link>
    <router-link to="/Is2" tag="button">详情页1</router-link>
    <!-- <router-link to="/abc/2" tag="button">详情页2</router-link> -->
    <router-link :to="{name:'num3'}" tag="button">详情页2</router-link>
    <router-link to="/miaov" tag="button">重定向</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css">
</style>
