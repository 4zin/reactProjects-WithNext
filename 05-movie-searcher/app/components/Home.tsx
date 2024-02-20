'use client'
import { Movies } from "./Movies"
import { useMovies } from "../hooks/useMovies"
import { useState, useEffect, useRef, useCallback } from "react"
import debounce from "just-debounce-it"

function useSearch() {
    const [search, setSearch] = useState<string>('')
    const [errors, setErrors] = useState<string>('')
    const isFirstInput = useRef(true)

    useEffect(() => {

        if (isFirstInput.current) {
            isFirstInput.current = search === ''
            return
        }

        if (search === '') {
            setErrors('Debe escribir algo')
            return
        }

        if (search.length < 3) {
            setErrors('La busqueda debe ser mayor de 3 caracteres')
            return
        }

        setErrors('')
    }, [search])

    return { search, setSearch, errors }

}

export default function Home() {

    const [sort, setSort] = useState<boolean>(false)
    const { search, setSearch, errors } = useSearch()
    const { movies, getMovies } = useMovies({ search, sort })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debouncedGetMovies = useCallback(
        debounce((search: string, sort: boolean) => {
            getMovies(search, sort);
        }, 300),
        [getMovies, sort]
    );


    const handleSort = () => {
        setSort(!sort)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        getMovies(search, sort)
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value
        setSearch(newSearch)
        debouncedGetMovies(newSearch, sort)
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Movie Searcher</h1>
            <header>
                <form onSubmit={handleSubmit} className="flex justify-center items-centers">
                    <input
                        onChange={handleChange}
                        value={search}
                        placeholder="Your Name, Avengers, In The Heights..."
                        className={`${errors ? 'border border-red-500' : 'border-transparent'}`}
                    />
                    <input type="checkbox" onChange={handleSort} checked={sort} />
                    <button type="submit">Buscar</button>
                </form>
                {errors && <p className="text-red-500">{errors}</p>}
            </header>

            <main className="flex justify-center">
                <Movies movies={movies} />
            </main>
        </div>
    )
}