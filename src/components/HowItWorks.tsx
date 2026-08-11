import { motion } from 'framer-motion';
import { GlassWater } from 'lucide-react';

const toastVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: custom * 2,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      repeat: Infinity,
      repeatDelay: 5,
      repeatType: "reverse" as const
    }
  })
};

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 md:px-12 bg-dark-bg" id="experiencia">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6 text-white">
              Uma experiência <br />
              <span className="gold-shimmer-text italic font-light">sem paralelos.</span>
            </h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed">
              Desde o momento em que você cruza nossas portas, o mundo lá fora deixa de existir. O ambiente à meia-luz, o som do gelo lapidado e o jazz suave criam a atmosfera perfeita para sua noite.
            </p>
          </div>

          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-4">
                <span className="text-gold text-sm tracking-widest uppercase">01.</span>
                Recepção Exclusiva
              </h3>
              <p className="text-gray-400 pl-10 font-light">
                Sem filas ou esperas prolongadas. Sua mesa reservada e nosso host pronto para guiá-lo em uma jornada de sabores.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-xl font-serif text-white mb-2 flex items-center gap-4">
                <span className="text-gold text-sm tracking-widest uppercase">02.</span>
                Curadoria de Sabores
              </h3>
              <p className="text-gray-400 pl-10 font-light">
                Deixe-se levar pelas sugestões de nossos sommeliers e mixologistas premiados, que adaptarão as bebidas ao seu paladar.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Animated Mockup */}
        <div className="relative h-[450px] flex items-center justify-center bg-dark-surface rounded-sm border border-gold/10 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7),inset_0_0_40px_rgba(255,215,0,0.03)]">
          {/* Inner ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-transparent to-amber/5" />
          
          <div className="relative w-full max-w-sm flex flex-col gap-5 z-10">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={toastVariants}
                initial="hidden"
                animate="visible"
                className="bg-dark-card p-5 rounded-sm border border-gold/20 flex items-center gap-5 mx-6 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.8),0_0_15px_rgba(255,215,0,0.05)]"
              >
                <div className="w-12 h-12 rounded bg-gradient-to-br from-gold/15 to-transparent border border-gold/20 flex items-center justify-center flex-shrink-0">
                  <GlassWater className="text-gold" size={20} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-serif text-white drop-shadow-[0_0_8px_rgba(255,215,0,0.1)]">Mesa VIP Confirmada</div>
                  <div className="text-xs text-gray-400 font-light mt-1">Lounge Privativo {item}</div>
                </div>
                <div className="text-right">
                  <div className="font-serif text-gold text-sm drop-shadow-[0_0_4px_rgba(255,215,0,0.4)]">21:00</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
