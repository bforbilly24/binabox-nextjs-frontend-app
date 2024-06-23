
import Link from "next/link"

export default function Work2() {
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
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                            <div className="tf-work style-2  wow fadeInUp" data-wow-delay="0.2s">
                                <div className="image">
                                    <img id="work-5" src="/assets/images/svg/work-5.svg" alt="Image" />
                                </div>
                                <h5 className="step">STEP 1</h5>
                                <h4 className="title"><Link href="#">Connect Your Wallet</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                            <div className="tf-work style-2 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="image">
                                    <img id="work-6" src="/assets/images/svg/work-6.svg" alt="Image" />
                                </div>
                                <h5 className="step">STEP 2</h5>
                                <h4 className="title"><Link href="#">Sellect Your Quaility</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                            <div className="tf-work style-2 wow fadeInUp" data-wow-delay="0.4s">
                                <div className="image">
                                    <img id="work-7" src="/assets/images/svg/work-7.svg" alt="Image" />
                                </div>
                                <h5 className="step">STEP 3</h5>
                                <h4 className="title"><Link href="#">Confiem the Transaction</Link></h4>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 ">
                            <div className="tf-work style-2 mb30 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="image">
                                    <img id="work-8" src="/assets/images/svg/work-8.svg" alt="Image" />
                                </div>
                                <h5 className="step">STEP 4</h5>
                                <h4 className="title"><Link href="#">Receive Your NFTs</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
