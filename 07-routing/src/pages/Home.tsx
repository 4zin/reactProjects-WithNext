import { Link } from "../Link"

export default function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Soy el home</p>
            <Link to="/about">Ir a sobre nosotros</Link >
        </>
    )
}