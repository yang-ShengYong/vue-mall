<template>
  <div class="content">
    新闻详情 -- {{id}}
    <h3>没有数据接口只能先写死了</h3>
    <comment-box></comment-box>
  </div>
</template>

<script>
import { Toast } from 'mint-ui'
import Comment from '../subcomponents/Comment.vue'

export default {
  data () {
    return {
      id: this.$route.params.docid,
      newsinfo: ''
    }
  },
  created () {
    this.getNewsinfo()
  },
  methods: {
    getNewsinfo () {
      // this.$http.get('https://3g.163.com/all/article/'+this.id+'.html')
      //     .then(result => {
      //       console.log(result)
      //     })
    }
      
  },
  components: {
    commentBox: Comment
  }
}
</script>

<style lang="scss" scoped>

</style>
