
import RoadMapThumbSlider from "../slider/RoadMapThumbSlider"

export default function Roadmap() {
    return (
        <>

            <section className="tf-roadmap-ss section-bg-1">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title-ss wow fadeInUp">
                                <h3>ROAD MAP</h3>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tf-roadmap-style-thumb wow fadeInUp">
                                <RoadMapThumbSlider />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
