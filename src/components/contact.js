import "./contactStyle.css"
import ContactData from "./contactData";
// import gallery1 from "../assets/images/galeri5.jpeg"
// import gallery2 from "../assets/images/slider0.jpeg"
// import gallery3 from "../assets/images/slider2.jpeg"

function contact(){
    return(
        <div className="trip">
            <h1>İletişim ve Ulaşım Bilgilerimiz</h1>
           <div className="tripcard">
            <ContactData
            icon = "fa-sharp fa-solid fa-phone-volume"
            heading = "Telefon Numaralarımız"
            text= "GSM: 0 (532) 400 49 00"
            text2="TEL: 0 (262) 563 72 19"
            />
            <ContactData
            icon = "fa-solid fa-map-location-dot"
            heading = "Adres"
            text= "Kerpe- Kumcağız"
            />
            <ContactData
            icon = "fa-solid fa-envelopes-bulk"
            heading = "E-mail"
            text= "info@sayginbutikotel.com"
            />
            
           </div>
            
        </div>
    );
}

export default contact;