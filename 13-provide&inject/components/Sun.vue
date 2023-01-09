
<template>
  <h1>孙-组件</h1>
  <button @click="myName+='!'">修改我的名字</button>
  <span>{{myName}}</span>
</template>

<script>
import { inject } from '@vue/runtime-core'
export default {
  name: 'Sun',
  setup() {
    let myName = inject('name')
    return {
      myName
    }
  }
}
</script>

<style>

</style>