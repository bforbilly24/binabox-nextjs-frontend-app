import Link from "next/link"

export default function Footer2() {
    return (
        <>

            <footer className="footer style-2">
                <div className="footer-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title">JOIN OUR COMMUNITY</h2>
                                <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                <div className="group-btn">
                                    <Link href="#" className="tf-button discord" data-toggle="modal" data-target="#popup_bid"><i className="icon-fl-vt" /><span>DISCORD</span></Link>
                                    <Link href="/collection" className="tf-button">WHITELIST NOW</Link>
                                </div>
                                <form action="#" id="subscribe-form">
                                    <input type="email" placeholder="Enter your email" required id="subscribe-email" />
                                    <button className="tf-button" type="submit" id="subscribe-button">SUBSCRIBE</button>
                                </form>
                                <ul className="social-item">
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-telegram-plane" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                    <li><Link href="#"><i className="icon-fl-tik-tok-2" /></Link></li>
                                    <li><Link href="#"><i className="icon-fl-vt" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-inner">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="bottom">
                                    <div className="content-left">
                                        <img src="/assets/images/logo/logo-bottom.png" alt="Image" />
                                        <p className="copy-right">BINABOX {new Date().getFullYear()} - ALL rights reserved</p>
                                    </div>
                                    <ul className="menu-bottom">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/about1">About</Link></li>
                                        <li><Link href="/roadmap-1">Roadmap</Link></li>
                                        <li><Link href="/team">Our Team</Link></li>
                                        <li><Link href="/faq1">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
