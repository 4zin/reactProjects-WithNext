import Image from "next/image"
import { Movie } from "../types/types"


function ListOfMovies({ movies }: { movies: Movie[] | null }) {
    return (
        <ul className="sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                movies?.map(movie => (
                    <li key={movie.id} className="flex flex-col text-center items-center mb-8">
                        <h3 className="pb-0">{movie.title}</h3>
                        <p>{movie.year}</p>
                        <Image
                            src={movie.poster}
                            alt={movie.title}
                            width={300} height={500}
                            priority
                            className="w-2/3 h-auto rounded-md"
                        />
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

export function Movies({ movies }: { movies: Movie[] | null }) {

    const hasMovies = movies && movies.length > 0

    return (
        hasMovies
            ? <ListOfMovies movies={movies} />
            : <NoMoviesResults />
    )
}