import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Premium dark high-end catering background */}
      <div className="absolute inset-0 z-0">
        {/* landing page hero elegant catering food presentation */}
        <img
          src="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2070&auto=format&fit=crop"
          alt="Catering Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <span className="text-primary tracking-[0.3em] uppercase text-sm font-semibold mb-4 block">
            Catering and Pakwan Center
          </span>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            SHAH <span className="gold-gradient-text">-</span> DIYANA
          </h1>
          <p className="text-lg md:text-2xl text-white/80 font-light mb-10 max-w-2xl font-display italic">
            "Where Taste Meets Beautiful Celebrations!"
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="rounded-none bg-primary text-primary-foreground hover:bg-white hover:text-black transition-all duration-300 font-semibold px-8 py-6 uppercase tracking-widest text-sm"
            >
              <a href="#menu">View Menu</a>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg" 
              className="rounded-none border-white/20 text-white hover:bg-white/10 transition-all duration-300 font-semibold px-8 py-6 uppercase tracking-widest text-sm glass-panel"
            >
              <a href="#booking">Book Now</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hover:text-primary transition-colors cursor-pointer"
      >
        <span className="sr-only">Scroll down</span>
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
}
