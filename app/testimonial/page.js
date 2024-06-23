
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Testimonial() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="TESTIMONIAL">
                <section className="tf-testimonial-page ">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-heading">
                                    <h2 className="heading">WHAT PEOPLE SAY</h2>
                                    <p className="sub-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt1.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt2.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt3.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt4.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt5.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="tf-testimonial">
                                    <div className="icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width={81} height={50} viewBox="0 0 81 50" fill="none">
                                            <path opacity="0.5" d="M69.6 11.8V0.999998C68 0.799989 66.8 0.599991 65.4 0.599991C50.8 0.599991 42.4 6.79999 42.4 26.4C42.4 41.4 48 49.6 62 49.6C75.6 49.6 80.2 44.2 80.2 34.2C80.2 24.6 74.8 19.4 64.6 19.4C60.2 19.4 56.8 20.2 54.8 21.4L54.6 21.2C54.6 14.2 58.6 11.8 66.6 11.8C67.6 11.8 68.2 11.8 69.4 12L69.6 11.8ZM27.8 11.8V0.999998C26.2 0.799989 25.2 0.599991 23.6 0.599991C9 0.599991 0.6 6.79999 0.6 26.4C0.6 41.4 6.2 49.6 20.2 49.6C34 49.6 38.4 44.2 38.4 34.2C38.4 24.6 33 19.4 22.8 19.4C18.4 19.4 15.2 20.2 13 21.4L12.8 21.2C12.8 14.2 16.8 11.8 25 11.8C25.8 11.8 26.4 11.8 27.6 12L27.8 11.8Z" fill="#21E786" />
                                        </svg>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <div className="author-tes">
                                        <div className="avt">
                                            <img src="/assets/images/author/avt6.jpg" alt="images" />
                                        </div>
                                        <div className="content">
                                            <Link href="/team">Jenny huynh</Link>
                                            <h6>Marketer</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}