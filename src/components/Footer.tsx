import { Wine } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-bg border-t border-gold/10 py-16 px-6 md:px-12 relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="text-gold">
              <Wine size={24} strokeWidth={1.5} />
            </div>
            <span className="font-serif font-bold text-xl tracking-widest text-gray-900 uppercase">L'Aura</span>
          </div>
          <p className="text-gray-600 text-sm font-light text-center md:text-left">
            Av. Faria Lima, 3000 - Rooftop<br/>
            São Paulo, SP
          </p>
        </div>
        
        <nav className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-xs text-gray-600 tracking-widest uppercase font-light">
          <a href="#" className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300">Reservas</a>
          <a href="#" className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300">Dress Code</a>
          <a href="#" className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300">Eventos Privados</a>
          <a href="#" className="hover:text-gold hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.5)] transition-all duration-300">Contato</a>
        </nav>
        
        <div className="text-xs text-gray-500 font-light text-center md:text-right">
          Aberto de Terça a Sábado, das 19h às 02h.<br/>
          <span className="mt-2 block">© {new Date().getFullYear()} L'Aura Bar.</span>
        </div>
      </div>
    </footer>
  );
}
