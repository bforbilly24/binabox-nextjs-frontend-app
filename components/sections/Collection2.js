
import Link from "next/link"

export default function Collection2() {
    return (
        <>

            <section className=" tf-collection wow fadeInUp">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-heading style-2 mb60 ">
                                <h2 className="heading">HOT COLLECTION</h2>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product ">
                                <div className="image">
                                    <img src="/assets/images/product/product12.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product active">
                                <div className="image">
                                    <img src="/assets/images/product/product13.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product14.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product15.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product16.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product17.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product18.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tf-product">
                                <div className="image">
                                    <img src="/assets/images/product/product19.jpg" alt="Image" />
                                </div>
                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
