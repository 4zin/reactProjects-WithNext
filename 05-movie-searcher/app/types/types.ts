export type Movie = {
    id: string
    title: string
    year: string
    poster: string
}

export type ApiResponse = {
    Search: {
        imdbID: string;
        Title: string;
        Year: string;
        Poster: string;
    }[];
}