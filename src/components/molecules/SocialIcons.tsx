import React from 'react'
import { IconFacebook, IconWhatsapp, IconEmail } from '@/components'

export const SocialIcons = () => {
    const color = "text-foreground"
    return (
        <div className='flex justify-between lg:gap-4'>
            <IconFacebook color={color} />
            <IconWhatsapp color={color} />
            <IconEmail color={color} />
        </div>
    )
}