import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import about from "../assets/images/slider4.jpeg"
import Footer from "../components/Footer";
import Sontact from "../components/contact";
import Ulasim from "../components/Ulasim"


function Contact () {
    return(
        <>
       <Navbar/>
        <Hero
        cName = "hero-mid"
        title="İletişim"
        image={about}
        /> 
        <Sontact/>
        <Ulasim/>
        <Footer/>
        </>
    )
}

export default Contact;