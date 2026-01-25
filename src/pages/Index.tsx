import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-poppins">
      <Header />
      <main>
        <Hero />
        <Services />
        <div id="pricing" className="h-0" /> {/* Anchor for pricing navigation */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
