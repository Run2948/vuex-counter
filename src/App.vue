<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <v-add></v-add>
    <v-sub></v-sub>
  </div>
</template>

<script>
import Addition from './components/Addition.vue'
import Subtraction from './components/Subtraction.vue'

export default {
  name: 'App',
  components: {
    'v-add': Addition,
    'v-sub': Subtraction
  },
  data () {
    return {}
  }
}
</script>

<style></style>
