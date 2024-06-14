import AboutSection from "./components/sections/about/AboutSection";
import ContactUs from "./components/sections/cotnact/ContactUs";
import Customers from "./components/sections/Customers/Customers";
import FaqSection from "./components/sections/faq/FaqSection";
import FeturesSection from "./components/sections/features/FeturesSection";
import HeroSection from "./components/sections/hero/HeroSection";
import ServicesSection from "./components/sections/services/ServicesSection";
import Testimonials from "./components/sections/Testimonials/Testimonials";
import ParalaxLine from "./components/ui/paralaxLine/ParalaxLine";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ParalaxLine />
      <ServicesSection />
      <FeturesSection />
      <Testimonials />
      <ContactUs />
      <Customers />
      <FaqSection />
    </main>
  );
}
