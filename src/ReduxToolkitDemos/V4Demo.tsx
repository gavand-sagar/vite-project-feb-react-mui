import { useState } from 'react'
import { useAppDispatch, useAppSelector } from './store'
import { addTodo, toggleTodo, removeTodo } from './slices/todosSlice'

export default function V4Demo() {
  const todos = useAppSelector((state) => state.todos.todos)
  const dispatch = useAppDispatch()
  const [input, setInput] = useState('')

  return (
    <div>
      <h1>Redux Toolkit v4 – Array of objects</h1>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New todo"
        />
        <button
          onClick={() => {
            if (input.trim()) {
              dispatch(addTodo(input.trim()))
              setInput('')
            }
          }}
        >
          Add todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <span style={{ textDecoration: todo.done ? 'line-through' : undefined }}>
              {todo.text}
            </span>{' '}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
