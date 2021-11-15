import Header from "../components/Common/Header";
import Hero from "../components/HomePage/Hero";
import LandScape from "../components/HomePage/LandScape";
import Bus from "../components/HomePage/Bus";
import BusRoute from "../components/HomePage/BusRoute";
import Footer from "../components/Common/footer";
import "../css/routeMap.css";

function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <LandScape />
      <Bus />
      <Footer />
    </div>
  );
}

export default HomePage;
