import { motion } from 'framer-motion';
import { 
  Wine, 
  Music, 
  Flame, 
  Crown, 
  UtensilsCrossed, 
  Martini, 
  Star, 
  Moon 
} from 'lucide-react';

const features = [
  { icon: <Martini size={18} />, label: "Mixologia Autoral" },
  { icon: <Wine size={18} />, label: "Adega Subterrânea" },
  { icon: <Music size={18} />, label: "Jazz & Blues ao Vivo" },
  { icon: <Crown size={18} />, label: "Atendimento Exclusivo" },
  { icon: <UtensilsCrossed size={18} />, label: "Alta Gastronomia" },
  { icon: <Flame size={18} />, label: "Charutaria Lounge" },
  { icon: <Star size={18} />, label: "Sommeliers Premiados" },
  { icon: <Moon size={18} />, label: "Ambiente Intimista" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 }
};

export default function Features() {
  return (
    <section className="py-20 px-6 md:px-12 bg-dark-bg border-t border-white/5 relative z-20">
      {/* Section divider */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-[1px] w-16 bg-gold/30" />
        <span className="mx-6 text-gold text-[10px] tracking-[0.3em] uppercase font-light">O que nos define</span>
        <div className="h-[1px] w-16 bg-gold/30" />
      </div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-wrap justify-center gap-4 md:gap-5"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -3, borderColor: "rgba(212,175,55,0.4)" }}
              className="flex items-center gap-3 bg-dark-surface/40 backdrop-blur-sm px-5 py-3.5 border border-white/5 hover:bg-dark-surface transition-all duration-300 group cursor-default"
            >
              <div className="text-gold/60 group-hover:text-gold transition-colors duration-300">
                {feature.icon}
              </div>
              <span className="font-light text-gray-300 text-[13px] tracking-wider group-hover:text-white transition-colors duration-300">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
