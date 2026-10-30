import { Navigate, Route, Routes } from 'react-router-dom'
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
import LoginForm from './pages/LoginForm'
import ItemsPage from './pages/ItemsPage'
import Effect from './pages/Effect'
import TodoApp from './TodoApp'
import BlogPage from './pages/BlogPage'
import NewPostForm from './pages/NewPost'

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='home'  element={<Navigate to="/" />}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='aboutus'  element={<Navigate to="/about" />}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='product' element={<Products/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/items' element={<ItemsPage/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/todo' element={<TodoApp/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/new-blog' element={<NewPostForm/>}/>



        <Route path="/products" element={<ProductHome />}>
          <Route path="bags" element={<Bag />} />
          <Route path="shoes" element={<Shoe />} />
          <Route path="*" element={<p>This product doesn't exist!</p>} />
        </Route>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
