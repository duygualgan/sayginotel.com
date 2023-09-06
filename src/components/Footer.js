import "./FooterStyles.css"
import logo from "../assets/images/logo2.png"

const Footer = () => {
    return(
        <div className="footer">
            <div className="top">
                <div >
                    <img alt="logo" src={logo}/>
                  
                </div>
                
            </div>

            <div className="bottom">
                <div>
                    <h4>Sayfalar</h4>
                    <a href="/">Anasayfa</a>
                    <a href="/about">Hakkımızda</a>
                    <a href="/service">Odalarımız</a>
                    <a href="/contact">İletişim</a>
                </div>
                
                <div>
                    <h4>İletişim Numaraları</h4>
                    <a href="/">Tel: 0 (262) 563 72 19</a>
                    <a href="/">Gsm: 0 (532) 400 49 00</a>
                </div>
                <div>
                    <h4>Adresler </h4>
                    <a href="/">Adres:Kerpe- Kumcağız</a>
                    <a href="/">E-mail: info@sayginbutikotel.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer 