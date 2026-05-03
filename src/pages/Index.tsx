import Navbar from "@/components/dc/Navbar";
import Hero from "@/components/dc/Hero";
import Services from "@/components/dc/Services";
import OnlineControl from "@/components/dc/OnlineControl";
import Quiz from "@/components/dc/Quiz";
import Expertise from "@/components/dc/Expertise";
import Portfolio from "@/components/dc/Portfolio";
import Trust from "@/components/dc/Trust";
import FAQ from "@/components/dc/FAQ";
import Footer from "@/components/dc/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Services />
      <OnlineControl />
      <Quiz />
      <Expertise />
      <Portfolio />
      <Trust />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
