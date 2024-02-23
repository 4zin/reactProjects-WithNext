import { useContext } from "react"
import { FiltersContext } from "../context/filters"
import { ProductsType } from "../types"

export function useFilters() {

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