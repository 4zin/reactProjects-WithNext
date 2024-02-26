import { ReactNode, createContext, useReducer } from "react";
import { ProductsCartType } from "../types";
import { cartReducer, cartInitialState } from "../components/reducers/cartReducer";

interface CartContextProps {
    cart: ProductsCartType;
    addToCart: (product: ProductsCartType[0]) => void;
    removeFromCart: (product: ProductsCartType[0]) => void;
    clearCart: () => void;
}

export const cartContext = createContext<CartContextProps | undefined>(undefined)

function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = (product: ProductsCartType[0]) => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeFromCart = (product: ProductsCartType[0]) => dispatch({
        type: 'REMOVE_FROM_CART',
        payload: product
    })

    const clearCart = () => dispatch({ type: 'CLEAR_CART' })

    return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider({ children }: { children: ReactNode }) {
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()


    return (
        <cartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}>
            {children}
        </cartContext.Provider>
    )
}