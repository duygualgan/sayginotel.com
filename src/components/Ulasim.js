import HomeDetailsData from "./HomeDetailsData";
import "./HomeDetailsStyle.css";
import homeDes from "../assets/images/slider0.jpeg";
import homeDes3 from "../assets/images/slider3.jpeg";

const HomeDetails = () => {
  return (
    <div className="destination">
      <h1>Saygın Butik Otel'e Ulaşım</h1>      

      <HomeDetailsData
        className="first-des"        
        text="İstanbul'dan özel araçla yola çıkanlar otoyolu tercih ederlerse, İzmit'i tünelleri geçip kent içine girmeden, arkadan dolaşarak Kandıra yol ayrımına gelecekler. Buradan geçtikten sonra Shell akaryakıt istasyonu üzerinden aynı konfor aynı güzellikle bu defa 3 şeritli yapılan Kandıra yoluyla tatlı meyili çıkıp hafif ve zevkli virajlar eşliğinde orman içinden geçerek Kandıra'ya ulaşacaklar.
        Kandıra merkezden 10 km sonra yine asfalt yine yemyeşil bu defa 2 şeritli yol sizi bu şirin tatil cennetine cetvel gibi dümdüz bir yolla gireceksiniz. Bu güzergah motosiklet sürücüleri içinde tozsuz topraksız temiz bir zeminde, Kerpe ve Kefken'e zevkli, manzaralı bir yol vaat ediyor. Kerpe'ye yaklaşırken sebze, meyva, yoğurt, peynir, tere, roka, kıvırcık, taze soğan, ıspanak, pazı, köy yumurtasının satıldığı tezgahlar, bahçe dekorları ve çiçek satıcıları uğrak noktalarınız olabilir. Kerpe, İstanbul'dan çıkanlar için 1 saat 50 dakikada, İzmit'ten 35 dakikada ulaşabilecekleri mesafede bulunuyor.Kefken yolu üzerinden devam ederken Kurtyeri köprüsüne gelir gelmez sola sapın ve saygın apart tabelelarını takip edin....İyi tatiller...... "
        img1={homeDes}
        img2={homeDes3}
      />

    </div>
  );
};

export default HomeDetails;
