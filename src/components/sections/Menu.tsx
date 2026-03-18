import { motion } from "framer-motion";

const MENU_DATA = [
  {
    category: "Starters",
    items: [
      { name: "Chicken Wonton", desc: "Crispy fried wontons filled with flavored chicken" },
      { name: "Mint Rolls", desc: "Fresh mint rolls served with a tangy dip" },
      { name: "Chicken Spring Rolls", desc: "Crispy rolls filled with seasoned chicken and veggies" },
      { name: "Arabian Cheese Puff", desc: "Savory puff pastries filled with cheese" },
      { name: "Mini Sandwich", desc: "Assorted mini sandwiches with fresh fillings" },
      { name: "Chicken Mini Samosa", desc: "Crispy mini samosas stuffed with spiced chicken" },
      { name: "Vegetable Samosa", desc: "Classic vegetable samosas with crispy crust" },
      { name: "Chicken Wings", desc: "Spicy and tangy chicken wings" },
      { name: "Chicken Nuggets", desc: "Crispy chicken bites with a crunchy coating" },
      { name: "Prawn Tempura", desc: "Crispy tempura prawns with dipping sauce" },
      { name: "Cheese Balls", desc: "Golden cheese balls with a gooey center" },
      { name: "French Fries", desc: "Crispy golden fries seasoned to perfection" },
      { name: "Dynamite Chicken", desc: "Spicy dynamite chicken tossed in a creamy sauce" },
      { name: "Prawn Dynamite", desc: "Crispy prawns tossed in dynamite sauce" },
      { name: "Mini pizza", desc: "Mini pizzas loaded with cheese and toppings" },
      { name: "Chicken Patties", desc: "Savory chicken patties with flaky pastry" },
      { name: "Chicken Popcorn", desc: "Bite-sized popcorn chicken with crispy coating" },
      { name: "Drumsticks & much more.", desc: "Juicy drumsticks marinated in aromatic spices" },
    ],
  },
  {
    category: "Main Course",
    items: [
      { name: "Chicken Biryani", desc: "Fragrant basmati rice layered with spiced chicken" },
      { name: "Chicken Tikka Biryani", desc: "Aromatic biryani with tender tikka pieces" },
      { name: "Chicken Dum Biryani", desc: "Slow-cooked biryani with sealed pot flavors" },
      { name: "Chicken White Biryani", desc: "Mild biryani with creamy white gravy" },
      { name: "Chicken Achari Biryani", desc: "Tangy biryani infused with achari spices" },
      { name: "Beef Biryani", desc: "Fragrant beef biryani cooked with whole spices" },
      { name: "Mutton Biryani", desc: "Rich aromatic rice cooked with tender mutton" },
      { name: "Beef Bihari Biryani", desc: "Spicy beef biryani with Bihari-style flavors" },
      { name: "Mutton Yakhni Biryani", desc: "Aromatic yakhni biryani with slow-cooked meat" },
      { name: "Sindhi Biryani", desc: "Spicy Sindhi-style biryani with a tangy kick" },
      { name: "Hyderabadi Biryani", desc: "Hyderabadi biryani with saffron and rose water" },
      { name: "Bombay Biryani", desc: "Rich Bombay-style biryani with potatoes" },
      { name: "Kolkata Biryani", desc: "Light biryani with potatoes and aromatic spices" },
      { name: "Memoni Biryani", desc: "Flavorful Memoni-style biryani with rich spices" },
      { name: "Prawn Biryani", desc: "Seafood biryani with succulent prawns" },
      { name: "Fish Biryani", desc: "Delicate fish biryani with coastal spices" },
      { name: "Vegetable Biryani & much more.", desc: "Aromatic vegetable biryani with mixed veggies" },
      { name: "Chicken Karahi", desc: "Wok-style chicken curry cooked with tomatoes and green chilies" },
      { name: "Mutton Karahi/Kunna", desc: "Slow-cooked mutton karahi with rich masala" },
      { name: "Beef Karahi", desc: "Beef chunks in a spicy karahi gravy" },
      { name: "White Karahi", desc: "Creamy white karahi with mild spices" },
      { name: "Green Karahi", desc: "Herb-infused green karahi with fresh flavors" },
      { name: "Peshawari Karahi", desc: "Peshawari-style karahi with aromatic spices" },
      { name: "Tikka Karahi", desc: "Spiced tikka cooked in rich karahi gravy" },
      { name: "Koyla Karahi & much More.", desc: "Charcoal-cooked karahi with smoky flavors" },
      { name: "Chicken Qorma", desc: "Creamy chicken qorma with aromatic spices" },
      { name: "Beef Qorma", desc: "Slow-cooked beef qorma with a creamy sauce" },
      { name: "Mutton Qorma", desc: "Rich mutton qorma cooked in nutty gravy" },
      { name: "Shahi Qorma", desc: "Royal qorma with a rich, fragrant sauce" },
      { name: "Badami Qorma & much more.", desc: "Nutty badami qorma with luxurious flavors" },
      { name: "Chicken Handi", desc: "Creamy chicken handi slow-cooked in a clay pot" },
      { name: "Boneless Chicken Handi", desc: "Tender boneless handi in creamy gravy" },
      { name: "Chicken Malai Handi", desc: "Creamy malai handi with soft chicken pieces" },
      { name: "Chicken Achari Handi", desc: "Tangy achari handi with pickling spices" },
      { name: "Mutton Handi & much more.", desc: "Rich mutton handi cooked to perfection" },
      { name: "Chicken Jalfrezi", desc: "Spicy chicken stir-fry with peppers and onions" },
      { name: "Chicken Ginger", desc: "Aromatic chicken curry with fresh ginger" },
      { name: "Butter Chicken", desc: "Creamy tomato-based chicken curry" },
      { name: "Chicken Kofta", desc: "Savory chicken meatballs in rich gravy" },
      { name: "Nihari", desc: "Slow-cooked beef stew with deep flavors" },
      { name: "Chicken Tikka", desc: "Charcoal-grilled chicken chunks marinated in spices" },
      { name: "Bihari Tikka", desc: "Spiced beef tikka with strong Bihari flavors" },
      { name: "Malai Boti", desc: "Creamy, melt-in-mouth chicken boti" },
      { name: "Chicken Seekh Kabab", desc: "Minced chicken skewers with aromatic spices" },
      { name: "Reshmi Kabab", desc: "Silky chicken kababs seasoned with mild spices" },
      { name: "Chicken Boti", desc: "Tender chicken chunks grilled to perfection" },
      { name: "Chicken Malai Tikka", desc: "Creamy tikka with soft chicken pieces" },
      { name: "Chicken Afghani Boti", desc: "Afghani-style chicken boti with creamy flavors" },
      { name: "Beef Seekh Kabab", desc: "Spiced beef skewers grilled over coals" },
      { name: "Chapli Kabab", desc: "Flat spicy beef patties with fresh herbs" },
      { name: "Bihari Kabab", desc: "Boldly spiced kebab with tangy flavors" },
      { name: "Turkish Kabab", desc: "Mediterranean-style kebab with smoky spices" },
      { name: "Angara Kabab", desc: "Fiery kabab with smoky chilies" },
      { name: "Gola Kabab", desc: "Juicy meatballs with aromatic spices" },
      { name: "Mutton Chops", desc: "Tender mutton chops grilled to perfection" },
      { name: "Mutton boti", desc: "Succulent mutton boti with rich spices" },
      { name: "Chicken Grilled Chops", desc: "Grilled chicken chops with smoky char" },
      { name: "American grill", desc: "Mixed grill platter with classic flavors" },
      { name: "Labonese Boti", desc: "Mediterranean-style grilled boti" },
      { name: "Grilled Fish", desc: "Fresh fish grilled with herbs" },
      { name: "Lahori Fish", desc: "Spiced Lahori-style grilled fish" },
      { name: "Grilled Prawns", desc: "Charred prawns with garlic butter" },
      { name: "Fish Biscuits", desc: "Crispy fish fingers with spiced batter" },
      { name: "Finger Fish", desc: "Crunchy fish fingers with tangy dip" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Cream Cocktail", desc: "Rich creamy dessert with assorted nuts and flavors" },
      { name: "Doodh Dulari", desc: "Sweet milk pudding with condensed milk and nuts" },
      { name: "Rabri kheer", desc: "Creamy rice pudding topped with rabri and nuts" },
      { name: "Arabian Delight", desc: "Exotic Arabian-style dessert with aromatic spices" },
      { name: "Mango Delight", desc: "Sweet mango dessert with creamy texture" },
      { name: "Pineapple delight", desc: "Fruity pineapple dessert with tropical flavor" },
      { name: "Anjeer Delight", desc: "Nutty fig dessert with rich cream" },
      { name: "Vanilla Delight", desc: "Classic vanilla dessert with creamy goodness" },
      { name: "Gulab Jamun", desc: "Soft milk dumplings soaked in sweet syrup" },
      { name: "Ras Malai", desc: "Creamy cottage cheese discs in sweet milk" },
      { name: "Kheer", desc: "Rice pudding flavored with cardamom and nuts" },
      { name: "Zarda", desc: "Sweet saffron rice with nuts and raisins" },
      { name: "Shahi Tukda", desc: "Royal bread pudding soaked in saffron syrup" },
      { name: "Kunafa", desc: "Sweet cheese pastry soaked in sugar syrup" },
      { name: "Gajar ka Halwa (in seasons only)", desc: "Rich carrot pudding cooked in milk and ghee" },
      { name: "Suji ka Halwa", desc: "Semolina sweet pudding with ghee and nuts" },
      { name: "Dessert Bar with Fountain", desc: "Interactive dessert station with chocolate fountain" },
      { name: "Litred ice Cream", desc: "Large servings of assorted ice cream flavors" },
      { name: "Kulfa & much more.", desc: "Traditional milk-based frozen dessert" },
    ],
  },
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
            FOOD SELECTION
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
                {section.items.map((item, itemIndex) => (
                  <li key={item.name} className="group cursor-pointer">
                    <div className="flex items-end justify-between mb-1">
                      <h4 className="text-white font-medium font-display tracking-wide group-hover:text-primary transition-colors">
                        {item.name}
                      </h4>
                      {itemIndex !== section.items.length - 1 && (
                        <div className="flex-grow mx-4 border-b border-dotted border-white/20 mb-1 opacity-50"></div>
                      )}
                    </div>
                    <p className="text-sm text-white/50 font-light pr-0 md:pr-12">{item.desc}</p>
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
          <a
            href="https://wa.me/923043635628"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-semibold uppercase tracking-wider hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
          >
            Request a Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
