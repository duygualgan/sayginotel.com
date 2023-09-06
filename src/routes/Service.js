import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import about from "../assets/images/home2.jpeg"
import Footer from "../components/Footer";
import Room from "../components/Room";


function Service () {
    return(
        <>
        <Navbar/>
        <Hero
        cName = "hero-mid"
        title="Odalarımız"
        image={about}
        /> 
        <Room/>
        <Footer/>
        </>
    )
}

export default Service;