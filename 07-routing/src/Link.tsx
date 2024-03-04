import { EVENTS } from "./const"

export function navigate(href: string) {
    window.history.pushState({}, '', href)

    const navigationEvent = new Event(EVENTS.pushState)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, children, to, ...props }: { target?: string; children: React.ReactNode; to: string }) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault()
        navigate(to)
    }

    return <a onClick={handleClick} href={to} target={target} {...props} >{children}</a>
}