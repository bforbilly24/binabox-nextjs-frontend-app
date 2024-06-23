import Accordion1 from "../elements/Accordion1"
import Accordion2 from "../elements/Accordion2"


export default function Faq1() {
    return (
        <>

            <section className="tf-faq tf-section">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">FAQS</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Accordion1 />
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <Accordion2 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
