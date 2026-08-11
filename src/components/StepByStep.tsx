import { motion } from 'framer-motion';

const steps = [
  {
    title: "Sua Reserva",
    description: "Escolha o ambiente ideal. Desde o balcão interativo até a privacidade da nossa adega subterrânea."
  },
  {
    title: "A Recepção",
    description: "Ao chegar, seja recebido por nosso host com um welcome drink exclusivo preparado com infusões sazonais."
  },
  {
    title: "A Jornada de Sabores",
    description: "Deixe-se guiar por nosso menu em 5 tempos, onde cada coquetel é meticulosamente harmonizado com pequenas obras de arte culinárias."
  },
  {
    title: "A Atmosfera",
    description: "Relaxe ao som de jazz ao vivo enquanto o ambiente se transforma sutilmente conforme a noite avança."
  }
];

export default function StepByStep() {
  return (
    <section className="py-24 px-6 md:px-12 bg-dark-surface border-y border-dark-border">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-gray-900">
            Uma noite orquestrada
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Cada momento no L'Aura é cuidadosamente pensado para transcender o ordinário.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-[27px] top-4 bottom-10 w-[1px] bg-gold/20" />

          <div className="space-y-14 relative">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="flex gap-6 md:gap-8"
              >
                <div className="w-14 h-14 min-w-[56px] bg-dark-bg border border-gold/50 text-gold rounded-full flex items-center justify-center font-serif text-base flex-shrink-0 relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)] whitespace-nowrap">
                  0{index + 1}
                </div>
                <div className="pt-3">
                  <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
