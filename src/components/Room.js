import "./GalleryStyles.css"
import GalleryData from "./GalleryData"
import room1 from "../assets/images/room1.jpeg"
import room2 from "../assets/images/room2.jpeg"
import room3 from "../assets/images/room3.jpeg"
import room4 from "../assets/images/room4.jpeg"
import room5 from "../assets/images/room5.jpeg"
import room6 from "../assets/images/room6.jpeg"
import room7 from "../assets/images/room7.jpeg"
import room8 from "../assets/images/room8.jpeg"
import room9 from "../assets/images/room9.jpeg"
import room10 from "../assets/images/room10.jpeg"
import room11 from "../assets/images/room11.jpeg"
import room12 from "../assets/images/room12.jpeg"


function Gallery(){
    return(
        <div className="trip">
            <h1>ODALARIMIZ</h1>

            <div className="tripcard">
                <GalleryData
                image={room1}
                />
                 <GalleryData
                image={room2}
                />
                 <GalleryData
                image={room3}
                />
            </div>
            <div className="tripcard">
                <GalleryData
                image={room4}
                />
                 <GalleryData
                image={room5}
                />
                 <GalleryData
                image={room6}
                />
            </div>
            <div className="tripcard">
                <GalleryData
                image={room7}
                />
                 <GalleryData
                image={room8}
                />
                 <GalleryData
                image={room9}
                />
            </div>
            <div className="tripcard">
                <GalleryData
                image={room10}
                />
                 <GalleryData
                image={room11}
                />
                 <GalleryData
                image={room12}
                />
            </div>
        </div>
    );
}

export default Gallery;