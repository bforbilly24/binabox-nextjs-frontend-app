import Accordion1 from "../elements/Accordion1"


export default function Faq2() {
    return (
        <>

            <section className="tf-faq tf-section">
                <div className="tf-container">
                    <div className="col-md-12 ">
                        <div className="tf-heading mb60 wow fadeInUp">
                            <h2 className="heading">FAQS</h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8 wow fadeInUp">
                            <Accordion1 />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
