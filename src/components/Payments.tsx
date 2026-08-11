import { motion } from 'framer-motion';
import { Key, Gem, PartyPopper, CalendarClock } from 'lucide-react';

const privileges = [
  {
    icon: <Key size={28} className="text-gold" />,
    title: "Acesso Prioritário",
    description: "Sem filas. Membros do clube têm entrada garantida mesmo nas noites mais concorridas."
  },
  {
    icon: <Gem size={28} className="text-amber" />,
    title: "Adega Privativa",
    description: "Guarde seus rótulos favoritos em nossos lockers climatizados com seu nome."
  },
  {
    icon: <PartyPopper size={28} className="text-wine-light" />,
    title: "Eventos Exclusivos",
    description: "Convites para degustações fechadas e masterclasses com nossos mixologistas."
  },
  {
    icon: <CalendarClock size={28} className="text-gold" />,
    title: "Reservas Flexíveis",
    description: "Cancelamentos sem taxas e prioridade na escolha das melhores mesas do lounge."
  }
];

export default function Payments() {
  return (
    <section className="py-24 px-6 md:px-12 bg-dark-bg border-y border-gold/10 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-dark-bg to-dark-bg pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
            Clube de <span className="gold-shimmer-text">Membros L'Aura</span>
          </h2>
          <p className="text-lg text-gray-300 font-light max-w-2xl mx-auto">
            Eleve sua experiência. Um seleto grupo de apreciadores com benefícios que transformam cada visita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privileges.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-dark-surface/80 backdrop-blur-sm p-8 rounded-sm border border-gold/15 hover:border-gold/50 transition-all duration-300 group shadow-[0_10px_30px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_40px_-15px_rgba(255,215,0,0.15)]"
            >
              <div className="w-16 h-16 bg-dark-bg border border-gold/20 rounded flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors shadow-inner">
                <div className="group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
