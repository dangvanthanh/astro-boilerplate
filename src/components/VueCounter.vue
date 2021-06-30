<template>
  <div class="counter">
    <h2>🚀 Vue Counter</h2>
    <div>
      <button @click="decreaseCounter">-</button>
      <pre>{{ count }}</pre>
      <button @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { useStore } from 'nanostores/vue'
import { counter, increaseCounter, decreaseCounter } from '../store/counter'

export default {
  setup() {
    const count = useStore(counter)
    return {
      count,
      increaseCounter,
      decreaseCounter,
    }
  },
}
</script>

<style>
</style>