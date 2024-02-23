import { useFilters } from "az1n<prefix>/app/hooks/useFilters"
import { Filters } from "az1n<prefix>/app/types"
import React, { useState, useId } from "react"
import { Dispatch, SetStateAction } from "react"

export function Filter() {
    const { filters, setFilters } = useFilters()



    const categoryFilterId = useId()
    const minPriceFilterId = useId()

    const handleRangePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: Number(event.target.value)
        }))
    }

    const handleChangeCategory = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilters(prevState => ({
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
                    value={filters.minPrice}
                />
                <span>{filters.minPrice}</span>
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