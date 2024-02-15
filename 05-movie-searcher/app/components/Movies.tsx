import Image from "next/image"
import { Movie } from "../types/types"


function ListOfMovies({ movies }: { movies: Movie[] }) {
    return (
        <ul>
            {
                movies?.map(movie => (
                    <li key={movie.id}>
                        <h3>{movie.title}</h3>
                        <p>{movie.year}</p>
                        <Image src={movie.poster} alt={movie.title} width={300} height={500} />
                    </li>
                ))
            }
        </ul>
    )
}

function NoMoviesResults() {
    return (
        <p>No se encontraron películas para esta búsquedas</p>
    )
}

export function Movies({ movies }: { movies: Movie[] }) {

    const hasMovies = movies?.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}