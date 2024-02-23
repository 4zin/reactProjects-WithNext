import Image from "next/image";
import { useId, useState } from "react";
import { ClearCartIcon, CartIcon } from "../Icons";
import { useCart } from "../../hooks/useCart";

interface CartItemProps {
    thumbnail: string;
    title: string;
    price: number;
    quantity: number;
    addToCart: () => void;
}

function CartItem({ thumbnail, title, price, quantity, addToCart }: CartItemProps) {
    return (
        <li>
            <Image
                src={thumbnail}
                alt={title}
                width={300}
                height={300}
                priority
                className="w-auto h-auto aspect-video"
            />

            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer className="flex gap-2 justify-center items-center">
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart} className="p-2">+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()

    const [isChecked, setIsChecked] = useState(false)

    const toogleCart = () => {
        setIsChecked(!isChecked)
    }

    const { cart, clearCart, addToCart } = useCart()

    return (
        <>
            <label
                htmlFor={cartCheckboxId}
                className="flex justify-center items-center bg-[#09f] rounded-full cursor-pointer w-[32px] h-[32px] p-1 absolute right-2 top-2 transition-all ease-linear z-[9999] hover:scale-[1.1]"
            >
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden checked={isChecked} onChange={toogleCart} />

            <aside className={`flex flex-col justify-center items-center bg-[#000] p-[32px] fixed right-0 top-0 w-[200px] h-screen ${isChecked ? 'block' : 'hidden'}`}>
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                addToCart={() => addToCart(product)}
                                {...product}
                            />
                        ))
                    }
                </ul>

                <button className="mt-[16px]" onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}