import { Link } from 'react-router-dom'

export default function ReduxToolkitDemos() {
  return (
    <div>
      <h1>Redux Toolkit Demos</h1>
      <nav>
        <ul>
          <li><Link to="/redux-demos/v1">v1 – Simple setup</Link></li>
          <li><Link to="/redux-demos/v2">v2 – Reducer with payload</Link></li>
          <li><Link to="/redux-demos/v3">v3 – Array manipulation</Link></li>
          <li><Link to="/redux-demos/v4">v4 – Array of objects</Link></li>
          <li><Link to="/redux-demos/v5">v5 – Async thunk</Link></li>
        </ul>
      </nav>
    </div>
  )
}
