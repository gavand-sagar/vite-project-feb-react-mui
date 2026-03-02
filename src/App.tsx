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


function App() {
  return (
    <>
      <Routes>
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
