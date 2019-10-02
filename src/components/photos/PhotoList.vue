<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            href="#item1mobile"
            data-wid="tab-top-subpage-1.html"
          >推荐</a>
          <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">热点</a>
          <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">北京</a>
          <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">社会</a>
          <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">娱乐</a>
        </div>
      </div>
    </div>
    <!-- 图片列表区域 -->
    <ul class="photo-list">
      <li v-for="item in photoList" :key="item.id">
        <img v-lazy="item.img"/>
      </li>
    </ul>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      photoList: []
    };
  },
  created() {
    this.getPhotos();
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getPhotos() {
      this.$http
        .post(
          "https://api.apiopen.top/getImages",
          { page: 2,count: 200 },
          { emulateJSON: true }
        )
        .then(result => {
          console.log(result)
          if (result.status === 200) {
            this.photoList = result.body.result;
          } else {
            Toast("图片加载失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
ul {
  margin: 0;
  padding: 0;
  width: 100%;
  li {
      background-color: #ccc;
      list-style: none;
      text-align: center;
      margin: 10px;
      box-shadow: 0 0 9px #999;
  }
  img {
    width: 100%;
    vertical-align: middle;
  }
  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
  }
}
</style>
