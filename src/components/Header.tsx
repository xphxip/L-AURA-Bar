import { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Wine, Menu, X } from 'lucide-react';

export default function Header() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-dark-bg/90 backdrop-blur-xl border-b border-gold/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="text-gold group-hover:text-gold-light group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300">
            <Wine size={26} strokeWidth={1.5} />
          </div>
          <span className={`font-serif font-bold text-xl md:text-2xl tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? 'text-gray-900' : 'text-white'}`}>L'Aura</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {[
            { label: "A Experiência", href: "#experiencia" },
            { label: "Menu", href: "#menu" },
            { label: "Ambientes", href: "#ambientes" },
          ].map((item) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`${isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-300 hover:text-white'} text-xs tracking-[0.15em] uppercase transition-colors duration-300 relative group`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button className="hidden md:block bg-gold/90 hover:bg-gold text-dark-bg px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.25)] hover:shadow-[0_0_35px_rgba(255,215,0,0.5)]">
            Reservar Mesa
          </button>
          
          <button 
            className="md:hidden text-gold"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-dark-bg/95 backdrop-blur-xl border-t border-gold/10 px-6 py-8 space-y-6"
        >
          <a href="#experiencia" onClick={() => setMobileOpen(false)} className="block text-gray-700 text-sm tracking-widest uppercase hover:text-gold transition-colors">A Experiência</a>
          <a href="#menu" onClick={() => setMobileOpen(false)} className="block text-gray-700 text-sm tracking-widest uppercase hover:text-gold transition-colors">Menu</a>
          <a href="#ambientes" onClick={() => setMobileOpen(false)} className="block text-gray-700 text-sm tracking-widest uppercase hover:text-gold transition-colors">Ambientes</a>
          <button className="w-full bg-gold text-dark-bg py-3 text-xs uppercase tracking-widest font-bold mt-4 shadow-sm">Reservar Mesa</button>
        </motion.div>
      )}
    </motion.header>
  );
}
