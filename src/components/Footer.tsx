import { Instagram, Facebook, Scissors, MapPin, Phone, Mail, Award } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <Scissors size={24} />
              </div>
              <h2 className="text-2xl font-playfair font-bold text-foreground">
                Miss Fashion <span className="text-primary italic">Hub</span>
              </h2>
            </div>
            <p className="text-muted-foreground font-poppins text-sm leading-relaxed mb-6">
              Defining elegance through premium tailoring. We believe every person deserves a garment that fits not just their body, but their personality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 font-poppins text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home Experience</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Style Designer</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Book Consultation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-playfair font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 font-poppins text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>Ganjikunta colony road,<br />Kadapa 516002</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 73375 03586</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>missstylehub16@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <Award className="text-primary mb-4" size={32} />
              <h3 className="text-lg font-playfair font-bold mb-2">Quality Guaranteed</h3>
              <p className="text-xs font-poppins text-muted-foreground leading-relaxed">
                We take pride in our precision. Every garment undergoes a 12-point quality check before delivery.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-poppins text-muted-foreground">
            © {new Date().getFullYear()} Miss Fashion Hub. Crafted with passion.
          </p>
          <div className="flex gap-6 text-xs font-poppins text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
