import { Link } from "../Link"

export default function About() {
    return (
        <>
            <div>
                <img style={{ width: '300px', height: '350px' }} src="/linkedInProfile.webp" alt="Az1n Profile pic" />
                <p>Soy el preciado About</p>
            </div>
            <Link to="/">Ir a Home</Link>
        </>
    )
}