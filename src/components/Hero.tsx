import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden min-h-[700px] flex items-center pt-14 md:pt-16">
      {/* Background with Parallax-like effect */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img
          src={heroBanner}
          alt="Elegant tailoring and fashion fabrics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >

            <h2 className="text-5xl md:text-7xl lg:text-9xl font-playfair font-bold text-foreground mb-6 leading-[1.1] md:leading-[0.9]">
              Miss Fashion<br className="md:hidden" />
              <span className="text-primary italic md:ml-4"> Hub</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-poppins text-foreground/80 leading-relaxed mb-10 max-w-xl"
          >
            Defining elegance through premium tailoring. We believe every person deserves a garment that fits not just their body, but their personality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => {
                const element = document.getElementById("services");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group relative bg-primary text-primary-foreground font-poppins font-semibold px-10 py-4 rounded-full shadow-2xl overflow-hidden active:scale-95 transition-transform"
            >
              <span className="relative z-10">Explore Our Services</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>

            <button
              onClick={() => {
                const element = document.getElementById("contact");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-background/50 backdrop-blur-md border border-border text-foreground font-poppins font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-background/80 transition-all active:scale-95"
            >
              Book Appointment
            </button>
          </motion.div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-[15%] w-32 h-32 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-[10%] w-48 h-48 bg-accent/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
