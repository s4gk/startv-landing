import { navbarLinks } from '@/data'
import Link from 'next/link'
import React from 'react'

export const NavLinks = () => {

    return (
        <ul className='flex text-black gap-10'>
            {navbarLinks.map(({id, name, href}) => (
                <li key={id}>
                    <Link href={href} className='text-base font-medium hover:font-semibold'>
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}