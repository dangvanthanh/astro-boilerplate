<script>
  import { counter, increaseCounter, decreaseCounter } from '../store/counter'
</script>

<div class="counter">
  <h2>🚀 Svelte Counter</h2>
  <div>
    <button on:click={decreaseCounter}>-</button>
    <pre>{$counter}</pre>
    <button on:click={increaseCounter}>+</button>
  </div>
</div>
