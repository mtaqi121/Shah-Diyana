import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer id="footer" className="bg-black pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6">
            <a href="#home" className="inline-block">
              <span className="font-display font-bold text-3xl tracking-wider text-white">
                SHAH<span className="text-primary">DIYANA</span>
              </span>
            </a>
            <p className="text-white/60 font-light max-w-md leading-relaxed">
              Premium catering and pakwan center dedicated to bringing authentic taste and elegance to your memorable celebrations in Karachi.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary transition-colors">
                <SiTiktok size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/60 hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#booking" className="text-white/60 hover:text-primary transition-colors">Reservations</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xl text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" size={18} />
                <span className="text-white/60 text-sm leading-relaxed">
                  Shop No 06, Gulshan-e-Shamim,<br/>
                  Yaseenabad, FB Area,<br/>
                  Karachi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-white/60 text-sm">0304 3635628</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-white/60 text-sm break-all">shahdiyanacateringservices@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Shah Diyana Catering. All rights reserved.
          </p>
          <p className="text-white/40 text-sm text-center md:text-right">
            Managed by <span className="text-white/80">Mr. Shahbaz Alamgir</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
