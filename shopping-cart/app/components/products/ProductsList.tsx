import Image from "next/image"
import { AddToCartIcon, RemoveFromCartIcon } from "../Icons"
import { ProductsCartType, ProductsType } from "az1n<prefix>/app/types"
import { useCart } from "az1n<prefix>/app/hooks/useCart"

export function ProductsList({ products }: { products: ProductsType }) {

    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = (product: ProductsCartType[0]) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className="w-full flex justify-center items-center">
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    products.map((product) => {
                        const isProductInCart = checkProductInCart({ ...product, quantity: 1 })
                        return (
                            <li key={product.id}
                                className="flex flex-col justify-center items-center shadow-md shadow-black  rounded bg-[#111] text-white p-4"
                            >
                                <Image
                                    src={product.thumbnail}
                                    alt={product.title}
                                    width={450}
                                    height={450}
                                    priority
                                    className="w-3/4 h-3/4 rounded-md aspect-video block bg-white"
                                />
                                <div className="flex justify-center">
                                    <h3 className="m-0 font-bold">{product.title}</h3>
                                    &nbsp;
                                    <h3>- ${product.price}</h3>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        className={`${isProductInCart ? 'bg-red-600' : 'bg-[#09f]'}`}
                                        onClick={() => {
                                            isProductInCart
                                                ? removeFromCart({ ...product, quantity: 1 })
                                                : addToCart({ ...product, quantity: 1 })
                                        }}
                                    >
                                        {
                                            isProductInCart
                                                ? <RemoveFromCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </main>
    )
}