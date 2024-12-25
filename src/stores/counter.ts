export const useCustomCounter = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => {
    count.value++
  }
  const decrement = () => {
    count.value--
  }
  const double = computed(() => count.value * 2)
  return {
    count,
    increment,
    decrement,
    double,
  }
})
