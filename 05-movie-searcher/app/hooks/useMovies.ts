import jsonMovies from "../mocks/jsonMovies.json"
import { Movie } from "../types/types"


export function useMovies(): { movies: Movie[] } {
    const movies = jsonMovies.Search

    const mappedMovies = movies?.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
    }))

    return { movies: mappedMovies }
}