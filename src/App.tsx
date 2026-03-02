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
import SimpleRedux from './Redux-demos/components/SimpleRedux'
import SimpleRedux2 from './Redux-demos/components/SimpleRedux2'


function App() {
  return (
    <>
      <Routes>
        <Route path='/SimpleRedux2' element={<SimpleRedux2 />} />
        <Route path='/SimpleRedux' element={<SimpleRedux />} />
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
