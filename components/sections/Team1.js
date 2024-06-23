
import TeamSlider from "../slider/TeamSlider"

export default function Team1() {
    return (
        <>

            <section className="tf-section team">
                <div className="tf-container">
                    <div className="row justify-content-center">
                        <div className="col-md-12 ">
                            <div className="tf-heading mb60 wow fadeInUp">
                                <h2 className="heading">OUR TEAM</h2>
                            </div>
                        </div>
                        <div className="col-md-12 wow fadeInUp">
                            <TeamSlider />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
