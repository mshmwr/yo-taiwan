import Header from "../../components/Header";
import Hero from "./Hero";
import SpotsCarousel from "../../components/SpotsCarousel";
import Bus from "../../components/Bus";
import Footer from "../../components/Footer";
import { getLandscape, getLandscapeAll } from "../../apis/landscapeApi";

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <SpotsCarousel
        title="想去哪玩？"
        page="tripInfoPage"
        fetchSpot={getLandscape}
        fetchSpotAll={getLandscapeAll}
      />
      <Bus />
      <Footer />
    </>
  );
}

export default HomePage;
