import { Route, Routes } from 'react-router-dom'
import './App.css'
import Lab3 from './HandleInput/Lab3'
import Lab4 from './HandleInput/Lab4'
import CustomComponentWithHookForm from './ReactHookForm.tsx/CustomComponentWithHookForm'
import MUIAndHookForm from './ReactHookForm.tsx/MUIAndHookForm'
import ReactHookForm from './ReactHookForm.tsx/Reacthookform'
import PropDrillA from './Reducer/PropDrill'
import UseReducerCart from './Reducer/UseReducerCart'
import UseReducerDemo from './Reducer/UseReducerDemo'
import MainApp from './ContextDemo/MainApp'
import MuiTheme from './MUITheme/MuiTheme'
import ReduxToolkitDemos from './ReduxToolkitDemos/ReduxToolkitDemos'
import V1Demo from './ReduxToolkitDemos/V1Demo'
import V2Demo from './ReduxToolkitDemos/V2Demo'
import V3Demo from './ReduxToolkitDemos/V3Demo'
import V4Demo from './ReduxToolkitDemos/V4Demo'
import V5Demo from './ReduxToolkitDemos/V5Demo'

function App() {
  return (
    <>
      <Routes>
        <Route path='/redux-demos' element={<ReduxToolkitDemos />} />
        <Route path='/redux-demos/v1' element={<V1Demo />} />
        <Route path='/redux-demos/v2' element={<V2Demo />} />
        <Route path='/redux-demos/v3' element={<V3Demo />} />
        <Route path='/redux-demos/v4' element={<V4Demo />} />
        <Route path='/redux-demos/v5' element={<V5Demo />} />
        <Route path='/MuiTheme' element={<MuiTheme />} />
        <Route path='/Products' element={<UseReducerDemo />} />
        <Route path='/Products/:name/:something' element={<MUIAndHookForm />} />
        <Route path='/PropDrillA' element={<PropDrillA />} />
        <Route path='/ReactHookForm' element={<ReactHookForm />} />
        <Route path='/UseReducerDemo' element={<UseReducerDemo />} />
        <Route path='/' element={<MainApp />} />
      </Routes>
    </>
  )
}

export default App
