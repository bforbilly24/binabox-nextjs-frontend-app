'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1000,
    effect: "fadeInRight",
}

export default function Slider2() {
    return (
        <>

            <section className="tf-slider home2">
                <div className="swiper-container slider-home-2 ">
                    <Swiper {...swiperOptions} className="swiper-wrapper">
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="tf-slider-item style-2">
                                    <div className="overlay"><img src="/assets/images/slider/bg-slider-2.jpg" alt="image" /></div>
                                    <div className="content-inner">
                                        <h1 className="heading">EXPLORE NFT COLLECTION
                                        </h1>
                                        <p className="sub-heading">We are the best way to check the rarity of NFT collection</p>
                                        <div className="btn-slider ">
                                            <Link href="/explore-banner" className="tf-button ">CONNECT WALLET</Link>
                                            <Link href="/add-NFT" className="tf-button style-2">WHITELIST NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* item*/}
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item">
                                <div className="tf-slider-item style-2">
                                    <div className="overlay"><img src="/assets/images/slider/bg-slider-3.jpg" alt="image" /></div>
                                    <div className="content-inner">
                                        <h1 className="heading">EXPLORE NFT COLLECTION
                                        </h1>
                                        <p className="sub-heading">We are the best way to check the rarity of NFT collection</p>
                                        <div className="btn-slider ">
                                            <Link href="/explore-banner" className="tf-button ">CONNECT WALLET</Link>
                                            <Link href="/add-NFT" className="tf-button style-2">WHITELIST NOW</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* item*/}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}
