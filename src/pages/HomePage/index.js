import Header from "../../components/Header";
import Hero from "./Hero";
import LandScape from "../../components/LandScape";
import Bus from "../../components/Bus";
import Footer from "../../components/Footer";

export default function HomePage() {
  console.log("HI我是同事，我改了一些東西");
  console.log('HomePage');

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
