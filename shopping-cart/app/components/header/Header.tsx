import { Filters } from 'az1n<prefix>/app/types'
import { Filter } from '../filter/Filter'
import { Dispatch, SetStateAction } from 'react'

export function Header({ setFilters }: { setFilters: Dispatch<SetStateAction<Filters>> }) {
    return (
        <div>
            <h1 className='flex justify-center text-2xl'>React shop 🛒</h1>
            <Filter onChange={setFilters} />
        </div>
    )
}