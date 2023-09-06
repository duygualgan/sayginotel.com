import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import home1 from "../assets/images/home1.jpeg"
import HomeDetails from "../components/HomeDetails";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

function Home () {
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero"
        title="Saygın Butik Otel"
        text=""
        image={home1}
        />
        <HomeDetails/>
        <Gallery/>
        <Footer/>
        </>
    )
}

export default Home;