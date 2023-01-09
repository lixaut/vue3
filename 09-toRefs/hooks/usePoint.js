
import { reactive } from '@vue/reactivity'
import { onBeforeUnmount, onMounted } from '@vue/runtime-core'
export default function() {
  let point = reactive({
    x: 0,
    y: 0
  })
  const fn = (e) => {
    console.log(e.pageX, e.pageY)
    point.x = e.pageX
    point.y = e.pageY
  }
  onMounted(() => {
    window.addEventListener('click', fn)
  })
  onBeforeUnmount(() => {
    window.removeEventListener('click', fn)
  })
  return point
}