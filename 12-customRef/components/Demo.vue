<template>
  <button></button>
  <input type="text" v-model="age">
  <hr>
  <h1>{{age}}</h1>
</template>

<script>
import { customRef } from '@vue/reactivity'
export default {
  name: 'Demo',
  setup() {
    function myRef(value, delay) {
      return customRef((track, trigger) => {
        let timer = null
        return {
          get() {
            console.log('取值')
            track()
            return value
          },
          set(newValue) {
            console.log('设值')
            value = newValue
            clearTimeout(timer)
            timer = setTimeout(() => {
              trigger()
            }, delay)
          }
        }
      })
    }
    let age = myRef(18, 1000)
    return {age}
  }
}
</script>

<style>

</style>