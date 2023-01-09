<template>
  <button @click="person.age+=1;person.job.name+='!'">修改</button>
  {{person.age}}
  {{person.job.name}}
</template>

<script>
import { reactive, shallowReadonly } from '@vue/reactivity'
export default {
  name: 'Demo',
  setup() {
    let person = reactive({
      age: 18,
      job: {
        name: 'a'
      }
    })
    person = shallowReadonly(person)
    return {
      person
    }
  }
}
</script>

<style>

</style>