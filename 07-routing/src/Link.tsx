import { EVENTS, BUTTONS } from "./const"

export function navigate(href: string) {
    window.history.pushState({}, '', href)

    const navigationEvent = new Event(EVENTS.pushState)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, children, to, ...props }: { target?: string; children: React.ReactNode; to: string }) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {


        const isMainEvent = event.button === BUTTONS.primary
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            event.preventDefault()
            navigate(to)
            window.scrollTo(0, 0)
        }

    }

    return <a onClick={handleClick} href={to} target={target} {...props} >{children}</a>
}