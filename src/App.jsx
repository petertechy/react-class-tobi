import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import ProductHome from './pages/ProductHome'
import Bag from './components/Bag'
import Shoe from './components/Shoe'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>

        <Route path="/products" element={<ProductHome />}>
          <Route path="bags" element={<Bag />} />
          <Route path="shoes" element={<Shoe />} />
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App