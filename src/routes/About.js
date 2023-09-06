import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import homeDes from "../assets/images/slider0.jpeg";
import Footer from "../components/Footer";
import HomeDetails from "../components/HomeDetails"


function About () {
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        title="Hakkında"
        image={homeDes}
        />  
        <HomeDetails/>
        <Footer/>
        </>
    )
}

export default About;