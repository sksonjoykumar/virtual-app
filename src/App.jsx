import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/hero-section/HeroSection";
import Features from "./components/features-section/Features";
import WorkFlow from "./components/work-flow/WorkFlow";
import Pricing from "./components/pricing/Pricing";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Features />
      <WorkFlow />
      <Pricing />
      <Testimonial />
      <Footer />
    </>
  );
}

export default App;
