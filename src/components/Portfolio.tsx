import { motion } from "framer-motion";
import bridalImg from "@/assets/bridal.png";
import suitImg from "@/assets/suit.png";
import kurtaImg from "@/assets/kurta.png";

const projects = [
    {
        title: "Bridal Elegance",
        category: "Special Occasion",
        image: bridalImg,
        description: "Intricately embroidered lehenga with premium silk and handcrafted details."
    },
    {
        title: "The Bespoke Suit",
        category: "Men's Formal",
        image: suitImg,
        description: "Classic charcoal grey three-piece suit, tailored for a perfect silhouette."
    },
    {
        title: "Modern Tradition",
        category: "Ethnic Wear",
        image: kurtaImg,
        description: "Contemporary kurta with traditional threadwork in soft pastel tones."
    }
];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-4"
                        >
                            Our Masterpieces
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg font-poppins text-muted-foreground"
                        >
                            Each garment is a story of craft, patience, and style. Explore our recent bespoke creations.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <button className="text-primary font-poppins font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                            View All Creations <span>&rarr;</span>
                        </button>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-6 shadow-elegant">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                                    <span className="text-sm font-poppins font-medium uppercase tracking-widest mb-2 text-primary">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-playfair font-bold mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm font-poppins text-white/80 line-clamp-2">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center group-hover:translate-x-2 transition-transform duration-300">
                                <div>
                                    <h3 className="text-xl font-playfair font-bold text-foreground">{project.title}</h3>
                                    <p className="text-sm font-poppins text-muted-foreground">{project.category}</p>
                                </div>
                                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <span className="text-lg">&rarr;</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
