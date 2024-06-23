'use client'
import { usePathname } from 'next/navigation' // Corrected import path
import { useEffect } from 'react'

export default function AddClassBody() {
    const pathname = usePathname()

    useEffect(() => {
        const bodyElement = document.querySelector('body')

        if (bodyElement) {
            // Remove all classes
            bodyElement.classList.remove('home-1', 'home-2', 'counter-scroll', 'team-page')

            // Add class based on pathname
            if (pathname === '/') {
                bodyElement.classList.add('home-1','counter-scroll')
            }
            if (pathname === '/home2') {
                bodyElement.classList.add('home-2','counter-scroll')
            }
            else if (pathname === '/home3') {
                bodyElement.classList.add('counter-scroll')
            }
            else if (pathname === '/about1') {
                bodyElement.classList.add('team-page','counter-scroll')
            }
            else if (pathname === '/about2') {
                bodyElement.classList.add('team-page','counter-scroll')
            }
            else if (pathname === '/team') {
                bodyElement.classList.add('team-page')
            }

        }
    }, [pathname])

    return null
}
