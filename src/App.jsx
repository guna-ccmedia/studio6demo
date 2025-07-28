import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurProducts from "./components/OurProducts";
import HowItWorks from "./components/HowItWorks";
import OfferPackages from "./components/OfferPackages";
import WhatWeDo from "./components/WhatWeDo";
import Testimonials from "./components/Testimonials";
import DesignsHero from "./components/DesignsHero";
import Footer from "./components/Footer";
import JoinSubscribers from "./components/JoinSubscribers";
import DesignSlider from "./components/DesignSlider";
import FixedApp from "./components/FixedApp";
import AboutUs from "./components/AboutUs";
import JoinUs from "./components/JoinUs";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <HowItWorks />
      <OurProducts />
      <OfferPackages />
      <WhatWeDo />
      <AboutUs />
      <DesignSlider />
      {/* <JoinSubscribers /> */}
      <Testimonials />
      <DesignsHero />
      <FixedApp />
      {/* <JoinUs /> */}
      <Footer />
    </>
  );
}

export default App;
