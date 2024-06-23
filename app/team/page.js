'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        loop: false,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            clickable: true,
            nextEl: ".button-team-detail-next",
            prevEl: ".button-team-detail-prev",
        },
    };
import Layout from "@/components/layout/Layout"
import PartnerSlider1 from "@/components/slider/PartnerSlider1"
import PartnerSlider2 from "@/components/slider/PartnerSlider2"
import Link from "next/link"
export default function Team() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="OUR TEAM">
                <div>
                    <section className="tf-section tf-team-detail">
                        <div className="tf-container">
                            <div className="row ">
                                <div className="col-md-6">
                                    <div className="swiper-container team-details ">
                                        <Swiper {...swiperOptions} className="swiper-wrapper">
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <img src="/assets/images/team/team-details.jpg" alt="Image" />
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <img src="/assets/images/team/team-details.jpg" alt="Image" />
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="slider-item">
                                                    <img src="/assets/images/team/team-details.jpg" alt="Image" />
                                                </div>{/* item*/}
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="content-detail">
                                        <p className="position">WEB DESIGNER</p>
                                        <h2 className="name">Tony Wings</h2>
                                        <h3 className="title">About</h3>
                                        <p className="description">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                        </p>
                                        <h3 className="title mb14">Contact</h3>
                                        <div className="contact-infor">
                                            <div className="contact-infor-box">
                                                <span className="icon">
                                                    <img src="/assets/images/svg/email-2.svg" alt="Image" />
                                                </span>
                                                <p>Info@yourcompany.com</p>
                                            </div>
                                            <div className="contact-infor-box">
                                                <span className="icon">
                                                    <img src="/assets/images/svg/phone-2.svg" alt="Image" />
                                                </span>
                                                <p>+84 0977425031</p>
                                            </div>
                                        </div>
                                        <ul className="social-item">
                                            <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram-plane" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                        </ul>
                                        <div className="group-btn">
                                            <div className="swiper-button-prev button-team-detail-prev" />
                                            <div className="swiper-button-next button-team-detail-next" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section team">
                        <div className="icon">
                            <svg width={250} height={473} viewBox="0 0 250 473" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2673_3126)">
                                    <path d="M149.737 53.4772L90.521 170.211L214.959 129.532L239.19 203.656L114.752 244.335L231.486 303.551L196.209 373.095L79.4746 313.879L120.153 438.317L46.0298 462.548L5.35093 338.11L-53.865 454.844L-123.409 419.566L-64.1928 302.832L-188.631 343.511L-212.862 269.388L-88.4239 228.709L-205.158 169.493L-169.881 99.949L-53.1464 159.165L-93.8253 34.727L-19.7016 10.4959L20.9773 134.934L80.1932 18.1996L149.737 53.4772Z" fill="url(#paint0_linear_2673_3126)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_2673_3126" x="-222.861" y="0.496094" width="472.051" height="472.052" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation={5} result="effect1_foregroundBlur_2673_3126" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2673_3126" x1="-187.519" y1="134.721" x2="213.848" y2="338.323" gradientUnits="userSpaceOnUse">
                                        <stop offset={0} stopColor="var(--primary-color35)" />
                                        <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="tf-container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 ">
                                    <div className="tf-heading mb60">
                                        <h2 className="heading">OUR TEAM</h2>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-1.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Ralph Edwards</Link></h4>
                                        <p className="position">Founder</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team active">
                                        <div className="image">
                                            <img src="/assets/images/team/team-2.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Jason Smith</Link></h4>
                                        <p className="position">Co - Founder</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-3.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Tony Wings</Link></h4>
                                        <p className="position">Web Designer</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-4.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Esther Howard</Link></h4>
                                        <p className="position">Project Manager</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-5.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Jenny Wilson</Link></h4>
                                        <p className="position">Artist</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-6.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Robert Fox</Link></h4>
                                        <p className="position">UI/UX Designer</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6 col-12 ">
                                    <div className="tf-team">
                                        <div className="image">
                                            <img src="/assets/images/team/team-7.jpg" alt="Image" />
                                        </div>
                                        <h4 className="name"><Link href="/team">Devon Lane</Link></h4>
                                        <p className="position">Ux Architect</p>
                                        <ul className="social">
                                            <li><Link href="#"><i className="fab fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-facebook" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fab fa-telegram" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" tf-section tf-partner-sec ">
                        <div className="icon">
                            <svg width={126} height={308} viewBox="0 0 126 308" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2679_13668)">
                                    <path d="M-15.1902 297.004L-36.5388 217.33L-77.7885 288.777L-120.347 264.205L-79.0973 192.759L-158.771 214.107L-171.49 166.642L-91.8156 145.293L-163.262 104.043L-138.691 61.485L-67.2445 102.735L-88.5931 23.0606L-41.1276 10.3423L-19.779 90.0164L21.4708 18.5697L64.0293 43.1409L22.7795 114.588L102.454 93.239L115.172 140.704L35.4978 162.053L106.945 203.303L82.3734 245.861L10.9267 204.612L32.2753 284.286L-15.1902 297.004Z" fill="url(#paint0_linear_2679_13668)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_2679_13668" x="-181.49" y="0.342773" width="306.662" height="306.661" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation={5} result="effect1_foregroundBlur_2679_13668" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2679_13668" x1="108.813" y1="116.972" x2="-165.131" y2="190.375" gradientUnits="userSpaceOnUse">
                                        <stop offset={0} stopColor="var(--primary-color35)" />
                                        <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="tf-container">
                            <div className="row">
                                <div className="col-md-12 ">
                                    <div className="tf-heading mb60">
                                        <h2 className="heading"><span>BINABOX</span> PARTNER</h2>
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="swiper-container partner ">
                                        <PartnerSlider1 />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="swiper-container partner-2 style-2">
                                        <PartnerSlider2 />
                                    </div>
                                </div>
                                <div className="col-md-12 ">
                                    <div className="swiper-container partner ">
                                        <PartnerSlider1 />
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