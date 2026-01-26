import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields before submitting.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    setFormData({ name: "", email: "", service: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-t from-background to-muted/10 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4"
            >
              Start Your Design Journey
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg font-poppins text-muted-foreground"
            >
              Ready for a transformation? Book a consultation or send us a query.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-xl shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-1">Call Us</h3>
                      <p className="text-sm text-muted-foreground font-poppins mb-2 text-balance">Direct line for immediate inquiries</p>
                      <a href="tel:+919346451494" className="text-primary font-bold font-poppins text-lg hover:underline">
                        +91 93464 51494
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-xl shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-1">Email Us</h3>
                      <p className="text-sm text-muted-foreground font-poppins mb-2 text-balance">Send your designs or requirements</p>
                      <a href="mailto:missstylehub16@gmail.com" className="text-accent font-bold font-poppins text-lg hover:underline transition-colors break-all">
                        missstylehub16@gmail.com
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-8 border-border/50 bg-card/50 backdrop-blur-xl shadow-soft hover:shadow-elegant transition-all duration-500">
                  <div className="flex gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-xl mb-1">Visit Workshop</h3>
                      <p className="text-sm text-muted-foreground font-poppins mb-2 text-balance">Experience the craft in person</p>
                      <p className="text-foreground font-medium font-poppins">
                        Ganjikunta colony road, Kadapa 516002
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="p-10 border-border/50 shadow-2xl rounded-3xl bg-card/80 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary">
                    <MessageSquare size={20} />
                  </div>
                  <h3 className="text-2xl font-playfair font-bold">Inquiry Form</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-semibold text-foreground">FullName</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Write your name"
                        className="h-12 rounded-xl bg-background border-border hover:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-poppins font-semibold text-foreground">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Write your email"
                        className="h-12 rounded-xl bg-background border-border hover:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-semibold text-foreground">Interest Area</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
                      <SelectTrigger className="h-12 rounded-xl bg-background border-border">
                        <SelectValue placeholder="What can we create for you?" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border backdrop-blur-xl">
                        <SelectItem value="mens-suit" className="font-poppins">Men's Premium Suit</SelectItem>
                        <SelectItem value="womens-dress" className="font-poppins">Women's Designer Dress</SelectItem>
                        <SelectItem value="blouse" className="font-poppins">Signature Blouse</SelectItem>
                        <SelectItem value="lehenga" className="font-poppins">Lehenga Choli</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-poppins font-semibold text-foreground">Brief Your Vision</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your message..."
                      rows={4}
                      className="rounded-xl bg-background border-border hover:border-primary/50 transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-poppins font-bold text-lg shadow-elegant hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                  >
                    Send Inquiry <Send size={18} />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
