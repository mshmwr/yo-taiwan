import Header from "../components/Common/Header";
import LandScape from "../components/HomePage/LandScape";
import Footer from "../components/Common/footer";
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
