
import Link from "next/link"

export default function Work1() {
    return (
        <>

            <section className="tf-section section-work">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">HOW TO <span> BINABOX </span>WORK</h2>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.2s">
                                <div className="image">
                                    <img className="work-image" id="work-1" src="/assets/images/svg/work-1.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="#">CONNECT THE WALLET</Link></h6>
                                <p className="content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.3s">
                                <div className="image">
                                    <img className="work-image" id="work-2" src="/assets/images/svg/work-2.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="#">SELLECT THE QUAILITY</Link></h6>
                                <p className="content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.4s">
                                <div className="image">
                                    <img className="work-image" id="work-3" src="/assets/images/svg/work-3.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="#">CONFIRM THE TRANSACTION</Link></h6>
                                <p className="content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat.</p>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 ">
                            <div className="tf-work wow fadeInUp" data-wow-delay="0.5s">
                                <div className="image">
                                    <img className="work-image" id="work-4" src="/assets/images/svg/work-4.svg" alt="Image" />
                                </div>
                                <h6 className="title"><Link href="#">RECEIVE YOUR NFTS</Link></h6>
                                <p className="content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
