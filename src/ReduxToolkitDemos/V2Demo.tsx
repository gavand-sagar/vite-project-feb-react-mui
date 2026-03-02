import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { increment, decrement, reset, incrementByAmount } from './slices/counterSlice'

export default function V2Demo() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  const [amount, setAmount] = useState('')

  return (
    <div>
      <h1>Redux Toolkit v2 – Reducer with payload</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div style={{ marginTop: 16 }}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <button
          onClick={() => {
            const n = Number(amount)
            if (!Number.isNaN(n)) dispatch(incrementByAmount(n))
            setAmount('')
          }}
        >
          Add amount
        </button>
      </div>
    </div>
  )
}
