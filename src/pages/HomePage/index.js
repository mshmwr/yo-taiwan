import Header from "../../components/Header";
import Hero from "./Hero";
import SpotsCarousel from "../../components/SpotsCarousel";
import Bus from "../../components/Bus";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <SpotsCarousel />
      <Bus />
      <Footer />
    </div>
  );
}

export default HomePage;
