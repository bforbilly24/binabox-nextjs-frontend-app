
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import PartnerSlider1 from "@/components/slider/PartnerSlider1"
import PartnerSlider2 from "@/components/slider/PartnerSlider2"
import TeamSlider from "@/components/slider/TeamSlider"
import Link from "next/link"
export default function About2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ABOUT US">
                <div>
                    <section className="tf-section tf-about style-2">
                        <div className="icon">
                            <svg width={208} height={208} viewBox="0 0 208 208" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2337_5328)">
                                    <path d="M88.0594 196L88.0594 142.485L50.2119 180.333L27.6674 157.788L65.5149 119.941L12 119.941L12 88.0594L65.5149 88.0594L27.6674 50.2119L50.2119 27.6673L88.0594 65.5148L88.0594 12L119.941 12L119.941 65.5149L157.788 27.6673L180.333 50.2119L142.485 88.0594L196 88.0594L196 119.941L142.485 119.941L180.333 157.788L157.788 180.333L119.941 142.485L119.941 196L88.0594 196Z" fill="url(#paint0_linear_2337_5328)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_2337_5328" x={0} y={0} width={208} height={208} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5328" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2337_5328" x1={196} y1={104} x2={12} y2={104} gradientUnits="userSpaceOnUse">
                                        <stop offset={0} stopColor="var(--primary-color35)" />
                                        <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="icon-2">
                            <svg width={302} height={302} viewBox="0 0 302 302" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_f_2337_5282)">
                                    <path d="M234.678 38.4808L198.329 110.138L274.714 85.1672L289.589 130.668L213.203 155.638L284.86 191.988L263.205 234.677L191.548 198.328L216.518 274.713L171.018 289.588L146.047 213.202L109.698 284.859L67.0084 263.204L103.358 191.547L26.9721 216.517L12.0979 171.017L88.4837 146.046L16.8268 109.697L38.4818 67.0074L110.139 103.357L85.1682 26.9711L130.669 12.0969L155.639 88.4827L191.989 16.8258L234.678 38.4808Z" fill="url(#paint0_linear_2337_5282)" />
                                </g>
                                <defs>
                                    <filter id="filter0_f_2337_5282" x="0.0976562" y="0.0966797" width="301.49" height="301.491" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feGaussianBlur stdDeviation={6} result="effect1_foregroundBlur_2337_5282" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2337_5282" x1="27.6543" y1="88.352" x2="274.032" y2="213.333" gradientUnits="userSpaceOnUse">
                                        <stop offset={0} stopColor="var(--primary-color35)" />
                                        <stop offset={1} stopColor="var(--primary-color35)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="tf-container">
                            <div className="row ">
                                <div className="col-xl-6 col-lg-5 col-md-12 ">
                                    <div className="tf-heading style-2 wow fadeInUp">
                                        <h2 className="heading">THE STORY</h2>
                                        <p className="sub-heading">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occae cat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat</p>
                                    </div>
                                    <div className="counter-wrap">
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Total Iteam</h6>
                                            <div className="content">
                                                <CounterUp count={2240} data-speed={2000} />+
                                            </div>
                                        </div>
                                        <div className="tf-counter wow fadeInUp">
                                            <h6>Profiles Whitelisted</h6>
                                            <div className="content">
                                                <CounterUp count={1000} data-speed={2000} />+
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/about1" className="tf-button style-2 wow fadeInUp">READ MORE</Link>
                                </div>
                                <div className="col-xl-6 col-lg-7 col-md-12">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step  wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        01
                                                    </div>
                                                    <h3>high quaility</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        02
                                                    </div>
                                                    <h3>BIG COLLECTION</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        03
                                                    </div>
                                                    <h3>TOP RESOURCE</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6">
                                            <div className="tf-step wow fadeInUp">
                                                <div className="step-title">
                                                    <div className="sub-number">
                                                        04
                                                    </div>
                                                    <h3>BIG COMMUNITY</h3>
                                                </div>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="tf-section team">
                        <div className="tf-container">
                            <div className="row justify-content-center">
                                <div className="col-md-12 ">
                                    <div className="tf-heading mb60 wow fadeInUp">
                                        <h2 className="heading">OUR TEAM</h2>
                                    </div>
                                </div>
                                <div className="col-md-12 wow fadeInUp">
                                    <TeamSlider />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className=" tf-section tf-partner-sec wow fadeInUp">
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
                                    <div className="tf-heading mb60 ">
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