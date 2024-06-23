'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function MobileMenu({ isMobileMenu }) {
    const [isActive, setIsActive] = useState(0)

    const handleClick = (key) => {
        setIsActive(prevState => prevState === key ? null : key)
    }
    const pathname = usePathname()
    const [currentMenuItem, setCurrentMenuItem] = useState("")

    useEffect(() => {
        setCurrentMenuItem(pathname)
    }, [pathname])

    const checkCurrentMenuItem = (path) => currentMenuItem === path ? "current-menu-item" : ""
    const checkParentActive = (paths) => paths.some(path => currentMenuItem.startsWith(path)) ? "current-menu-item" : ""

    return (
        <>
            <nav id="main-nav-mobi" className="main-nav" style={{ display: `${isMobileMenu ? "block" : "none"}` }}>
                <ul id="menu-primary-menu" className="menu">
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/home-02", "/home-03", "/onePage"])}`}>
                        <Link href="#">HOME</Link>
                        <span className="arrow" onClick={() => handleClick(1)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 1 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/")}`}>
                                <Link href="/">HOME 1</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/home2")}`}>
                                <Link href="/home2">HOME 2</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/home3")}`}>
                                <Link href="/home3">HOME 3</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/about1", "/about2"])}`}>
                        <Link href="#">ABOUT</Link>
                        <span className="arrow" onClick={() => handleClick(2)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 2 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/about1")}`}>
                                <Link href="/about1">ABOUT 1</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/about2")}`}>
                                <Link href="/about2">ABOUT 2</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/roadmap-1", "/roadmap-2", "/roadmap-3"])}`}>
                        <Link href="#">ROAD MAP</Link>
                        <span className="arrow" onClick={() => handleClick(3)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 3 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/roadmap-1")}`}>
                                <Link href="/roadmap-1">ROAD MAP 1</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/roadmap-2")}`}>
                                <Link href="/roadmap-2">ROAD MAP 2</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/roadmap-3")}`}>
                                <Link href="/roadmap-3">ROAD MAP 3</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/sign-in",
                        "/sign-up",
                        "/faq1",
                        "/faq2",
                        "/team",
                        "/collection",
                        "/testimonial",
                        "/item-detail",
                        "/comming-soon",
                        "/404",])}`}>
                        <Link href="#">PAGES</Link>
                        <span className="arrow" onClick={() => handleClick(4)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 4 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/sign-in")}`}>
                                <Link href="/sign-in">SIGN IN</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/sign-up")}`}>
                                <Link href="/sign-up">SIGN UP</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/faq1")}`}>
                                <Link href="/faq1">FAQ 1</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/faq2")}`}>
                                <Link href="/faq2">FAQ 2</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/team")}`}>
                                <Link href="/team">OUR TEAM</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/collection")}`}>
                                <Link href="/collection">COLLECTION</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/testimonial")}`}>
                                <Link href="/testimonial">TESTIMONIAL</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/item-detail")}`}>
                                <Link href="/item-detail">ITEM DETAILS</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/comming-soon")}`}>
                                <Link href="/comming-soon">COMMING SOON</Link>
                            </li>
                            <li className={`menu-item ${checkCurrentMenuItem("/404")}`}>
                                <Link href="/404">404 PAGE</Link></li>
                        </ul>
                    </li>
                    <li className={`menu-item menu-item-has-children ${checkParentActive(["/blog", "/blog-details"])}`}>
                        <Link href="#">BLOG</Link>
                        <span className="arrow" onClick={() => handleClick(5)} />
                        <ul className="sub-menu" style={{ display: `${isActive == 5 ? "block" : "none"}` }}>
                            <li className={`menu-item ${checkCurrentMenuItem("/blog")}`}>
                                <Link href="/blog">BLOG</Link></li>
                            <li className={`menu-item ${checkCurrentMenuItem("/blog-details")}`}>
                                <Link href="/blog-details">BLOG DETAILS</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`menu-item ${pathname === "/contact" ? "current-menu-item" : ""}`}>

                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>

        </>
    )
}
