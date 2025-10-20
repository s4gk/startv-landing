import React from 'react';
import { navbarLinks } from '@/data';
import { ButtonNav } from '@/components';
import styles from './NavLinks.module.scss';

interface NavLinksProps {
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const NavLinks = ({setIsOpen}: NavLinksProps) => {

    return (
        <ul className={styles.navlinks}>
            {navbarLinks.map(({id, name, href}) => (
                <ButtonNav key={id} link={href} label={name} onClick={() => setIsOpen && setIsOpen(false)} id={0}/>
            ))}
        </ul>
    )
}