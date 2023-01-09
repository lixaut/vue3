<template>
  <h1>子-组件</h1>
  <button>修改{{btnName}}</button>
  <hr>
  <Sun></Sun>
</template>

<script>
import Sun from '@/components/Sun.vue'
export default {
  name: 'Demo',
  components: { Sun },
  setup() {
    let btnName = 'name'
    return {
      btnName
    }
  }
}
</script>

<style>

</style>