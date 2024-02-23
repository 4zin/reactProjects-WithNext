'use client'
import { createContext, useState, Dispatch, SetStateAction } from "react";
import { Filters } from "../types";

type FiltersContextType = {
    filters: Filters
    setFilters: React.Dispatch<SetStateAction<Filters>>
}

const initialFilters = {
    category: 'all',
    minPrice: 0
}

export const FiltersContext = createContext<FiltersContextType>({
    filters: initialFilters,
    setFilters: () => { }
})

export function FiltersProvider({ children }: { children: React.ReactNode }) {

    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })

    const defaultValue = {
        filters,
        setFilters
    }

    return (
        <FiltersContext.Provider value={defaultValue}>
            {children}
        </FiltersContext.Provider>
    )
}