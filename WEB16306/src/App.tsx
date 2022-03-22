import { useEffect, useState } from 'react'
import { Routes, Route, Navlink, Navigate } from 'react-router-dom';
import logo from './logo.svg'
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";

import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { add, list, remove } from './api/products';
import axios from 'axios';
import type { IProduct } from './types/product';
import AdminLayout from './pages/Layout/adminLayout';
import WebsiteLayout from './pages/Layout/WebsiteLayout';
import DashBoard from './pages/dashboard';
import ProductManager from './pages/productManager';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';

function App(){

  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() =>{
    const getProducts = async() => {
      const { data } =await list();
      setProducts(data);
    };
    getProducts();
  }, [])
  const removeItem = (id: number) =>{

  }
  const onHandleAdd = async (product: IProduct)=>{
    const {data} = await add(product);
    setProducts([...products, data]);
  }
  <div className='App'>
    <header>
      <ul>
        <li>
          <Navlink to="/">Home Page</Navlink>
        </li>
        <li>
          <Navlink to="/product">Product Page</Navlink>
        </li>
        <li>
          <Navlink to="/about">About</Navlink>
        </li>
      </ul>
    </header>
    <main>
      <Routes>
        <Route path='/' element={WebsiteLayout />}>
          <Route index element={<Home />}>
            <Route path='product'>
              <Route index element={<h1>Hien thi san Pham</h1>}/>
              <Route path=':id' element={}/>
            </Route>
          </Route>
        </Route>
      </Routes>
    </main>
  </div>
}
export default App
