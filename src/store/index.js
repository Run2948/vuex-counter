import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建 store 提供唯一公共数据
export default new Vuex.Store({
  // 提供唯一的公共数据源
  state: {
    count: 0
  },
  // 用于变更 Store 中的数据
  mutations: {
    add (state) {
      state.count++
    },
    addN (state, step) {
      state.count += step
    },
    sub (state) {
      state.count--
    },
    subN (state, step) {
      state.count -= step
    }
  },
  // 用于处理异步任务
  actions: {
    addAsync (context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；必须通过触发 mutations 来执行
        context.commit('add')
      }, 1000)
    },
    addNAsync (context, step) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；必须通过触发 mutations 来执行
        context.commit('addN', step)
      }, 1000)
    },
    subAsync (context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；必须通过触发 mutations 来执行
        context.commit('sub')
      }, 1000)
    },
    subNAsync (context, step) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；必须通过触发 mutations 来执行
        context.commit('subN', step)
      }, 1000)
    }
  },
  // 用于对 Store 中的数据进行加工处理形成新的数据 (并不会修改 state 中的数据)
  getters: {
    showNum: state => {
      return `当前最新的数量是【${state.count}】`
    }
  },
  modules: {}
})
