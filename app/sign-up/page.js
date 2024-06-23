
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SignUp() {

    return (
        <>

            <Layout headerStyle={1}>
                <section className="bg-sign-in" style={{height:"100vh"}}>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="sign-in-form style2 mx-auto">
                                    <h2>SIGN UP</h2>
                                    <p>Welcome back! Please enter your details</p>
                                    <form action="#" id="contactform">
                                        <fieldset><input id="name" name="name" tabIndex={1} aria-required="true" required type="text" placeholder="Your full name" /></fieldset>
                                        <fieldset> <input name="email" tabIndex={2} aria-required="true" type="email" placeholder="Your email" required /></fieldset>
                                        <fieldset> <input id="showpassword" name="password" tabIndex={2} aria-required="true" type="password" placeholder="Set your password" required /></fieldset>
                                        <button className="tf-button submit" type="submit">SIGN UP</button>
                                    </form>
                                    <div className="or"><span>login with</span></div>
                                    <div className="box-sign-social">
                                        <Link className="tf-button" href="#"><i className="fab fa-google" />Google</Link>
                                        <Link className="tf-button" href="#"><i className="fab fa-facebook-f" />Facebook</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}