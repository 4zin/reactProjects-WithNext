import { ReactNode, createContext, useState } from "react";
import { ProductsCartType } from "../types";

interface CartContextProps {
    cart: ProductsCartType;
    addToCart: (product: ProductsCartType[0]) => void;
    removeFromCart: (product: ProductsCartType[0]) => void;
    clearCart: () => void;
}

export const cartContext = createContext<CartContextProps | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<ProductsCartType>([])

    const addToCart = (product: ProductsCartType[0]) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        //*Producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))

    }

    const removeFromCart = (product: ProductsCartType[0]) => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <cartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    )
}