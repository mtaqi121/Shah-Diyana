import { motion } from "framer-motion";

const MENU_DATA = [
  {
    category: "Starters",
    items: [
      { name: "Hot & Sour Soup", desc: "Classic rich broth with chicken and vegetables", price: "Rs 450" },
      { name: "Crispy Spring Rolls", desc: "Hand-rolled with vegetables and served with sweet chili", price: "Rs 380" },
      { name: "Chicken Tikka Skewers", desc: "Charcoal-grilled tender chicken marinated in spices", price: "Rs 650" },
      { name: "Dynamite Prawns", desc: "Crispy fried prawns tossed in spicy mayo", price: "Rs 850" },
    ]
  },
  {
    category: "Main Course",
    items: [
      { name: "Shah Special Biryani", desc: "Aromatic basmati rice cooked with tender meat and saffron", price: "Rs 800" },
      { name: "Mutton Qorma", desc: "Rich, slow-cooked meat stew with traditional spices", price: "Rs 1200" },
      { name: "Chicken Karahi", desc: "Wok-cooked chicken with tomatoes, green chilies and ginger", price: "Rs 950" },
      { name: "Palak Paneer", desc: "Creamy spinach cooked with fresh cottage cheese", price: "Rs 600" },
    ]
  },
  {
    category: "Desserts",
    items: [
      { name: "Shahi Kheer", desc: "Traditional rice pudding garnished with almonds and pistachios", price: "Rs 300" },
      { name: "Gulab Jamun", desc: "Warm milk dumplings soaked in rose-scented syrup", price: "Rs 250" },
      { name: "Gajar Ka Halwa", desc: "Rich carrot dessert slow-cooked in milk and ghee", price: "Rs 350" },
      { name: "Ras Malai", desc: "Soft cottage cheese patties in thickened sweetened milk", price: "Rs 400" },
    ]
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 bg-secondary/50 border-t border-b border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4 mb-4 justify-center"
          >
            <div className="h-[1px] w-8 bg-primary"></div>
            <span className="text-primary tracking-[0.2em] uppercase text-sm font-semibold">Discover Our</span>
            <div className="h-[1px] w-8 bg-primary"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            Culinary Offerings
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
          {MENU_DATA.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              className="bg-background rounded-xl p-8 border border-white/5 shadow-xl hover:border-primary/30 transition-colors duration-300"
            >
              <h3 className="font-display text-2xl text-primary font-bold mb-8 text-center border-b border-white/10 pb-4">
                {section.category}
              </h3>
              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li key={item.name} className="group cursor-pointer">
                    <div className="flex items-end justify-between mb-1">
                      <h4 className="text-white font-medium font-display tracking-wide group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1 opacity-50"></div>
                      <span className="text-primary font-semibold shrink-0">{item.price}</span>
                    </div>
                    <p className="text-sm text-white/50 font-light pr-12">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/10 border border-primary/20 rounded-xl p-8 text-center max-w-2xl mx-auto backdrop-blur-sm"
        >
          <h4 className="font-display text-2xl text-white mb-2">Planning a Large Event?</h4>
          <p className="text-white/70 mb-4">We offer customized catering packages tailored to your specific needs and guest counts.</p>
          <a href="#contact" className="inline-block text-primary font-semibold uppercase tracking-wider hover:text-white transition-colors border-b border-primary hover:border-white pb-1">
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
