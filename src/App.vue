<!--
 * @Author: zhaoshan
 * @Date: 2022-11-21 19:49:18
 * @LastEditTime: 2022-11-22 19:30:25
 * @LastEditors: zhaoshan
 * @Description: 
-->
<template>
  <dv-full-screen-container id="app">
      <Header></Header>
      <MainContent></MainContent>
  </dv-full-screen-container>
</template>

<script>
import Header from '@/components/Header.vue'
import MainContent from '@/components/ColumnBoxs/Index.vue'

export default {
  name: 'App',
  components: {
    Header,
    MainContent
  }
}
</script>

<style lang="scss">
@import '@/style/base.css';
@import '@/style/app.scss';
#app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
