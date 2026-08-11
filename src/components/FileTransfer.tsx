import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wine, UtensilsCrossed, Flame, Martini, X } from 'lucide-react';

const menus = [
  { id: 'assinaturas', icon: <Martini size={32} className="text-gold group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300" />, name: "Assinaturas", rotation: -4, y: 10 },
  { id: 'adega', icon: <Wine size={32} className="text-wine-light group-hover:drop-shadow-[0_0_8px_rgba(139,58,68,0.6)] transition-all duration-300" />, name: "A Adega", rotation: 2, y: -5 },
  { id: 'tapas', icon: <UtensilsCrossed size={32} className="text-amber group-hover:drop-shadow-[0_0_8px_rgba(255,140,0,0.6)] transition-all duration-300" />, name: "Tapas & Bites", rotation: -2, y: 0 },
  { id: 'charutos', icon: <Flame size={32} className="text-gold group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300" />, name: "Charutos", rotation: 5, y: 15 },
];

// Mock data for the modal
const menuDetails: Record<string, { title: string; subtitle: string; image: string; items: { name: string; desc: string; price: string }[] }> = {
  assinaturas: {
    title: "Coquetéis Assinatura",
    subtitle: "Nossa interpretação da alta coquetelaria mundial",
    image: "/images/assinaturas_1786471951334.png",
    items: [
      { name: "Midnight Symphony", desc: "Gin botânico infundido com flor de lótus, licor de sabugueiro, cítricos defumados.", price: "R$ 65" },
      { name: "Ouro Líquido", desc: "Whisky single malt envelhecido, redução de mel trufado, bitter de cacau.", price: "R$ 85" },
      { name: "L'Aura Velvet", desc: "Vodka premium, purê de frutas vermelhas, espuma de gengibre, pó de ouro.", price: "R$ 70" },
    ]
  },
  adega: {
    title: "A Adega",
    subtitle: "Rótulos raros e safras excepcionais",
    image: "/images/adega_1786471961195.png",
    items: [
      { name: "Château Margaux 2015", desc: "Bordeaux exuberante com notas de violeta e frutas negras. (Taça)", price: "R$ 350" },
      { name: "Dom Pérignon Vintage", desc: "Champagne elegante, perfeito para celebrações inesquecíveis. (Garrafa)", price: "R$ 2.400" },
      { name: "Brunello di Montalcino", desc: "Toscano robusto com envelhecimento perfeito em carvalho eslavo. (Garrafa)", price: "R$ 1.800" },
    ]
  },
  tapas: {
    title: "Tapas & Bites",
    subtitle: "Pequenas porções de alta gastronomia",
    image: "/images/tapas_bites_1786471870772.png",
    items: [
      { name: "Tartare Trufado", desc: "Mignon picado na ponta da faca, azeite de trufas brancas, gema curada.", price: "R$ 95" },
      { name: "Ostras Frescas", desc: "6 unidades com vinagrete de maçã verde e caviar Ossetra.", price: "R$ 145" },
      { name: "Brie Empanado", desc: "Brie envolto em massa filo, mel picante e amêndoas tostadas.", price: "R$ 75" },
    ]
  },
  charutos: {
    title: "Charutos Premium",
    subtitle: "O complemento perfeito para seu destilado",
    image: "/images/charutos_1786471889139.png",
    items: [
      { name: "Cohiba Siglo VI", desc: "O auge da produção cubana, sabor rico e complexo.", price: "R$ 450" },
      { name: "Montecristo No. 2", desc: "Clássico figurado, notas de café, cacau e especiarias doces.", price: "R$ 320" },
      { name: "Romeo y Julieta", desc: "Churchill equilibrado, floral e elegante para uma queima suave.", price: "R$ 280" },
    ]
  }
};

export default function FileTransfer() {
  const [selectedMenu, setSelectedMenu] = useState<string | null>(null);

  // Stop background scroll when modal is open
  if (selectedMenu && typeof window !== 'undefined') {
    document.body.style.overflow = 'hidden';
  } else if (typeof window !== 'undefined') {
    document.body.style.overflow = 'unset';
  }

  const activeData = selectedMenu ? menuDetails[selectedMenu] : null;

  return (
    <section className="py-24 px-6 md:px-12 bg-dark-surface overflow-hidden relative" id="menu">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-surface to-dark-bg pointer-events-none" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-6 max-w-2xl text-white">
          Nossa <span className="gold-shimmer-text">Curadoria.</span>
        </h2>
        <p className="text-lg text-gray-300 font-light leading-relaxed mb-24 max-w-2xl">
          Uma seleção rigorosa de destilados raros, vinhos premiados e gastronomia pensada para harmonizar com momentos excepcionais.
        </p>

        <div className="relative w-full h-[320px] flex justify-center mt-10">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              whileInView={{ opacity: 1, y: menu.y, rotate: menu.rotation }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring", 
                bounce: 0.4 
              }}
              onClick={() => setSelectedMenu(menu.id)}
              className="absolute w-52 bg-dark-card p-6 rounded-sm border border-gold/15 flex flex-col items-center gap-5 hover:z-20 hover:border-gold/60 transition-colors cursor-pointer shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8)] hover:shadow-[0_25px_50px_-10px_rgba(255,215,0,0.15)] group"
              style={{
                marginLeft: `${(index - 1.5) * 120}px`,
                zIndex: selectedMenu === menu.id ? 20 : index
              }}
            >
              <div className="w-20 h-20 rounded-full bg-dark-bg border border-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-inner">
                {menu.icon}
              </div>
              <div className="space-y-3 w-full text-center mt-2">
                <span className="font-serif text-white text-lg block group-hover:text-gold transition-colors duration-300">{menu.name}</span>
                <div className="h-[1px] bg-gold/30 w-full" />
                <span className="text-xs text-gold uppercase tracking-[0.2em] font-bold opacity-80 group-hover:opacity-100 transition-opacity">Explorar</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMenu && activeData && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMenu(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl bg-dark-card border border-gold/20 p-8 md:p-12 z-50 rounded-sm shadow-[0_0_50px_rgba(255,215,0,0.05),0_20px_40px_-10px_rgba(0,0,0,1)] max-h-[85vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedMenu(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gold transition-colors"
              >
                <X size={24} />
              </button>
              
              <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-3 drop-shadow-md">{activeData.title}</h3>
                <p className="text-gold text-sm tracking-[0.15em] uppercase font-bold opacity-80">{activeData.subtitle}</p>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-gold/50 to-transparent mx-auto mt-6" />
              </div>

              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-2/5 shrink-0 rounded-sm overflow-hidden border border-gold/15 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.8)]">
                  <img src={activeData.image} alt={activeData.title} className="w-full h-auto object-cover max-h-[300px] md:max-h-[400px]" />
                </div>
                
                <div className="space-y-8 flex-1 w-full">
                  {activeData.items.map((item, idx) => (
                    <div key={idx} className="group cursor-default">
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-serif text-white group-hover:text-gold-light transition-colors">{item.name}</h4>
                        <div className="flex-1 border-b border-dotted border-gray-600/50 mx-4 relative top-[-6px]" />
                        <span className="text-gold font-serif text-xl drop-shadow-[0_0_4px_rgba(255,215,0,0.2)]">{item.price}</span>
                      </div>
                      <p className="text-gray-400 font-light text-sm md:text-base leading-relaxed max-w-[95%]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-12 text-center">
                 <button 
                  onClick={() => setSelectedMenu(null)}
                  className="bg-transparent border border-gold text-gold hover:bg-gold hover:text-dark-bg px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold transition-all duration-300"
                >
                  Voltar ao Menu
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
