export type ProductsType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
}[]

export type Filters = {
    category: string;
    minPrice: number;
}

export type ProductsCartType = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    quantity: number;
}[]

export type CartAction =
    | { type: 'ADD_TO_CART'; payload: ProductsCartType[0] }
    | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
    | { type: 'CLEAR_CART'; payload?: never }