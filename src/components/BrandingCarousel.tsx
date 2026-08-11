import { motion } from 'framer-motion';

const ambientes = [
  { name: "O Balcão Principal", color: "from-dark-border to-dark-bg", image: "/images/balcao_principal_1786471899197.png" },
  { name: "Lounge Privativo", color: "from-amber/30 to-dark-bg", image: "/images/lounge_privativo_1786471909898.png" },
  { name: "Terraço Noturno", color: "from-gold/20 to-dark-bg", image: "/images/terraco_noturno_1786471919758.png" },
  { name: "Adega Subterrânea", color: "from-wine/40 to-dark-bg", image: "/images/adega_1786471961195.png" },
  { name: "Sala dos Espelhos", color: "from-burgundy/50 to-dark-bg", image: "/images/sala_espelhos_1786471929908.png" },
];

export default function BrandingCarousel() {
  const duplicatedAmbientes = [...ambientes, ...ambientes];

  return (
    <section className="py-24 bg-dark-bg overflow-hidden relative" id="ambientes">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-dark-bg to-dark-bg pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center mb-16 relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 text-white">
          Nossos <span className="gold-shimmer-text">Espaços</span>
        </h2>
        <p className="text-lg text-gray-300 font-light">
          Cada ambiente foi projetado para oferecer uma atmosfera distinta, adaptando-se perfeitamente ao tom da sua noite.
        </p>
      </div>

      <div className="relative w-full flex">
        {/* Gradient fades for dark mode */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex gap-8 px-4"
        >
          {duplicatedAmbientes.map((ambiente, index) => (
            <div 
              key={index} 
              className="w-[320px] h-[450px] flex-shrink-0 rounded-sm overflow-hidden border border-gold/15 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] relative group cursor-pointer"
            >
              {/* Image Background */}
              <div 
                className={`absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 transition-all duration-700 group-hover:scale-105`} 
                style={{ backgroundImage: `url(${ambiente.image})` }}
              />
              
              {/* Lighter bottom gradient just for text readability */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="w-10 h-[2px] bg-gold mb-4 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 shadow-[0_0_8px_rgba(255,215,0,0.8)]" />
                <h3 className="font-serif text-2xl text-white mb-2 group-hover:text-gold transition-colors duration-300">{ambiente.name}</h3>
                <span className="text-gold text-xs tracking-[0.2em] uppercase font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  Explorar Espaço
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
