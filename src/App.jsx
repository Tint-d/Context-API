import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { useContextCustom } from './context/StateContext'
import Addtocart from './pages/Addtocart'
import Detail from './pages/Detail'
import Products from './pages/Products'

const App = () => {
 const {state} = useContextCustom()
//  console.log(state);

  return (
    <div className=' w-full mx-auto'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/addtocart' element={<Addtocart/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App