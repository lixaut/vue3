<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{persion.name}}</h2>
  <h2>年龄：{{persion.age}}</h2>
  <h2>职业：{{persion.job.type}}</h2>
  <h2>薪水：{{persion.job.salary}}</h2>
  <h2>薪水：{{persion.hobby}}</h2>
  <button @click="changeInfo">修改人的信息</button>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据：源对象 => 代理对象
    const persion = reactive({
      name: '张三',
      age: 18,
      job: {
        type: 'dev',
        salary: '10k'
      },
      hobby: ['抽烟', '喝酒', '烫头']
    })

    // 方法
    function changeInfo() {
      persion.name = '李四'
      persion.age = 20
      persion.job.type = 'frontEnd'
      persion.job.salary = '20k'
      persion.hobby[0] = '学习'
    }

    // 返回对象0
    return {
      persion,
      changeInfo
    }
  }
}
</script>

<style>
</style>
