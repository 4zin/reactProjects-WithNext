'use client'
import productsData from './mocks/products.json'
import { ProductsList } from "./components/products/ProductsList";
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Filters, ProductsType } from './types';
import { useState, useContext } from 'react';
import { FiltersContext } from './context/filters';

function useFilters() {

  // const [filter, setFilters] = useState<Filters>({
  //   category: 'all',
  //   minPrice: 0
  // })

  const { filters, setFilters } = useContext(FiltersContext)

  const filterProducts = (products: ProductsType) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filters, filterProducts, setFilters }
}

export default function Home() {

  const [products] = useState(productsData);

  const { filters, filterProducts, setFilters } = useFilters()


  const filteredProducts = filterProducts(products.products)

  return (
    <div className='m-4'>
      <Header setFilters={setFilters} />
      <ProductsList products={filteredProducts} />
      <Footer filters={filters} />
    </div>
  );
}
