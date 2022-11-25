<!--
 * @Author: zhaoshan
 * @Date: 2022-11-22 18:53:29
 * @LastEditTime: 2022-11-22 19:59:33
 * @LastEditors: zhaoshan
 * @Description: 
-->
<template>
  <div class="content-wrap">
    <Box1></Box1>
    <Box2></Box2>
    <Box3></Box3>
    <Box4></Box4>
  </div>
</template>

<script>
import Box1 from '@/components/ColumnBoxs/Box1.vue'
import Box2 from '@/components/ColumnBoxs/Box2.vue'
import Box3 from '@/components/ColumnBoxs/Box3.vue'
import Box4 from '@/components/ColumnBoxs/Box4.vue'

export default {
  name: 'CONTENT',
  components: {
    Box1, Box2, Box3, Box4
  },
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.content-wrap {
  flex: 1;
  display: flex;
  align-content: center;
  padding: 0 15px;
  margin-bottom: 40px;
}
::v-deep .box-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 1%;
  &:last-child {
    margin-right: 0;
  }
  & > div {
    flex: 1;
    padding-bottom: 40px;
    &:last-child {
      padding-bottom: 0;
    }
  }
}
::v-deep .dv-border-box-11 .dv-border-svg-container {
  width: auto;
  height: auto;
}
</style>
