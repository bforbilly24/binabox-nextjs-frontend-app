'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    reverseDirection: true,
    autoplay: {
        delay: 0.3,
    },
    freeMode: true,
    speed: 4000,
    disableOnInteraction: true
}


export default function Collection3() {
    return (
        <>

            <section className="tf-collection-ss">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="swiper-container collection-1 visible">
                                <Swiper {...swiperOptions} className="swiper-wrapper ">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product active">
                                                <div className="image">
                                                    <img src="/assets/images/product/product21.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product22.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">MEECAT #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product23.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SPOTIOR #03</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product24.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS#2</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product25.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS#2</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product20.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS#2</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
