import { motion } from 'framer-motion';
import { Martini } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="pt-28 md:pt-36 pb-10 px-6 md:px-12 overflow-hidden relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `linear-gradient(to bottom, rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 1)), url('/images/hero_bg_1786471969965.png')` }}
    >
      {/* Rich warm background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-amber/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-wine/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-dark-bg to-transparent pointer-events-none" />
      
      {/* Floating ambient particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gold/50 rounded-full pointer-events-none"
          style={{
            left: `${10 + i * 12}%`,
            bottom: '25%',
            animation: `float-particle ${6 + i * 1.5}s ${i * 1}s infinite ease-in-out`,
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold/30 bg-gold/5 rounded-full text-[11px] uppercase tracking-[0.2em] text-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse shadow-[0_0_6px_rgba(255,215,0,0.8)]" />
            Reservas Abertas — Temporada 2026
          </span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-[68px] leading-[1.1] font-bold mb-6"
        >
          <span className="text-white">A arte da coquetelaria</span><br />
          <span className="text-white">em </span>
          <span className="gold-shimmer-text italic font-light">cada detalhe.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Descubra uma experiência sensorial única no coração da cidade. Alta gastronomia, mixologia autoral e um ambiente desenhado para noites inesquecíveis.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-gold text-dark-bg px-10 py-3.5 text-sm uppercase tracking-[0.15em] font-bold hover:bg-gold-light transition-all duration-300 shadow-[0_0_35px_rgba(255,215,0,0.3)] hover:shadow-[0_0_50px_rgba(255,215,0,0.5)]">
            Faça sua Reserva
          </button>
          <a href="#experiencia" className="text-gold/80 hover:text-gold text-sm uppercase tracking-[0.15em] transition-colors duration-300 flex items-center gap-2">
            Conheça Mais
            <span className="text-lg">↓</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Mockups */}
      <div className="max-w-5xl mx-auto mt-16 md:mt-20 relative h-[320px] md:h-[380px]">
        {/* Main Center Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 top-6 w-[92%] md:w-[560px] z-20"
        >
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="bg-dark-card/90 backdrop-blur-xl rounded-sm border border-gold/15 p-6 md:p-7 shadow-[0_25px_60px_-12px_rgba(0,0,0,0.7),0_0_40px_-15px_rgba(255,215,0,0.08)]"
          >
            <div className="flex items-center justify-between border-b border-gold/10 pb-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-gold/20 to-amber/10 border border-gold/20 flex items-center justify-center">
                  <Martini className="text-gold" size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white">Midnight Symphony</h3>
                  <p className="text-[11px] text-gold tracking-[0.2em] uppercase mt-0.5">Assinatura do Chef</p>
                </div>
              </div>
              <div className="text-right">
                <span className="block font-serif text-xl text-gold">R$ 65</span>
              </div>
            </div>
            <p className="text-gray-400 font-light leading-relaxed text-sm">
              Gin botânico infundido com flor de lótus, licor de sabugueiro, cítricos defumados e um toque de ouro comestível.
            </p>
          </motion.div>
        </motion.div>

        {/* Left Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="hidden md:block absolute left-4 top-24 w-56 z-10"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            className="bg-dark-card/80 backdrop-blur-md rounded-sm border border-wine-light/20 p-5 rotate-[-3deg] shadow-[0_20px_40px_-15px_rgba(114,47,55,0.3)]"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-amber shadow-[0_0_6px_rgba(255,140,0,0.8)]" />
              <span className="text-[10px] tracking-[0.2em] text-amber uppercase">Hoje</span>
            </div>
            <div className="font-serif text-base text-white mb-1.5">Jazz ao Vivo</div>
            <div className="text-xs text-gray-400 font-light">A partir das 21h</div>
          </motion.div>
        </motion.div>

        {/* Right Floating Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="hidden md:block absolute right-4 top-12 w-64 z-30"
        >
          <motion.div
            animate={{ y: [8, -6, 8] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 0.5 }}
            className="bg-dark-card/80 backdrop-blur-md rounded-sm border border-gold/15 p-5 rotate-[3deg] shadow-[0_20px_40px_-15px_rgba(255,215,0,0.08)]"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="text-gold font-serif text-3xl drop-shadow-[0_0_8px_rgba(255,215,0,0.4)]">4.9</div>
              <div className="flex text-gold text-xs tracking-widest drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]">
                ★★★★★
              </div>
            </div>
            <p className="text-xs text-gray-300 font-light italic leading-relaxed">
              "A melhor experiência de mixologia da cidade. O ambiente transporta você para outra era."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
