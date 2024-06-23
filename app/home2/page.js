
import Layout from "@/components/layout/Layout"

import About2 from "@/components/sections/About2"
import Collection2 from "@/components/sections/Collection2"
import Faq2 from "@/components/sections/Faq2"
import Roadmap2 from "@/components/sections/Roadmap2"
import Slider2 from "@/components/sections/Slider2"
import Team2 from "@/components/sections/Team2"
import Work2 from "@/components/sections/Work2"
export default function Home2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2}>
                <Slider2 />
                <Work2 />
                <About2 />
                <Collection2 />
                <Roadmap2 />
                <Team2 />
                <Faq2 />
            </Layout>
        </>
    )
}