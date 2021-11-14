import Header from "../components/HomePage/Header";
import LandScape from "../components/HomePage/LandScape";
import Footer from "../components/HomePage/footer";
import TripInfoContent from "../components/TripInfoPage/tripInfoContent";
import TripInfoMenu from "../components/TripInfoPage/tripInfoMenu";

function TripInfoPage() {
  return (
    <div>
      <Header />
      <TripInfoMenu />
      <TripInfoContent />
      <LandScape />
      <LandScape />
      <Footer />
    </div>
  );
}

export default TripInfoPage;
