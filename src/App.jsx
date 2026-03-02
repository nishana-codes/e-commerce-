import Navbar from "./components/Navbar"
import { Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import SearchResults from "./pages/SearchResults";
import { ToastContainer } from "react-toastify";

function App() {

  return (
    <>
        <Navbar/>  
      <ToastContainer/>

        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="category/:slug" element={<CategoryProducts/>} />
          <Route path="product/:id" element={<ProductDetails/>} />
          <Route path="Search/:query" element={<SearchResults/>} />

        </Routes>

 
   </>
  )
}

export default App
