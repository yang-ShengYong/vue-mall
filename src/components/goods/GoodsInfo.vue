<template>
  <div class="goodsinfo-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <Swiper :lunbotuList="lunbotuList"></Swiper>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">《向诸葛亮借智慧》</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            <span class="new">￥89</span>
            <span class="old">
              <del>￥199</del>
            </span>
          </p>
          <div class="buy-count">
            购买数量：
            <div class="mui-numbox" data-numbox-min="1">
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="test" class="mui-input-numbox" type="number" value="1" 
                @change="countChanged"
                ref="numbox"
              />
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </div>

          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addShopcar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品详情</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>标题：向诸葛亮借智慧</p>
          <p>分类：历史 心理学 管理</p>
          <p>阅读数：8091</p>
          <p>上架时间：2013年4月28日</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain>图文介绍</mt-button>
        <mt-button type="primary" size="large" plain>商品评论</mt-button>
      </div>
    </div>
    <transition @beforeEnter="beforeEnter" @enter="enter" @afterEnter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
  </div>
</template>

<script>
import Swiper from "../subcomponents/Swiper.vue"
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
      lunbotuList: [],
      ballFlag: false,
      selectedCount: 1
    };
  },
  created() {
    this.getLunbotu();
  },
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    getLunbotu() {
      for (let i = 0; i < 3; i++) {
        this.$http
          .get("https://img.xjh.me/random_img.php?return=json")
          .then(result => {
            // console.log(result)
            if (result.status === 200) {
              this.lunbotuList.push(result.body);
            } else {
              Toast("图片" + i + "加载失败");
            }
          });
      }
    },
    addShopcar() {
      this.ballFlag = true;
      // 获取商品对象
      var goodsinfo = {
        id: 123,
        title: '《向诸葛亮借智慧》',
        count: this.selectedCount,
        price: 89,
        selected: true
      }
      this.$store.commit('addToCar', goodsinfo)
      document.getElementById("badge").innerText = this.$store.getters.getAllCount
    },
    countChanged () {
      this.selectedCount = parseInt(this.$refs.numbox.value)
    },
    beforeEnter(el) {
      el.style.transform = "translate(0, 0)";
    },
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badge = document.getElementById("badge");
      const badgePosition = badge.getBoundingClientRect();
      const x = badgePosition.left - ballPosition.left;
      const y = badgePosition.top - ballPosition.top;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "all .5s cubic-bezier(.22,-0.55,.85,.67)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    Swiper
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .ball {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    left: 153px;
    top: 390px;
  }
}
.buy-count {
  margin-bottom: 10px;
}
.price .new {
  color: #f40;
  font-weight: bold;
  font-size: 16px;
}
.mui-card-footer {
  display: block;
  button {
    margin-bottom: 5px;
  }
}
</style>
