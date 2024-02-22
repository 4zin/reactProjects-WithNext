import productsData from './mocks/products.json'
import { ProductsList } from "./components/products/ProductsList";

export default function Home() {
  return (
    <div>
      <ProductsList products={productsData.products} />
    </div>
  );
}
