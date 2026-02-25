import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Person } from './Sagar'
import JsxRules from './JsxRules'
import Panel from './Panel'
import ListRendering from './ListRendering'
import ListRenderingV2 from './ListRenderingV2'
import ListRenderingV3 from './ListRenderingV3'
import UseEffectDemos from './UseEffectDemos'
import UseEffectForCleanup from './UseEffectForCleanup'


function App() {
  const [flag, setFlag] = useState(false)
  return (
    <>
      <button onClick={() => setFlag(!flag)}>Load</button>
      <hr />
      {/* <button className='my-btn'>hello</button> */}
      {/* <Panel /> */}
      {/* <UseEffectDemos/> */}
      {/* <UseEffectForCleanup/> */}
      {
        flag && <UseEffectForCleanup/>
      }
    </>
  )
}

export default App
