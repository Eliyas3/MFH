import { useState, useEffect } from "react";
import { Menu, X, Scissors, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Designer", id: "services" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-card/80 backdrop-blur-lg border-b border-border shadow-lg py-3"
        : "bg-transparent py-5"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-elegant group-hover:rotate-12 transition-transform">
              <Scissors size={24} />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-playfair font-bold text-foreground leading-none">
                Miss Fashion <span className="text-primary italic">Hub</span>
              </h1>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-poppins mt-1">
                Your Style Our Stitches
              </p></div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 font-poppins font-medium">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="px-5 py-2 text-sm text-foreground hover:text-primary transition-all relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all group-hover:w-1/2 group-hover:left-1/4" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold shadow-elegant hover:scale-105 transition-all"
            >
              Book Now
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center bg-card rounded-lg border border-border shadow-sm text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 overflow-hidden bg-card/95 backdrop-blur-xl rounded-2xl border border-border shadow-2xl font-poppins"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="w-full py-3 px-4 text-left text-foreground hover:bg-primary/10 hover:text-primary rounded-xl transition-all flex items-center justify-between group"
                  >
                    {link.name}
                    <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
