import { ApiResponse, Movie } from "../types/types"

export const searchMovies = async ({ search }: { search: string }) => {
    if (search === '') return null

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=ca8c7a11&s=${search}`)
        const json: ApiResponse = await response.json()

        const movies = json.Search

        return movies?.map((movie) => {
            if (movie.Poster && movie.Poster !== 'N/A') {

                return {
                    id: movie.imdbID,
                    title: movie.Title,
                    year: movie.Year,
                    poster: movie.Poster
                }
            }
        }).filter(Boolean) as Movie[]
    } catch (error) {
        throw new Error('Error searching movies')
    }
}