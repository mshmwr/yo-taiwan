import React, { useContext } from "react";
import Header from "@components/Header";
import Hero from "./Hero";
import SpotsCarousel from "@components/SpotsCarousel";
import Bus from "@components/Bus";
import Footer from "@components/Footer";
import { LandscapesContext } from "@contexts";

function HomePage() {
  const landscapes = useContext(LandscapesContext);
  return (
    <>
      <Header />
      <Hero />
      <SpotsCarousel
        title="想去哪玩？"
        spotsData={landscapes}
        pathnameConfig={{ page: "tripInfoPage", spotID: "ScenicSpotID" }}
      />
      <Bus />
      <Footer />
    </>
  );
}

export default HomePage;
