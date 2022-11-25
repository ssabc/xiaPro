<!--
 * @Author: zhaoshan
 * @Date: 2022-11-22 18:42:59
 * @LastEditTime: 2022-11-22 19:33:42
 * @LastEditors: zhaoshan
 * @Description: 
-->
<template>
  <div class="header-wrap">
    <img :src="hdimg" class='inquiry-head-img' alt=""/>
    黄浦区无感式养老平台-监控数据
  </div>
</template>

<script>
import hdimg from '@/assets/imgs/top-head1.png'

export default {
  name: 'HEADER',
  components: {
  },
  data() {
    return {
      hdimg
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrap {
  text-align: center;
  display: flex;
  justify-content: center;
}
</style>