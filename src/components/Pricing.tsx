import { motion } from 'framer-motion';

export default function Pricing() {
  return (
    <section className="py-24 px-6 md:px-12 bg-dark-bg text-center relative border-b border-gold/10">
      {/* Intense warm glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-block px-5 py-2 border border-gold/40 bg-gold/5 rounded-full text-[11px] font-bold text-gold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(255,215,0,0.1)]">
            A Experiência Completa
          </div>
          
          <h2 className="text-4xl md:text-6xl font-serif tracking-tight text-gray-900 drop-shadow-md">
            Menu <span className="gold-shimmer-text">Degustação</span>
          </h2>
          
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold/60" />
            <div className="text-3xl md:text-5xl font-serif text-gold drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">R$ 450</div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold/60" />
          </div>
          
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed font-light">
            Uma imersão de 5 tempos nos mistérios da mixologia moderna, guiada pessoalmente pelo nosso Head Bartender. Inclui harmonização com gastronomia de vanguarda.
          </p>
          
          <div className="pt-4">
            <button className="bg-gold text-dark-bg px-10 py-4 text-sm uppercase tracking-[0.15em] font-bold hover:bg-gold-light transition-all duration-300 active:scale-95 shadow-[0_0_35px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)]">
              Agendar Experiência
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
