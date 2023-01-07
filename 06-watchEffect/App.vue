<template>
  <h1>sum: {{sum}}</h1>
  <h1>name: {{obj.name}}</h1>
  <h1>age: {{obj.age}}</h1>
  <button @click="sum+=1">sum+</button>
  <button @click="obj.name+'!'">name+</button>
  <button @click="obj.age+=1">age+</button>
</template>

<script>
import { watchEffect, ref, reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let sum = ref(0)
    let obj = reactive({
      name: 'zs',
      age: 18
    })
    watchEffect(() => {
      console.log('watchEffect回调执行了')
      const a = sum.value
      const b = obj.age
    })
    return {
      sum,
      obj
    }
  }
}
</script>

<style>
</style>
