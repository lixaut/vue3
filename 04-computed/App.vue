<template>
  姓：<input type="text" v-model="person.firstName">
  <br>
  名：<input type="text" v-model="person.lastName">
  <br>
  <span>全名：{{person.fullName}}</span>
  <br>
  <input type="text" v-model="person.fullName">
</template>

<script>
import { computed, reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let person = reactive({
      firstName: '张',
      lastName: '三',
    })
    // 计算属性
    person.fullName = computed({
      get() {
        return person.firstName + '-' + person.lastName
      },
      set(value) {
        let nameArr = value.split('-')
        person.firstName = nameArr[0]
        person.lastName = nameArr[1]
      }
    })
    // 返回对象
    return {
      person
    }
  }
}
</script>

<style>
</style>
