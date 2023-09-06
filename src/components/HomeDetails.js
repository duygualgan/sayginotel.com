import HomeDetailsData from "./HomeDetailsData";
import "./HomeDetailsStyle.css";
import homeDes from "../assets/images/slider0.jpeg";
import homeDes1 from "../assets/images/slider1.jpeg";
import homeDes2 from "../assets/images/slider2.jpeg";
import homeDes3 from "../assets/images/slider3.jpeg";

const HomeDetails = () => {
  return (
    <div className="destination">
      <h1>Saygın Butik Otel Hakkında</h1>      

      <HomeDetailsData
        className="first-des"
        heading="Saygın Butik Otel "
        text="	Saygın Butik Otel, Kerpe Kefken arasında Kumcağız caddesinde yer alıyor, deniz ve doğa ile iç içe bulunabileceğiniz ortamda dört mevsim konaklama imkânı sunuyor. Aile işletmesi olan otel, 14 standart oda ve iki süit daireden oluşuyor. Aileniz ile birlikte mutfaklı odaları da tercih edebilirsiniz. Saygın Butik Otelin balkonlu, klimalı, TV li odalarında konaklayanlar, arzu ederlerse otel bahçesinde veya restoranında ızgara balıklar, Kandıra'nın ünlü yoğurt ve peyniri, yörenin çileklerinden yapılma ev reçelleri ile damakta tat bırakacak köy kahvaltıları yapabiliyor, yemekler yiyebiliyorlar. 
        Mevsim ne olursa olsun, konforlu, manzaralı ve kısa zamanda ulaşılan Saygın Butik Otel'de, huzurlu, sakin tatil geçirenler, bol oksijenli, yosun ve çam kokulu tertemiz havada zindelik, geniş uzun kumsalda stresten kurtulup, şifa kazanıyorlar..."
        img1={homeDes1}
        img2={homeDes2}
      />

      <HomeDetailsData
        className="first-des-reverse"
        heading=" "
        text="Tatil ve dinlenme amacıyla bölgeye gelenler, başta Kandıra olmak üzere, Kerpe, Kartal Kayalıkları, Miço Limanı, Pembe Kayalar, Kefken, Kefken Adası, Cebeci, Akçakoca Anıtı gibi birçok yeri gezme imkânı bulabiliyorlar. Kumcağız ve çevresinde tekne gezisi, doğa yürüyüşü yapma, kumsalda yürüme, foto safariye çıkma, balık tutma, bisiklete binme, yöresel köy ürünlerinin yer aldığı pazar alış verişi gibi birçok aktiviteye katılma olanakları bulunuyor.
        İstanbul çıkışlı olanlar, kent içi trafiğine girmeden otoyoldan Kandıra sapağını kullanarak kolayca ulaşım imkânı nedeniyle hafta sonları ve en kısa tatil günlerinde bile Kerpe-Kumcağız-Kefken'i tercih ediyorlar."
        img1={homeDes}
        img2={homeDes3}
      />
    </div>
  );
};

export default HomeDetails;
