import { Movies } from "./Movies"
import { useMovies } from "../hooks/useMovies"

export default function Home() {

    const { movies: mappedMovies } = useMovies()

    return (
        <div className="flex flex-col justify-center items-center">
            <h1>Movie Searcher</h1>
            <header>
                <form className="flex justify-center items-centers">
                    <input placeholder="Your Name, Avengers, In The Heights..." />
                    <button type="submit">Buscar</button>
                </form>
            </header>

            <main className="flex justify-center">
                <Movies movies={mappedMovies} />
            </main>
        </div>
    )
}