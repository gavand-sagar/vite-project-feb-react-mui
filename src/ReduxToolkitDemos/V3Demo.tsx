import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { addItem, removeItem } from './slices/arraySlice'

export default function V3Demo() {
  const items = useAppSelector((state) => state.array.items)
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('')

  return (
    <div>
      <h1>Redux Toolkit v3 – Array manipulation</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New item"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              dispatch(addItem(input.trim()))
              setInput('')
            }
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => dispatch(removeItem(index))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
