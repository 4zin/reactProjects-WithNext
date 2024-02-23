import Image from "next/image";
import { useId, useState } from "react";
import { ClearCartIcon, CartIcon } from "../Icons";

export function Cart() {
    const cartCheckboxId = useId()

    const [isChecked, setIsChecked] = useState(false)

    const toogleCart = () => {
        setIsChecked(!isChecked)
    }

    return (
        <>
            <label
                htmlFor={cartCheckboxId}
                className="flex justify-center items-center bg-[#09f] rounded-full cursor-pointer w-[32px] h-[32px] p-1 absolute right-2 top-2 transition-all ease-linear z-[9999] hover:scale-[1.1]"
            >
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type="checkbox" hidden checked={isChecked} onChange={toogleCart} />

            <aside className={`flex flex-col justify-center items-center bg-[#000] p-[32px] fixed right-0 top-0 w-[200px] ${isChecked ? 'block' : 'hidden'}`}>
                <ul>
                    <li className="border-b border-b-[#444] pb-[16px]">
                        <Image
                            src="https://i.dummyjson.com/data/products/6/thumbnail.png"
                            alt="Laptop"
                            width={300}
                            height={300}
                            priority
                            className="w-auto h-auto aspect-video"
                        />
                        <div>
                            <strong>Laptop</strong> - $299
                        </div>

                        <footer className="flex gap-2 justify-center items-center">
                            <small>
                                Qty: 1
                            </small>
                            <button className="p-2">+</button>
                        </footer>
                    </li>
                </ul>

                <button className="mt-[16px]">
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}