import { useFilters } from "az1n<prefix>/app/hooks/useFilters";
import { Filters } from "az1n<prefix>/app/types";

export function Footer() {

    const { filters } = useFilters()

    return (
        <footer className="fixed left-4 bottom-4 text-left bg-black bg-opacity-70 py-[8px] px-[24px] rounded-[32px] opacity-90 backdrop-blur">
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}