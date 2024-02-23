'use client'
import productsData from './mocks/products.json'
import { ProductsList } from "./components/products/ProductsList";
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Cart } from './components/cart/Cart';
import { useState } from 'react';
import { useFilters } from './hooks/useFilters';
import { CartProvider } from './context/cart';



export default function Home() {

  const [products] = useState(productsData);

  const { filterProducts, } = useFilters()


  const filteredProducts = filterProducts(products.products)

  return (
    <div className='m-4'>
      <CartProvider>
        <Header />
        <Cart />
        <ProductsList products={filteredProducts} />
        <Footer />
      </CartProvider>
    </div>
  );
}
