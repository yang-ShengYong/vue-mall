<template>
  <div class="goods-list">
    <router-link tag="div" to="/home/goodsinfo" class="goods-item">
      <div class="goods-img">
        <img src="http://apis.juhe.cn/goodbook/img/379cdafe13f92d62e99388182a6d08ec.jpg" alt />
      </div>
      <div class="title">
        <span>《向诸葛亮借智慧》</span>
      </div>
      <div class="info">
        <p class="price">
          <span class="new">￥89</span>
          <span class="old">
            ￥199
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：5件</span>
        </p>
      </div>
    </router-link>

    <router-link to="/home/goodsinfo" class="goods-item">
      <div class="goods-img">
        <img src="http://apis.juhe.cn/goodbook/img/379cdafe13f92d62e99388182a6d08ec.jpg" alt />
      </div>
      <div class="title">
        <span>《向诸葛亮借智慧》</span>
      </div>
      <div class="info">
        <p class="price">
          <span class="new">￥89</span>
          <span class="old">
            ￥199
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：5件</span>
        </p>
      </div>
    </router-link>

    <div class="goods-item">
      <div class="goods-img">
        <img src="http://apis.juhe.cn/goodbook/img/379cdafe13f92d62e99388182a6d08ec.jpg" alt />
      </div>
      <div class="title">
        <span>《向诸葛亮借智慧》</span>
      </div>
      <div class="info">
        <p class="price">
          <span class="new">￥89</span>
          <span class="old">
            ￥199
          </span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩余：5件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
};
</script>

<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;
  .goods-item {
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 278px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
  }
  .info {
    background-color: #ddd;

    p {
      margin: 0;
      padding: 3px;
    }
    .price {
      .new {
        color: #f40;
        font-weight: bold;
        font-size: 16px;
      }
      .old {
        text-decoration: line-through;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    .sell {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
    }
  }
}
</style>
