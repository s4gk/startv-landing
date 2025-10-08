"use client";

import React, { useState } from 'react'
import { IconMenu, IconClose, SocialIcons, NavLinks } from '@/components';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <nav className='bg-[#ffffff] flex p-4 gap-2 md:px-16 md:py-6'>
            <div className='w-full lg:w-2/7 flex place-content-between'>
                <div>Logo</div>
                <div className='block md:hidden' onClick={toggleMenu}>
                    {isOpen ? <IconClose /> : <IconMenu />}
                </div>
            </div>
            {/* Mobile dropdown menu */}
            {isOpen ? (
                <div
                    className={`fixed top-[72px] right-0 w-3/4 sm:w-2/5 h-[calc(100vh-72px)] bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col justify-between p-6 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >                
                        <NavLinks />                    
                    <SocialIcons />
                </div>
            ) :
                (<div className='hidden sm:flex w-5/7 place-content-between'>
                    <NavLinks />
                    <SocialIcons />
                </div>)}
        </nav>
    )
}