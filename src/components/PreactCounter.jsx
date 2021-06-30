/** @jsx h */
import { h, Fragment } from 'preact'
import { useStore } from 'nanostores/preact'
import { counter, increaseCounter, decreaseCounter } from '../store/counter'

export function PreactCounter() {
  const count = useStore(counter)

  return (
    <Fragment>
      <div class="counter">
        <h2>🚀 Preact Counter</h2>
        <div>
          <button onClick={decreaseCounter}>-</button>
          <pre>{count}</pre>
          <button onClick={increaseCounter}>+</button>
        </div>
      </div>
    </Fragment>
  )
}
