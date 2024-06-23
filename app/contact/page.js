
import Layout from "@/components/layout/Layout"
export default function Contact() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="CONTACT US">
                <section className="tf-contact ">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-infor-wrap">
                                    <div className="tf-infor">
                                        <div className="icon">
                                            <img src="/assets/images/svg/loaction.svg" alt="Image" />
                                        </div>
                                        <h3 className="title">Location</h3>
                                        <p className="sub-title">2163 Phillips Gap Rd West Jefferson</p>
                                    </div>
                                    <div className="tf-infor">
                                        <div className="icon">
                                            <img src="/assets/images/svg/email.svg" alt="Image" />
                                        </div>
                                        <h3 className="title">Email</h3>
                                        <p className="sub-title">Info.avitex@gmail.com</p>
                                    </div>
                                    <div className="tf-infor">
                                        <div className="icon">
                                            <img src="/assets/images/svg/phone.svg" alt="Image" />
                                        </div>
                                        <h3 className="title">Phone</h3>
                                        <p className="sub-title">+1 666 8888</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-6 col-lg-8 col-md-9">
                                <div className="tf-heading">
                                    <h2 className="heading">Get In Touch</h2>
                                    <p className="sub-heading">Browse through the most freuently asked questions</p>
                                </div>
                                <form action="contact/contact-process.php" method="post" id="commentform" className="comment-form">
                                    <div className="form-inner">
                                        <fieldset className="name">
                                            <input type="text" id="name" placeholder="Name" className="tb-my-input" name="name" tabIndex={2} aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="email">
                                            <input type="email" id="email" placeholder="Enter your email" className="tb-my-input" name="email" tabIndex={2} aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="phone">
                                            <input type="tel" id="phone" placeholder="Phone Number" className="tb-my-input" name="phone" tabIndex={2} aria-required="true" required />
                                        </fieldset>
                                        <fieldset className="message">
                                            <textarea id="message" name="message" rows={4} placeholder="Message" tabIndex={4} aria-required="true" required />
                                        </fieldset>
                                    </div>
                                    <div className="btn-submit"><button className="tf-button style-2" type="submit">SEND MESSANGER</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}