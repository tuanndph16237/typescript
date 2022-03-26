import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove } from './api/products';
import axios from 'axios';
import type { ProductType } from './types/product';
import AdminLayout from './pages/Layout/adminLayout';
import WebsiteLayout from './pages/Layout/WebsiteLayout';
import DashBoard from './pages/dashboard';
import ProductManager from './pages/productManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';
import PrivateRouter from './components/PrivateRouter';

function App(){

  const [count, setCount] = useState(0)
  const [products, setProduct] = useState<ProductType[]>([]);
  useEffect(() =>{
    const getProduct = async() => {
      const { data } =await list();
      setProduct(data);
    };
    getProduct();
  }, [])
  const removeItem = (id: number) =>{

  }
  const onHandleAdd = async (product: ProductType)=>{
    const {data} = await add(product);
    setProduct([...products, data]);
  }
  <div className='App'>
    <header>
      <ul>
        <li>
          <NavLink to="/">Home Page</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product Page</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </header>
    <main>
      <Routes>
        <Route path='/' element={<WebsiteLayout />}>
          <Route element={<Home />}>
            <Route path='product'>
              <Route index element={<h1>Hien thi san Pham</h1>}/>
              <Route path=':id' element={<ProductDetail/>}/>
            </Route>
            <Route path='about' element={<h1>About page</h1>}/>
          </Route>
          <Route path='products'>
            <Route index element={<ProductManager product={products} onRemove={removeItem}/>} />
            <Route path='add' element={<ProductAdd name='Tuan' onAdd={onHandleAdd}/>} />
          </Route>
        </Route>
      </Routes>
    </main>
  </div>
}
export default App
