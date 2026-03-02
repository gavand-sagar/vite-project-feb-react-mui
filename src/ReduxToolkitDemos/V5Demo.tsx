import { useAppDispatch, useAppSelector } from './store'
import { fetchUsers } from './slices/usersSlice'

export default function V5Demo() {
  const { users, loading, error } = useAppSelector((state) => state.users)
  const dispatch = useAppDispatch()

  return (
    <div>
      <h1>Redux Toolkit v5 – Async thunk</h1>
      <button onClick={() => dispatch(fetchUsers())} disabled={loading}>
        {loading ? 'Loading…' : 'Fetch users'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
