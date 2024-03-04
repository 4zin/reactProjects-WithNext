import { useEffect, useState } from "react"
import { Routes } from "./App"
import { EVENTS } from "./const"

export function Router({ routes = [], defaultComponent: DefaultComponent = () => <h1>404</h1> }: { routes: Routes, defaultComponent?: () => JSX.Element }) {

    const [currentPath, setCurrentPath] = useState(window.location.pathname)

    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname)
        }

        window.addEventListener(EVENTS.pushState, onLocationChange)
        window.addEventListener(EVENTS.popState, onLocationChange)

        return () => {
            window.removeEventListener(EVENTS.pushState, onLocationChange)
            window.addEventListener(EVENTS.popState, onLocationChange)
        }

    }, [])

    const Page = routes.find(({ path }) => path === currentPath)?.Component
    return Page ? <Page /> : <DefaultComponent />

}