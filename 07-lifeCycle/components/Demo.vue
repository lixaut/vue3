<template>
  <h1>sum: {{sum}}</h1>
  <button @click="sum+=1">sum+</button>
</template>

<script>
import { 
  onBeforeMount, 
  onBeforeUnmount, 
  onBeforeUpdate, 
  onMounted, 
  onUnmounted, 
  onUpdated, 
  ref 
} from 'vue'
export default {
  name: 'Demo',
  setup() {
    console.log('app--beforeCreate')
    console.log('app--created')
    // 组合式 API
    onBeforeMount(() => {
      console.log('onBeforeMount')
    })
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    let sum = ref(0)
    return {
      sum
    }
  },
  // 选项是 API
  // #region
  // beforeCreate() {
  //   console.log('beforeCreate')
  // },
  // created() {
  //   console.log('created')
  // },
  // beforeMount() {
  //   console.log('beforeMount')
  // },
  // mounted() {
  //   console.log('mounted')
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate')
  // },
  // updated() {
  //   console.log('updated')
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount')
  // },
  // unmounted() {
  //   console.log('unmounted')
  // }
  // #endregion
}
</script>

<style>

</style>