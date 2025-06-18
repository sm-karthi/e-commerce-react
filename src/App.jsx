
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Dashboard from './components/admin/Dashboard';
import Admin from './components/admin/Admin';
import ProductEdit from './components/admin/ProductEdit';
import Products from './components/admin/Products';
import ProductCreate from './components/admin/ProductCreate';
import ProductView from './components/admin/ProductView';



function App() {


  return (
    <BrowserRouter>

      <Routes>

        <Route path='/admin' element={<Admin />}>

          <Route path='dashboard' element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='edit/:id' element={<ProductEdit />} />
          <Route path='product/:id' element={<ProductView />} />
          <Route path='create-product' element={<ProductCreate />} />
          
        </Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
