'use client'
import productsData from './mocks/products.json'
import { ProductsList } from "./components/products/ProductsList";
import { Header } from './components/header/Header';
import { Filters, ProductsType } from './types';
import { useState } from 'react';

export default function Home() {

  const [products] = useState(productsData)
  const [filter, setFilters] = useState<Filters>({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products: ProductsType) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice &&
        (
          filter.category === 'all' ||
          product.category === filter.category
        )
      )
    })
  }

  const filteredProducts = filterProducts(products.products)

  return (
    <div className='m-4'>
      <Header setFilters={setFilters} />
      <ProductsList products={filteredProducts} />
    </div>
  );
}
