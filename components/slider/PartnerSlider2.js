'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"



const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 2,
    spaceBetween: 0,
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
    disableOnInteraction: true,
    breakpoints: {
        600: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 30,
        },
    },
}
export default function PartnerSlider2() {
    return (
        <>
            <Swiper {...swiperOptions2} className="swiper-wrapper">
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-7.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-8.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-9.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-10.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-11.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-12.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-7.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-8.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-9.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-10.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-11.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-item">
                        <div className="tf-partner">
                            <img src="/assets/images/partner/partner-12.png" alt="Image" />
                        </div>
                    </div>{/* item*/}
                </SwiperSlide>
            </Swiper>
        </>
    )
}
