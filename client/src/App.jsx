import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import Footer from "./components/sections/Footer";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import ContactSection from "./components/sections/ContactSection";
import Header from "./layouts/Header";
import FeaturesSection from "./components/sections/FeaturesSection";
import PropertiesSection from "./components/sections/PropertiesSection";

const App = () => {
  return (
    <div className="overflow-x-hidden max-w-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PropertiesSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
