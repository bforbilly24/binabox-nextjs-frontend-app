
import CountDownTime from "@/components/elements/CountDownTime"
import Link from "next/link"
export default function CommingSoon() {

    return (
        <>

            <div id="wrapper" className="wrapper-style">
                <div id="page" className="clearfix">
                    <section className="comming-soon ">
                        <img src="/assets/images/background/bg-comming-soon.png" alt="Image" className="bg-comming-soon" />
                        <div className="comming-soon-inner">
                            <div className="logo">
                                <Link href="/"><img src="/assets/images/logo/logo_dark.png" alt="Image" id="logo_header" /></Link>
                            </div>
                            <h2 className="title">COMMING SOON</h2>
                            <div className="countdown">
                                <CountDownTime />
                            </div>
                            <form action="#" id="subscribe-form">
                                <input type="email" placeholder="Enter your email" required id="subscribe-email" />
                                <button className="tf-button" type="submit" id="subscribe-button">SIGN UP</button>
                            </form>
                            <div className="group-btn">
                                <Link href="/contact" className="tf-button discord" data-toggle="modal" data-target="#popup_bid"><i className="icon-fl-vt" /><span>DISCORD</span></Link>
                                <Link href="/collection" className="tf-button">WHITELIST NOW</Link>
                            </div>
                            <ul className="social-item">
                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                <li><Link href="#"><i className="fab fa-telegram-plane" /></Link></li>
                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                <li><Link href="#"><i className="icon-fl-tik-tok-2" /></Link></li>
                                <li><Link href="#"><i className="icon-fl-vt" /></Link></li>
                            </ul>
                        </div>
                    </section>
                    {/* Bottom */}
                </div>
                {/* #page */}
            </div>

        </>
    )
}