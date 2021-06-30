<template>
  <div class="counter">
    <h2>🚀 Vue Counter</h2>
    <div>
      <button @click="subtract">-</button>
      <pre>{{ count }}</pre>
      <button @click="add">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const add = () => (count.value += 1)
    const subtract = () => (count.value -= 1)
    return {
      count,
      add,
      subtract,
    }
  },
}
</script>

<style>
</style>