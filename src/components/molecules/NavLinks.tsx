import React from 'react';
import { navbarLinks } from '@/data';
import { ButtonNav } from '@/components';

interface NavLinksProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLinks = ({setIsOpen}: NavLinksProps) => {

    return (
        <ul className='flex flex-col justify-center content-center lg:flex-row gap-8'>
            {navbarLinks.map(({id, name, href}) => (
                <ButtonNav key={id} link={href} label={name} onClick={() => setIsOpen && setIsOpen(false)} id={0}/>
            ))}
        </ul>
    )
}