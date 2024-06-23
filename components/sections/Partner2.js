import PartnerSlider1 from "../slider/PartnerSlider1"
import PartnerSlider2 from "../slider/PartnerSlider2"


export default function Partner2() {
    return (
        <>

            <section className=" tf-section tf-partner-sec tf-partner-ss">
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
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading"><span>BINABOX</span> PARTNER</h2>
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeInUp">
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
        </>
    )
}
