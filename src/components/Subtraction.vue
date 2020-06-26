<template>
  <div>
    <!-- <h3>当前最新的 count 值为：{{ count }}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="btnSub">-1</button>
    <button @click="btnSubN">-N</button>
    <button @click="btnSubAsync">-1 Async</button>
    <button @click="btnSubNAsync">-N Async</button>
  </div>
</template>

<script>
// 1.从 vuex 中按需导入 mapState 函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  // 2.将全局数据，映射为当前组件的计算属性
  computed: {
    // 调用 state 的第二种方式
    ...mapState(['count']),
    // 调用 getters 的第二种方式
    ...mapGetters(['showNum'])
  },
  methods: {
    // 触发 mutations 的第二种方式
    ...mapMutations(['sub', 'subN']),
    // 触发 actions 的第二种方式
    ...mapActions(['subAsync', 'subNAsync']),
    btnSub () {
      this.sub()
    },
    btnSubN () {
      this.subN(3)
    },
    btnSubAsync () {
      this.subAsync()
    },
    btnSubNAsync () {
      this.subNAsync(3)
    }
  }
}
</script>

<style></style>
