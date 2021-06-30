/** @jsx h */
import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

export function PreactCounter() {
  const [count, setCount] = useState(0)
  const add = () => setCount((i) => i + 1)
  const subtract = () => setCount((i) => i - 1)

  return (
    <Fragment>
      <div class="counter">
      <h2>🚀  Preact Counter</h2>
        <div>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
        </div>
      </div>
    </Fragment>
  )
}
