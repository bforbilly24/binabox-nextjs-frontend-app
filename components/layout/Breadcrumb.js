
export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <section className="tf-page-title">
                <div className="tf-container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="page-title-heading">{breadcrumbTitle}</h2>
                            <ul className="breadcrumbs">
                                <li><a href="index.html">HOME</a></li>
                                <li>{breadcrumbTitle}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
