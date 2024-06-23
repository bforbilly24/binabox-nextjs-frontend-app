'use client'
import Link from "next/link"
import { TypeAnimation } from 'react-type-animation'
import { Swiper, SwiperSlide } from "swiper/react"
import CounterUp from "../elements/CounterUp"

const swiperOptions = {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
}

export default function Slider3() {
    return (
        <>

            <section className="tf-slider home3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="swiper-container slider-home ">
                                <Swiper {...swiperOptions} className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                    <h1 className="heading mb0">WITH
                                                        <span className="animationtext clip">
                                                            <TypeAnimation
                                                                sequence={[
                                                                    // Same substring at the start will only be typed out once, initially
                                                                    ' BINABOX',
                                                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                                                    ' NFTBOX',
                                                                    1000,
                                                                    ' BOXNFT',
                                                                    1000,
                                                                ]}
                                                                wrapper="span"
                                                                speed={50}
                                                                style={{ display: 'inline-block', marginLeft: "15px" }}
                                                                repeat={Infinity}
                                                                className="cd-words-wrapper ms-3">
                                                            </TypeAnimation>
                                                        </span>
                                                    </h1>
                                                    <h1 className="heading"> EXPLORE NFT COLLECTION </h1>
                                                    <p className="sub-heading">We are the best way to check the rarity of
                                                        NFT collection</p>
                                                    <div className="counter-wrap">
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={2240} />+
                                                            </div>
                                                            <h6>Total Iteam</h6>
                                                        </div>
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={1000} />+
                                                            </div>
                                                            <h6>Profiles Whitelisted</h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-slider ">
                                                        <Link href="#" className="tf-button " data-toggle="modal" data-target="#popup_bid">CONNECT WALLET</Link>
                                                        <Link href="/collection" className="tf-button style-2">WHITELIST
                                                            NOW</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img src="/assets/images/slider/slider-8.png" alt="Image" className="img ani5" />
                                                    <img src="/assets/images/slider/slider-7.png" alt="Image" className="ani4 img-1" />
                                                    <img src="/assets/images/slider/slider-6.png" alt="Image" className="ani5 img-2" />
                                                </div>
                                            </div>
                                        </div>{/* item*/}
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="slider-item">
                                            <div className="tf-slider-item style-3">
                                                <div className="content-inner">
                                                    <h1 className="heading mb0">WITH
                                                        <span className="animationtext clip">
                                                            <TypeAnimation
                                                                sequence={[
                                                                    // Same substring at the start will only be typed out once, initially
                                                                    ' BINABOX',
                                                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                                                    ' NFTBOX',
                                                                    1000,
                                                                    ' BOXNFT',
                                                                    1000,
                                                                ]}
                                                                wrapper="span"
                                                                speed={50}
                                                                style={{ display: 'inline-block', marginLeft: "15px" }}
                                                                repeat={Infinity}
                                                                className="cd-words-wrapper ms-3">
                                                            </TypeAnimation>
                                                        </span>
                                                    </h1>
                                                    <h1 className="heading"> EXPLORE NFT COLLECTION </h1>
                                                    <p className="sub-heading">We are the best way to check the rarity of
                                                        NFT collection</p>
                                                    <div className="counter-wrap">
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={2240} />+
                                                            </div>
                                                            <h6>Total Iteam</h6>
                                                        </div>
                                                        <div className="tf-counter">
                                                            <div className="content">
                                                                <CounterUp count={1000} />+
                                                            </div>
                                                            <h6>Profiles Whitelisted</h6>
                                                        </div>
                                                    </div>
                                                    <div className="btn-slider ">
                                                        <Link href="#" className="tf-button " data-toggle="modal" data-target="#popup_bid">CONNECT WALLET</Link>
                                                        <Link href="/collection" className="tf-button style-2">WHITELIST
                                                            NOW</Link>
                                                    </div>
                                                </div>
                                                <div className="image">
                                                    <img src="/assets/images/slider/slider-8.png" alt="Image" className="img ani5" />
                                                    <img src="/assets/images/slider/slider-7.png" alt="Image" className="ani4 img-1" />
                                                    <img src="/assets/images/slider/slider-6.png" alt="Image" className="ani5 img-2" />
                                                </div>
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
