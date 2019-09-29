<template>
  <div class="content">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="我想说……" maxlength="120"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item">
        <div class="cmt-title"></div>
        <div class="cmt-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  created () {

  },
  methods: {
    
      
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 14px;
  height: 85px;
  margin: 0;
}
.cmt-list {
  .cmt-item {
    .cmt-title {

    }
    .cmt-body {
      
    }
  }
}
</style>
