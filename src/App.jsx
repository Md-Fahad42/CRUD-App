import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Create from './components/Create'
import Update from './components/Update'
import Read from './components/Read'
const App = () => {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/create' element={<Create></Create>}></Route>
    <Route path='/update/:id' element={<Update></Update>}></Route>
    <Route path='/read/:id' element={<Read></Read>}></Route>
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App