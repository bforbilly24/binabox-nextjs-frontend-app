
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SignIn() {

    return (
        <>

            <Layout headerStyle={1}>
                <section className="bg-sign-in" style={{height:"100vh"}}>
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="sign-in-form mx-auto">
                                    <h2>SIGN IN</h2>
                                    <p>Welcome back! Please enter your details</p>
                                    <form action="#" id="contactform">
                                        <fieldset><input id="name" name="name" tabIndex={1} aria-required="true" required type="text" placeholder="Username or Email" /></fieldset>
                                        <fieldset> <input id="showpassword" name="password" tabIndex={2} aria-required="true" type="password" placeholder="Password" required /></fieldset>
                                        <div className="forgot-pass-wrap">
                                            <label>
                                                <input type="checkbox" />
                                                <span className="btn-checkbox" />
                                                Remember me
                                            </label>
                                            <Link href="#">Forgot your password?</Link>
                                        </div>
                                        <button className="tf-button submit" type="submit">SIGN IN</button>
                                    </form>
                                    <div className="choose-sign">
                                        Do you have account? <Link href="#">Sign up for free</Link>
                                    </div>
                                    <div className="or"><span>or</span></div>
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