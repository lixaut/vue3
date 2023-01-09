<template>
  <div class="app">
    <h1>app组件</h1>
    <button @click="isShowDemo=!isShowDemo">卸载Demo</button>
    <Demo v-if="isShowDemo"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Demo from '@/components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    let isShowDemo = ref(true)
    return {
      isShowDemo,
    }
  }
}
</script>

<style lang="css" scoped>
.app {
  background-color: pink;
  padding: 10px;
}
</style>
