import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen site-bg">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Portfolio />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
