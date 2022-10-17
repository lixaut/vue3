<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>职业：{{job.type}}</h2>
  <h2>薪水：{{job.salary}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let name = ref('李四')
    let age = ref(18)
    const job = ref({
      type: 'java工程师',
      salary: '10k'
    })

    // 方法
    function changeInfo() {
      name.value = '张三'
      age.value = 20
      job.value.type = 'ui设计师'
      job.value.salary = '20k'
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      changeInfo,
      job
    }
  }
}
</script>

<style>
</style>
