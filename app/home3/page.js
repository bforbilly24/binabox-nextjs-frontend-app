
import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Collection3 from "@/components/sections/Collection3"
import Faq3 from "@/components/sections/Faq3"
import Partner2 from "@/components/sections/Partner2"
import Roadmap from "@/components/sections/Roadmap"
import Slider3 from "@/components/sections/Slider3"
import Team3 from "@/components/sections/Team3"
import Work3 from "@/components/sections/Work3"
export default function Home3() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2}>
                <Slider3 />
                <Collection3 />
                <About3 />
                <Work3 />
                <Roadmap />
                <Team3 />
                <Partner2 />
                <Faq3 />
            </Layout>
        </>
    )
}