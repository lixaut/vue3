<template>
  <button @click="p.name+='!'">改名</button>
  <button @click="age+=1">改年</button>
  <button @click="salary+=1">改薪</button>
  <h1>{{p.name}}</h1>
  <h1>{{age}}岁</h1>
  <h1>{{salary}}k</h1>
  <hr>
  <button @click="a+=1;b+=1;c+=1">+1</button>
  <h1>{{a}}-{{b}}-{{c}}</h1>
</template>

<script>
import { reactive, toRef, toRefs } from '@vue/reactivity'
export default {
  name: 'Demo',
  setup() {
    let p = reactive({
      name: 'zs',
      age: 18,
      a: {
        b: {
          salary: 18
        }
      }
    })
    let p2 = reactive({
      a: 1,
      b: 2,
      c: 3
    })
    return {
      p,
      age: toRef(p, 'age'),
      salary: toRef(p.a.b, 'salary'),
      ...toRefs(p2)
    }
  }
}
</script>

<style>

</style>