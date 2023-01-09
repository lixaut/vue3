<template>
  <button @click="p={name: '李四', age: 20}">修改</button>
  <hr>
  {{p.name}}
  {{p.age}}
</template>

<script>
import { shallowRef } from '@vue/reactivity'
export default {
  name: 'Demo',
  setup() {
    let p = shallowRef({
      name: '张三',
      age: 18
    })
    return { p }
  }
}
</script>

<style>

</style>