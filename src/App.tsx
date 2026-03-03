import { Link, Route, Routes } from 'react-router-dom'
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
import { Box, Button } from '@mui/material'
import Tanstack from './Tanstack/Tanstack'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import TanstackWithParam from './Tanstack/TanstackWithParam'
import Todo from './Tanstack/Todo'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Box padding={2} gap={1} display={'flex'} flexWrap={'wrap'}>
        <Link to={'/SimpleRedux2'}>
          <Button variant='contained'>Simple Redux 2</Button>
        </Link>
        <Link to={'/SimpleRedux'}>
          <Button variant='contained'>Simple Redux</Button>
        </Link>
        <Link to={'/MuiTheme'}>
          <Button variant='contained'>Mui Theme</Button>
        </Link>
        <Link to={'/Products'}>
          <Button variant='contained'>Products</Button>
        </Link>
        <Link to={'/PropDrillA'}>
          <Button variant='contained'>Prop Drilling</Button>
        </Link>
        <Link to={'/ReactHookForm'}>
          <Button variant='contained'>React Hook Form</Button>
        </Link>
        <Link to={'/UseReducerDemo'}>
          <Button variant='contained'>Use Reducer Demo</Button>
        </Link>
        <Link to={'/ContextDemo'}>
          <Button variant='contained'>Context Demo</Button>
        </Link>
        <Link to={'/Tanstack'}>
          <Button variant='contained'>Tanstack Demo</Button>
        </Link>
        <Link to={'/TanstackWithParam'}>
          <Button variant='contained'>Tanstack Param Demo</Button>
        </Link>
        <Link to={'/TanstackTodos'}>
          <Button variant='contained'>Tanstack Todo</Button>
        </Link>
      </Box>
      <Routes>
        <Route path='/SimpleRedux2' element={<SimpleRedux2 />} />
        <Route path='/SimpleRedux' element={<SimpleRedux />} />
        <Route path='/MuiTheme' element={<MuiTheme />} />
        <Route path='/Products' element={<UseReducerDemo />} />
        <Route path='/Products/:name/:something' element={<MUIAndHookForm />} />
        <Route path='/PropDrillA' element={<PropDrillA />} />
        <Route path='/ReactHookForm' element={<ReactHookForm />} />
        <Route path='/UseReducerDemo' element={<UseReducerDemo />} />
        <Route path='/ContextDemo' element={<MainApp />} />
        <Route path='/Tanstack' element={<Tanstack />} />
        <Route path='/TanstackWithParam' element={<TanstackWithParam />} />
        <Route path='/TanstackTodos' element={<Todo />} />
        <Route path='/' element={<MainApp />} />
      </Routes>
    </QueryClientProvider>
  )
}

export default App
