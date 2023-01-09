<template>
  <h1>父-组件</h1>
  <button @click="isShowDemo=!isShowDemo">卸载Demo</button>
  <button @click="name+='!'">修改孙子姓名</button>
  <h1>孙子：{{name}}</h1>
  <hr>
  <Demo v-if="isShowDemo"/>
</template>

<script>
import { provide, ref } from 'vue'
import Demo from '@/components/Demo.vue'
export default {
  name: 'App',
  components: { Demo },
  setup() {
    let isShowDemo = ref(true)
    let name = ref('张三')
    provide('name', name)
    return {
      isShowDemo,
      name
    }
  }
}
</script>

<style>
</style>
