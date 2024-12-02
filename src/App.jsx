import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
}
  from "react-router-dom"
import Layout from "./componant/Layout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import ProductDatails from "./pages/ProductDatails"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Cart from "./pages/Cart"
import CheckOut from "./pages/CheckOut"
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
   <Route element={<Layout/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDatails/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/cart" element={<Cart/>}></Route>
    <Route path="/checkout" element={<CheckOut/>}></Route>
    
    <Route path="*" element={<Error/>}></Route>





   
   </Route>
   
  ))

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
