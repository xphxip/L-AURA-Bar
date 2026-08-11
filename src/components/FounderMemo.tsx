import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function FounderMemo() {
  return (
    <section className="py-24 px-6 md:px-12 bg-dark-bg relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-wine/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="bg-dark-card/90 backdrop-blur-md border border-gold/15 rounded-sm p-10 md:p-16 relative overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.8)]"
        >
          <Quote className="absolute top-10 left-10 text-gold/10 w-32 h-32 rotate-180 pointer-events-none" />
          
          <div className="relative z-10">
            <p className="text-2xl md:text-4xl font-serif text-white leading-relaxed italic mb-12 font-light drop-shadow-sm">
              "Para nós, um coquetel não é apenas uma bebida. É uma <span className="gold-shimmer-text">narrativa líquida</span>, uma viagem no tempo e um tributo aos ingredientes mais raros que a terra tem a oferecer."
            </p>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-amber p-[2px] shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <span className="text-gold font-serif text-xl drop-shadow-[0_0_4px_rgba(255,215,0,0.5)]">VR</span>
                </div>
              </div>
              <div>
                <h4 className="font-serif text-white text-2xl">Valentino Rossi</h4>
                <p className="text-gold text-[11px] tracking-[0.2em] uppercase font-bold mt-1">Head Mixologist</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
