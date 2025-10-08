import React from 'react'
import { IconFacebook, IconWhatsapp, IconEmail } from '@/components'

export const SocialIcons = () => {
    const color = "#000000"
    return (
        <div className='flex gap-4'>
            <IconFacebook color={color} />
            <IconWhatsapp color={color} />
            <IconEmail color={color} />
        </div>
    )
}