import { useState, useRef, useMemo, useCallback } from "react"
import { searchMovies } from "../services/movies"
import { Movie } from "../types/types"


export function useMovies({ search, sort }:
    { search: string; sort: boolean; }): { movies: Movie[] | null, getMovies: (search: string, sort: boolean) => void } {

    const [movies, setMovies] = useState<Movie[] | null>([])
    const previousSearch = useRef(search)


    const getMovies = useCallback(async (search: string) => {

        if (search === previousSearch.current) return

        try {
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)
        } catch (error) {
            throw new Error('Error searching movies')
        }
    }, [])

    const sortedMovies = useMemo(() => {
        return sort && movies
            ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
            : movies
    }, [sort, movies])

    return { movies: sortedMovies, getMovies }
}