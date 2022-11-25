<!--
 * @Author: zhaoshan
 * @Date: 2022-11-22 18:51:56
 * @LastEditTime: 2022-11-22 19:24:02
 * @LastEditors: zhaoshan
 * @Description: 
-->
<template>
  <div class="box-wrap">
    <dv-border-box-11 title="总体服务趋势"></dv-border-box-11>
    <dv-border-box-11 title="记录仪累计开机时间"></dv-border-box-11>
    <dv-border-box-11 title="访客统计"></dv-border-box-11>
  </div>
</template>

<script>
export default {
  name: 'BOX2',
  components: {
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.box-wrap {
  flex: 1;
}
</style>