import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    car: [
      {
        id: 122,
        title: '《你不知道的JavaScript》',
        count: 2,
        price: 119,
        selected: true
      }
    ]
  },
  getters: {
    getCar: function (state) {
      return state.car
    },
    getAllCount: function (state) {
      return state.car.map(item => item.count).reduce((tmp, item) => tmp + item)
    },
    getSumPrice: function (state) {
      const arr = state.car.filter(item => item.selected === true)
      if (arr.length == 0) {
        return 0
      } else {
        return arr.map(item => item.count * item.price).reduce((tmp, item) => tmp + item)
      }
    }
  },
  mutations: {
    addToCar(state, goodsinfo) {
      // 如果已经有商品了，只更新数量；没有就push进去
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })
      if (!flag) {
        state.car.push(goodsinfo)
      }
    },
    correctCountById(state, obj) {
      state.car.some(item => {
        if (item.id == obj.id) {
          item.count = obj.newCount
          return true
        }
      })
    },
    correctSelectedById(state, id) {
      state.car.some(item => {
        if (item.id == id) {
          item.selected = !item.selected
          return true
        }
      })
    }
  },
  actions: {

  }
})

export default store
