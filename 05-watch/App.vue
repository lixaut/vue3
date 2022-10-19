<template>
  <h1>当前的和为：{{sum}}</h1>
  <button @click="sum++">点我 + 1</button>
  <hr>

  <h1>{{msg}}</h1>
  <button @click="msg += '!'">打招呼</button>
  <hr>

  <h1>{{person.name}}</h1>
  <h1>{{person.age}}</h1>
  <button @click="person.name+='!'">修改名字</button>
  <button @click="person.age++">修改年龄</button>
  <hr>

  <h1>工作</h1>
  <h2>工作名：{{job.j0}}</h2>
  <h2>工资：{{job.j1.salary}}</h2>
  <button @click="job.j0+='!'">修改工作名</button>
  <button @click="job.j1.salary++">修改薪资</button>
</template>

<script>
import { reactive, ref, watch } from 'vue'
export default {
  name: 'App',
  setup() {
    // 数据
    let sum = ref(0)
    let msg = ref('hello')
    const person = reactive({
      name: '张三',
      age: 18 
    })
    const job = reactive({
      j0: '工作',
      j1: {
        salary: 100
      }
    })

    // 监视
    watch([sum, msg], (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {immediate: true})
    watch(person, (value) => {
      console.log(value)
    })
    watch(() => job.j0, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    watch(() => job.j1, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, { deep: true })

    // 返回对象
    return {
      sum,
      msg,
      person,
      job
    }
  }
}
</script>

<style>
</style>
