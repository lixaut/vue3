<template>
  <h1>我是App组件</h1>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <button @click="sayHello">说话</button>
</template>

<script>
import { h } from 'vue'
export default {
  name: 'App',
  // 暂时不考虑响应式
  setup() {
    // 数据
    let name = '李四'
    let age = 18

    // 方法
    function sayHello() {
      alert(`我叫${name}，我今年${age}岁了！`)
    }

    // 返回一个对象（常用）
    return {
      name,
      age,
      sayHello
    }

    // 返回一个函数（渲染函数）
    // return () => h('h1', '李四')
  }
}
</script>

<style>
</style>
