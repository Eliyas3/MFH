import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Scissors, Ruler, Sparkles, Plus, Minus,
  ChevronRight, Info, CheckCircle2
} from "lucide-react";
import cottonImg from "@/assets/cotton.png";
import silkImg from "@/assets/silk.png";
import linenImg from "@/assets/linen.png";

const services = [
  { id: "womens-dress", name: "Women's Dress", price: 1200, icon: "👗" },
  { id: "blouse", name: "Blouse", price: 600, icon: "👚" },
  { id: "lehenga", name: "Lehenga", price: 2000, icon: "✨" },
];

const fabrics = [
  { id: "cotton", name: "Premium Cotton", image: cottonImg, description: "Breathable & Comfortable" },
  { id: "silk", name: "Pure Silk", image: silkImg, description: "Luxury & Shine" },
  { id: "linen", name: "Natural Linen", image: linenImg, description: "Earthy & Durable" },
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "Custom"];

const Services = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedFabric, setSelectedFabric] = useState<string>("");

  const [measurements, setMeasurements] = useState({
    sleeveLength: 10,
    bodyLength: 24,
    shoulderWidth: 15,
    chest: 36,
    waist: 32,
    hip: 38,
    neckSize: 14,
  });

  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  const { toast } = useToast();

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedFabricData = fabrics.find(f => f.id === selectedFabric);

  const handleProceed = async () => {
    setIsSubmitting(true);

    const FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdWdV71WZnO631ioUjLNaAXDPXGtCezOUFHPIA0tSnPp8bTvg/formResponse";

    // Construct Form Data
    const formData = new FormData();
    // Mapping to your specific Google Form Entry IDs
    // Temporarily combining details into the name field until more fields are added to the form
    const combinedNameDetails = `${contactInfo.name} - Service: ${selectedServiceData?.name || 'N/A'}, Fabric: ${selectedFabricData?.name || 'N/A'}, Measurements: ${Object.entries(measurements).map(([key, value]) => `${key}: ${value}"`).join(', ')}`;
    formData.append("entry.644781787", combinedNameDetails); // Full Name (now includes service, fabric, and measurements)
    formData.append("entry.1525092642", contactInfo.phone); // Contact Number
    formData.append("entry.365449449", selectedServiceData?.name || ""); // Garment Type
    formData.append("entry.1404878775", "Miss Fashion Hub"); // Fabric Provided By (Selected via Designer)

    try {
      await fetch(FORM_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData
      });

      setIsSubmitting(false);
      setBookingComplete(true);
      toast({
        title: "Booking Successful!",
        description: "Your request has been sent to our Google Form.",
      });
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
      toast({
        title: "Submission Error",
        description: "There was a problem sending your booking. Please try again.",
        variant: "destructive"
      });
    }
  };

  const updateMeasurement = (field: keyof typeof measurements, increment: boolean) => {
    setMeasurements(prev => ({
      ...prev,
      [field]: parseFloat(Math.max(0, prev[field] + (increment ? 0.5 : -0.5)).toFixed(1))
    }));
  };

  const MeasurementInput = ({ label, field, min, max }: { label: string; field: keyof typeof measurements; min: number; max: number }) => (
    <div className="flex flex-col gap-2 p-4 bg-background rounded-xl border border-border/50 hover:border-primary/30 transition-colors">
      <div className="flex justify-between items-center">
        <span className="text-sm font-poppins font-semibold text-foreground">{label}</span>
        <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">{field}</span>
      </div>
      <div className="flex items-center gap-4">
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="h-10 w-10 rounded-full"
          onClick={() => updateMeasurement(field, false)}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <div className="flex-1 text-center font-playfair font-bold text-xl text-primary">
          {measurements[field]}"
        </div>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="h-10 w-10 rounded-full"
          onClick={() => updateMeasurement(field, true)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step="0.5"
        value={measurements[field]}
        onChange={(e) => setMeasurements(prev => ({ ...prev, [field]: parseFloat(e.target.value) }))}
        className="w-full accent-primary h-1.5 rounded-lg appearance-none bg-muted cursor-pointer"
      />
    </div>
  );

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6"
            >
              The Premium Experience
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-4 text-sm font-poppins font-medium text-muted-foreground"
            >
              <div className={`flex items-center gap-2 ${step >= 1 ? "text-primary font-bold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 1 ? "bg-primary text-white border-primary" : "border-muted-foreground"}`}>1</span>
                Style
              </div>
              <div className="w-8 h-px bg-border" />
              <div className={`flex items-center gap-2 ${step >= 2 ? "text-primary font-bold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 2 ? "bg-primary text-white border-primary" : "border-muted-foreground"}`}>2</span>
                Fabric
              </div>
              <div className="w-8 h-px bg-border" />
              <div className={`flex items-center gap-2 ${step >= 3 ? "text-primary font-bold" : ""}`}>
                <span className={`w-6 h-6 rounded-full flex items-center justify-center border ${step >= 3 ? "bg-primary text-white border-primary" : "border-muted-foreground"}`}>3</span>
                Fit
              </div>
            </motion.div>
          </div>

          <Card className="p-1 shadow-2xl rounded-3xl border-border/50 bg-card/50 backdrop-blur-xl overflow-hidden min-h-[500px] flex flex-col">
            <div className="flex-1 p-6 md:p-10">
              <AnimatePresence mode="wait">
                {bookingComplete ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-playfair font-bold mb-4">Request Received!</h3>
                    <p className="text-muted-foreground font-poppins max-w-md mb-8">
                      Your custom design for a <strong>{selectedServiceData?.name}</strong> in <strong>{selectedFabricData?.name}</strong> has been sent to our master tailors. We will contact you shortly for a final consultation.
                    </p>
                    <Button
                      onClick={() => {
                        setBookingComplete(false);
                        setStep(1);
                        setSelectedService("");
                        setSelectedFabric("");
                      }}
                      variant="outline"
                      className="rounded-xl px-8"
                    >
                      Design Another
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                      >
                        <div className="col-span-full mb-4">
                          <h3 className="text-2xl font-playfair font-semibold">Choose Your Style</h3>
                          <p className="text-muted-foreground font-poppins text-sm">Choose the foundation of your creation.</p>
                        </div>
                        {services.map((service) => (
                          <div
                            key={service.id}
                            onClick={() => {
                              setSelectedService(service.id);
                              // Set sensible defaults for each service
                              if (service.id === 'blouse') {
                                setMeasurements({
                                  sleeveLength: 10, bodyLength: 15, shoulderWidth: 14,
                                  chest: 34, waist: 28, hip: 36, neckSize: 14
                                });
                              } else if (service.id === 'lehenga') {
                                setMeasurements({
                                  sleeveLength: 10, bodyLength: 15, shoulderWidth: 14,
                                  chest: 34, waist: 30, hip: 40, neckSize: 14
                                });
                              } else { // womens-dress
                                setMeasurements({
                                  sleeveLength: 15, bodyLength: 45, shoulderWidth: 14,
                                  chest: 34, waist: 30, hip: 38, neckSize: 14
                                });
                              }
                              setStep(2);
                            }}
                            className={`group cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${selectedService === service.id
                              ? "bg-primary text-primary-foreground border-primary shadow-lg scale-105"
                              : "bg-background hover:bg-muted/50 border-border"
                              }`}
                          >
                            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                            <h4 className="text-xl font-playfair font-bold mb-1">{service.name}</h4>
                            <p className={`text-sm font-poppins ${selectedService === service.id ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                              Starting at ₹{service.price}
                            </p>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6"
                      >
                        <div className="col-span-full mb-4 flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-playfair font-semibold">Choose Your Fabric</h3>
                            <p className="text-muted-foreground font-poppins text-sm">Texture and feel defined by premium choices.</p>
                          </div>
                          <Button variant="ghost" onClick={() => setStep(1)} className="rounded-full">&larr; Back</Button>
                        </div>
                        {fabrics.map((fabric) => (
                          <div
                            key={fabric.id}
                            onClick={() => {
                              setSelectedFabric(fabric.id);
                              setStep(3);
                            }}
                            className={`group cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 ${selectedFabric === fabric.id
                              ? "border-primary shadow-lg ring-2 ring-primary/20 scale-[1.02]"
                              : "border-border"
                              }`}
                          >
                            <div className="h-40 relative overflow-hidden">
                              <img src={fabric.image} alt={fabric.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                              {selectedFabric === fabric.id && (
                                <div className="absolute top-2 right-2 bg-primary text-white p-1.5 rounded-full shadow-lg">
                                  <CheckCircle2 size={16} />
                                </div>
                              )}
                            </div>
                            <div className="p-4 bg-background">
                              <h4 className="text-lg font-playfair font-bold">{fabric.name}</h4>
                              <p className="text-xs font-poppins text-muted-foreground">{fabric.description}</p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                      >
                        <div className="mb-8 flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-playfair font-semibold">Perfect Fit</h3>
                            <p className="text-muted-foreground font-poppins text-sm">Tailoring with precision to your dimensions.</p>
                          </div>
                          <Button variant="ghost" onClick={() => setStep(2)} className="rounded-full">&larr; Back</Button>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-4">
                          {selectedService === "blouse" && (
                            <>
                              <MeasurementInput label="Sleeve Length" field="sleeveLength" min={2} max={25} />
                              <MeasurementInput label="Blouse Length" field="bodyLength" min={12} max={22} />
                              <MeasurementInput label="Shoulder Width" field="shoulderWidth" min={10} max={22} />
                              <MeasurementInput label="Chest/Bust" field="chest" min={28} max={50} />
                              <MeasurementInput label="Waist" field="waist" min={24} max={48} />
                            </>
                          )}
                          {selectedService === "lehenga" && (
                            <>
                              <MeasurementInput label="Choli Sleeve" field="sleeveLength" min={2} max={25} />
                              <MeasurementInput label="Choli Length" field="bodyLength" min={12} max={22} />
                              <MeasurementInput label="Skirt Waist" field="waist" min={24} max={52} />
                              <MeasurementInput label="Skirt Length" field="hip" min={30} max={50} />
                              <MeasurementInput label="Chest/Bust" field="chest" min={28} max={50} />
                              <MeasurementInput label="Shoulder Width" field="shoulderWidth" min={10} max={22} />
                            </>
                          )}
                          {selectedService === "womens-dress" && (
                            <>
                              <MeasurementInput label="Sleeve Length" field="sleeveLength" min={5} max={35} />
                              <MeasurementInput label="Dress Length" field="bodyLength" min={30} max={65} />
                              <MeasurementInput label="Shoulder Width" field="shoulderWidth" min={10} max={25} />
                              <MeasurementInput label="Chest/Bust" field="chest" min={28} max={56} />
                              <MeasurementInput label="Waist" field="waist" min={24} max={52} />
                              <MeasurementInput label="Hip" field="hip" min={30} max={65} />
                            </>
                          )}
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                          <div className="space-y-2">
                            <label className="text-sm font-poppins font-semibold ml-1">Your Name</label>
                            <input
                              type="text"
                              placeholder="Write your name"
                              value={contactInfo.name}
                              onChange={(e) => setContactInfo(prev => ({ ...prev, name: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-poppins font-semibold ml-1">Phone Number</label>
                            <input
                              type="tel"
                              placeholder="Write your phone number"
                              value={contactInfo.phone}
                              onChange={(e) => setContactInfo(prev => ({ ...prev, phone: e.target.value }))}
                              className="w-full px-4 py-3 rounded-xl bg-background border border-border/50 focus:border-primary/50 focus:ring-2 focus:ring-primary/10 transition-all outline-none"
                            />
                          </div>
                        </div>

                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col md:flex-row justify-between items-center gap-6">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-3xl shadow-inner">
                              {selectedServiceData?.icon}
                            </div>
                            <div>
                              <p className="text-sm font-poppins font-medium text-muted-foreground">Selection Summary</p>
                              <h4 className="text-xl font-playfair font-bold text-foreground">
                                {selectedServiceData?.name} • {selectedFabricData?.name}
                              </h4>
                            </div>
                          </div>
                          <div className="text-center md:text-right">
                            <p className="text-sm font-poppins text-muted-foreground mb-1">Estimated Cost</p>
                            <p className="text-3xl font-playfair font-extrabold text-primary">₹{selectedServiceData?.price}</p>
                          </div>
                          <Button
                            disabled={isSubmitting}
                            onClick={handleProceed}
                            className="w-full md:w-auto px-10 py-7 rounded-2xl font-poppins font-bold text-lg shadow-elegant hover:scale-[1.02] active:scale-[0.98] transition-all bg-primary hover:bg-primary/90 text-white"
                          >
                            {isSubmitting ? "Processing..." : "Proceed to Book"}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}
              </AnimatePresence>
            </div>
          </Card>

          <div className="mt-20 grid md:grid-cols-3 gap-10">
            <motion.div
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Scissors size={28} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Master Tailors</h3>
              <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                Our artisans bring decades of experience in traditional techniques and modern garment construction.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                <Ruler size={28} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Laser Precision</h3>
              <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                Every measurement is triple-verified. We offer a 100% fit guarantee or free alterations within 7 days.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="group p-8 rounded-3xl bg-card border border-border/50 shadow-soft hover:shadow-elegant transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-playfair font-bold mb-3">Premium Design</h3>
              <p className="text-muted-foreground font-poppins text-sm leading-relaxed">
                Consult with our stylists to customize every detail—from collars and cuffs to linings and buttons.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
