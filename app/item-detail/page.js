'use client'
import CountDownTime from "@/components/elements/CountDownTime"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: ".button-collection-next",
        prevEl: ".button-collection-prev",
    },
    breakpoints: {
        600: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
}
export default function ItemDetails() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ITEM DETAIL">
                <div>
                    <section className=" tf-item-detail ">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-lg-6 col-md-12">
                                    <div className="tf-item-detail-image">
                                        <img src="/assets/images/item-details.jpg" alt="Image" />
                                        <div className="countdown-inner">
                                            <h4 className="heading">PUPLIC END IN</h4>
                                            <div className="countdown style-2">
                                                <CountDownTime />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12">
                                    <div className="tf-item-detail-inner">
                                        <h2 className="title">SKISIRS#4587</h2>
                                        <p className="des">As the first hero of the Neoh Universe, collection has over 9,999 unique skins drawn from the different missions and challenges he faced throughout his life.
                                        </p>
                                        <div className="infor-item-wrap">
                                            <div className="infor-item-box">
                                                <div className="category">Clothing</div>
                                                <h4 className="name">SNAKE</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Eyes</div>
                                                <h4 className="name">MIX</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Face</div>
                                                <h4 className="name">GREEN</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Skin</div>
                                                <h4 className="name">GREEN</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Background</div>
                                                <h4 className="name">GREEN LIGHT</h4>
                                            </div>
                                            <div className="infor-item-box">
                                                <div className="category">Special</div>
                                                <h4 className="name">CAT</h4>
                                            </div>
                                        </div>
                                        <div className="price">
                                            <span className="heading">PRICE:</span>
                                            <span>0.15 ETH</span>
                                        </div>
                                        <div className="group-btn">
                                            <Link href="#" className="tf-button opensea"><i className="icon-fl-bag" /> BUY ON OPENSEA</Link>
                                            <div className="group-2">
                                                <Link href="#" className="tf-button style-2 "><i className="icon-fl-vt" /> JOIN DISCORD</Link>
                                                <Link href="#" className="tf-button style-2 twitter"><i className="fab fa-twitter" /> JOIN TWITTER</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" tf-collection ">
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="tf-heading mb40">
                                        <h2 className="heading">EXPLORE COLECTIONS</h2>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="swiper-container collection visible">
                                        <Swiper {...swiperOptions} className="swiper-wrapper ">
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product3.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product4.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product5.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product6.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product1.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product7.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <div className="tf-product">
                                                        <div className="image">
                                                            <img src="/assets/images/product/product2.jpg" alt="Image" />
                                                        </div>
                                                        <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                                    </div>
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                        </Swiper>
                                        <div className="group-btn-nav">
                                            <div className="swiper-button-prev button-collection-prev" />
                                            <div className="swiper-button-next button-collection-next" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}