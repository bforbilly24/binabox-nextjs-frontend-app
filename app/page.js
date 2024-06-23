import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Collection1 from "@/components/sections/Collection1"
import Faq1 from "@/components/sections/Faq1"
import Logo from "@/components/sections/Logo"
import Partner1 from "@/components/sections/Partner1"
import Roadmap3 from "@/components/sections/Roadmap3"
import Slider1 from "@/components/sections/Slider1"
import Team1 from "@/components/sections/Team1"
import Work1 from "@/components/sections/Work1"
export default function Home() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Slider1 />
                <Logo />
                <About1 />
                <Collection1 />
                <Roadmap3 />
                <Work1 />
                <Team1 />
                <Faq1 />
                <Partner1 />
            </Layout>
        </>
    )
}