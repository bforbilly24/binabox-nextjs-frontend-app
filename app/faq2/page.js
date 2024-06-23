
import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
export default function Faq2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="HOW CAN WE HELP?">
                <section className="tf-faq ">
                    <div className="tf-container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <Accordion1 />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}