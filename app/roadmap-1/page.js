
import Layout from "@/components/layout/Layout"
import RoadMapThumbSlider from "@/components/slider/RoadMapThumbSlider"
export default function Roadmap1() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="ROAD MAP">
                <section className=" section-roadmap section-bg-1">
                    <div className="tf-container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="tf-roadmap-style-thumb">
                                    <RoadMapThumbSlider />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}