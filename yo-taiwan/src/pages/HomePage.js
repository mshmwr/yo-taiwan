import Header from "../components/HomePage/Header";
import Hero from "../components/HomePage/Hero";
import LandScape from "../components/HomePage/LandScape";
import Bus from "../components/HomePage/Bus";
import BusRoute from "../components/HomePage/BusRoute";
import Footer from "../components/HomePage/footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <LandScape />
      <Bus />
      <BusRoute />
      <Footer />
    </div>
  );
}

export default HomePage;
