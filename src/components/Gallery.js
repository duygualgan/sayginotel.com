import "./GalleryStyles.css"
import GalleryData from "./GalleryData"
import gallery1 from "../assets/images/slider1.jpeg"
import gallery2 from "../assets/images/slider0.jpeg"
import gallery3 from "../assets/images/slider2.jpeg"
import gallery4 from "../assets/images/galeri5.jpeg"
import gallery5 from "../assets/images/galeri2.jpeg"
import gallery6 from "../assets/images/slider3.jpeg"

function Gallery(){
    return(
        <div className="trip">
            <h1>Fotoğraf Galerimiz</h1>
            {/* <p>ahjcb shdcsbdc wwhgedcf sdhgwsdhc ghde</p> */}

            <div className="tripcard">
                <GalleryData
                image={gallery1}
                />
                 <GalleryData
                image={gallery2}
                />
                 <GalleryData
                image={gallery3}
                />
            </div>
            <div className="tripcard">
                <GalleryData
                image={gallery4}
                />
                 <GalleryData
                image={gallery5}
                />
                 <GalleryData
                image={gallery6}
                />
            </div>
        </div>
    );
}

export default Gallery;