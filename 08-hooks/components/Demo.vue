<template>
  <h2>当前鼠标坐标：x:{{point.x}}, y: {{point.y}}</h2>
</template>

<script>
import usePoint from '@/hooks/usePoint'
export default {
  name: 'Demo',
  setup() {
    let point = usePoint()
    return {
      point
    }
  }
}
</script>

<style>

</style>