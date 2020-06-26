<template>
  <div>
    <!-- 调用 state 的第一种方式 -->
    <!-- <h3>当前最新的 count 值为：{{ $store.state.count }}</h3> -->
    <!-- 调用 getters 的第一种方式 -->
    <h3>{{$store.getters.showNum}}</h3>
    <button @click="btnAdd">+1</button>
    <button @click="btnAddN">+N</button>
    <button @click="btnAddAsync">+1 Async</button>
    <button @click="btnAddNAsync">+N Async</button>
  </div>
</template>

<script>
export default {
  methods: {
    btnAdd () {
      // 错误示范 (可以实现效果，但是不能值被监控)：  this.$store.state.count++
      // 触发 mutations 的第一种方式
      this.$store.commit('add')
    },
    btnAddN () {
      // 触发 mutations 的第一种方式
      this.$store.commit('addN', 3)
    },
    btnAddAsync () {
      // 触发 actions 的第一种方式
      // 这里的 dispatch 函数，专门用来触发 actions
      this.$store.dispatch('addAsync')
    },
    btnAddNAsync () {
      this.$store.dispatch('addNAsync', 3)
    }
  }
}
</script>

<style></style>
