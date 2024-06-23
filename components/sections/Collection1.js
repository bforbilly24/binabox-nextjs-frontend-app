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
const swiperOptions2 = {
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
            slidesPerView: 5
        },
    },
    observer: true,
    observeParents: true,
    shortSwipes: false,
    longSwipes: false,
    allowTouchMove: true,
    autoplay: {
        delay: 0.3,
        reverseDirection: true,
    },
    freeMode: true,
    speed: 5000,
    // disableOnInteraction: false
}

export default function Collection1() {
    return (
        <>

            <section className=" tf-collection ">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 wow fadeInUp">
                            <div className="swiper-container collection-1 visible">
                                <Swiper {...swiperOptions} className="swiper-wrapper ">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product ">
                                                <div className="image">
                                                    <img src="/assets/images/product/product1.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product active">
                                                <div className="image">
                                                    <img src="/assets/images/product/product2.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product10.jpg" alt="Image" />
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
                                                    <img src="/assets/images/product/product9.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKELATON #01</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product8.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product11.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tf-container-2">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container collection-2 visible">
                                <Swiper {...swiperOptions2} className="swiper-wrapper ">
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
                                                    <img src="/assets/images/product/product8.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SPOTIOR#2</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product4.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS#2</Link></h6>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-product">
                                                <div className="image">
                                                    <img src="/assets/images/product/product3.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS#2</Link></h6>
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
                                                    <img src="/assets/images/product/product5.jpg" alt="Image" />
                                                </div>
                                                <h6 className="name"><Link href="/item-detail">SKISIRS #02</Link></h6>
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
