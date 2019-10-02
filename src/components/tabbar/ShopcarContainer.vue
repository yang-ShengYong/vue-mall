<template>
  <div class="shopcar-container">
    <div class="mui-card" v-for="item in car" :key="item.id">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="left">
            <h4>{{ item.title }}</h4>
            <p>单价：￥{{ item.price }}</p>
            <div class="buy-count">
              购买数量：
              <div class="mui-numbox" data-numbox-min="1">
                <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                <input 
                class="mui-input-numbox" 
                type="number" 
                :value="item.count"
                :ref="item.id"
                @change="countChanged(item.id)"
                />
                <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
              </div>
            </div>
          </div>
          <mt-switch :value="item.selected" @change="selectedChanged(item.id)"></mt-switch>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <span>总计：<span class="sumPrice">{{ sumPrice }}</span> 元</span>
          <mt-button type="danger">结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  data() {
    return {
      car: [],
      sumPrice: 0
    };
  },
  created () {
    this.car = this.$store.getters.getCar
    this.sumPrice = this.$store.getters.getSumPrice
  },
  mounted () {
    mui('.mui-numbox').numbox()
  },
  methods: {
    countChanged (id) {
      const newCount = parseInt(this.$refs[id+''][0].value)
      this.$store.commit('correctCountById', {
        id,
        newCount
      })
      this.sumPrice = this.$store.getters.getSumPrice
      document.getElementById('badge').innerText = this.$store.getters.getAllCount
    },
    selectedChanged (id) {
      this.$store.commit('correctSelectedById', id)
      this.sumPrice = this.$store.getters.getSumPrice
    }
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .mui-card {
    .mui-card-content {
      .mui-card-content-inner {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .sumPrice {
    font-size: 20px;
    color: #f40;
    font-weight: bold;
  }
}
</style>
