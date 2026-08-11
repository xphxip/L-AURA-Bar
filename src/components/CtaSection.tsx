import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section className="bg-dark-bg text-white py-24 md:py-32 px-6 md:px-12 relative border-t border-gold/15 overflow-hidden">
      {/* Intense background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[200px] bg-amber/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 bg-gold/60 rounded-full pointer-events-none"
          style={{
            left: `${20 + i * 15}%`,
            bottom: '30%',
            animation: `float-particle ${5 + i * 2}s ${i * 0.5}s infinite ease-in-out`,
          }}
        />
      ))}
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="text-gold mb-4 font-serif italic text-2xl drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">L'Aura Bar</div>
          <h2 className="text-3xl md:text-6xl font-serif font-bold tracking-tight mb-6">
            As noites mais exclusivas da cidade <span className="gold-shimmer-text">esperam por você.</span>
          </h2>
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Vagas limitadas por noite para garantir a excelência do nosso serviço. Garanta sua mesa.
          </p>
          
          <button className="bg-gold text-dark-bg px-12 py-5 text-sm uppercase tracking-[0.15em] font-bold hover:bg-gold-light transition-all active:scale-95 shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)]">
            Solicitar Reserva
          </button>
        </motion.div>
      </div>
    </section>
  );
}
