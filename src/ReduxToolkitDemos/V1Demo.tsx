import { useAppDispatch, useAppSelector } from './store'
import { increment, decrement, reset } from './slices/counterSlice'

export default function V1Demo() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux Toolkit v1 – Simple setup</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
