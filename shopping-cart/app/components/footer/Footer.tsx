import { useCart } from "az1n<prefix>/app/hooks/useCart";
import { useFilters } from "az1n<prefix>/app/hooks/useFilters";
import { Filters } from "az1n<prefix>/app/types";

export function Footer() {

    const { filters } = useFilters()
    const { cart } = useCart()

    return (
        <footer className="fixed left-4 bottom-4 text-left bg-black bg-opacity-70 py-[8px] px-[24px] rounded-[32px] opacity-90 backdrop-blur">
            <h4>
                Prueba técnica de React 🎷🐛⚛ - Gracias a <span className="text-[14px] text-[#09f] opacity-80"> @midudev</span>
            </h4>
            <h5 className="flex m-0">Shopping cart con useReducer & useContext</h5>
        </footer>
    )
}