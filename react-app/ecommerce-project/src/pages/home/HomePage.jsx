import axios from 'axios';
import {useEffect, useState} from 'react';
import { ProductsGrid } from './ProductsGrid';
import { Header } from '../../components/Header';
import "./Homepage.css";

export function HomePage({cart}) {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    axios.get('/api/products')
        .then((response)=>{
            setProducts(response.data);
        });
  },[]);

  

  return (
    <>
      <title>Ecommerce-project</title>

      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products} />
      </div>
    </>
  );
}
