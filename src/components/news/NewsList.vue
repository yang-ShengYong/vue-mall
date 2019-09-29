<template>
  <div>
    <ul class="mui-table-view">
      <li v-for="(value, key, index) in newsList" :key="index" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+value[0].docid">
          <!-- <img
            class="mui-media-object mui-pull-left"
            :src="value[0].picInfo[0].url"
          /> -->
          <div class="mui-media-body">
            {{ value[0].title }}
            <p class="mui-ellipsis">
              <span>发表时间：{{ value[0].ptime }}</span>
              <span>点击：{{ value[0].tcount }}次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
    
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      selected: Number,
      newsList: {}
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("https://www.apiopen.top/journalismApi").then(result => {
        console.log(result);
        if (result.status === 200) {
          this.newsList = result.body.data;
        } else {
          Toast("获取新闻列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  .mui-media-body {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
.mint-navbar .mint-tab-item.is-selected {
  margin-bottom: 0;
}
mt-tab-container mt-tab-container-item:nth-child(1) {
  display: block;
}
</style>
