import dynamic from 'next/dynamic'
import Link from "next/link"
import Menu from '../Menu'
import MobileMenu from '../MobileMenu'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
    ssr: false,
})

export default function Header1({ scroll, isMobileMenu, handleMobileMenu, handleModal }) {
    return (
        <>

            <header className={`header ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="site-header-inner">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link href="/" rel="home" className="main-logo">
                                            <img id="logo_header" src="/assets/images/logo/logo_dark.png" alt="Image" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="header-center">
                                    <div className="d-none d-lg-block">
                                        <nav id="main-nav" className="main-nav">
                                            <Menu />
                                        </nav>{/* #main-nav */}
                                    </div>
                                </div>
                                <div className="header-right">
                                    <ThemeSwitch />
                                    <Link href="/contact" className="tf-button discord"><i className="icon-fl-vt" /><span>DISCORD</span></Link>
                                    <a onClick={handleModal} className="tf-button connect" data-toggle="modal" data-target="#popup_bid">
                                        <i className="icon-fl-wallet" /><span>CONNECT</span></a>
                                </div>
                                <div className="d-block d-lg-none">
                                    <div className={`mobile-button d-block ${isMobileMenu ? "active" : ""}`} onClick={handleMobileMenu}><span /></div>{/* /.mobile-button */}
                                </div>
                                <MobileMenu isMobileMenu={isMobileMenu} />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
