import { Filters } from "az1n<prefix>/app/types"
import React, { useState, useId } from "react"
import { Dispatch, SetStateAction } from "react"

export function Filter({ onChange }: { onChange: Dispatch<SetStateAction<Filters>> }) {

    const [price, setPrice] = useState<number>(0)

    const categoryFilterId = useId()
    const minPriceFilterId = useId()

    const handleRangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrice(Number(event.target.value))
        onChange(prevState => ({
            ...prevState,
            minPrice: Number(event.target.value)
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="flex justify-evenly items-center">
            <div>
                <label htmlFor={minPriceFilterId}>Price</label>
                <input type="range"
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    onChange={handleRangePrice}
                />
                <span>{price}</span>
            </div>

            <div className="flex gap-4">
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All</option>
                    <option value="laptops">Laptos</option>
                    <option value="smartphones">Smartphones</option>
                </select>
            </div>

        </section>
    )
}