
import Accordion1 from "@/components/elements/Accordion1"
import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
export default function Faq1() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="HOW CAN WE HELP?">
                <section className="tf-faq ">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <Accordion1 />
                            </div>
                            <div className="col-lg-6 col-md-12">
                                <Accordion2 />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}