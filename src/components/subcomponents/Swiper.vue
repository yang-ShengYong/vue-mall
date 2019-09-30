<template>
  <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>
</template>

<script>
export default {
  props: ["lunbotuList"]
}
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    img {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
