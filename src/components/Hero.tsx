import { motion } from 'framer-motion';
import { ArrowRight, Clock, MapPin, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden bg-slate-900">
      {/* Background Image & Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/hero-bg.png)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-blue/20 border border-brand-blue/30 text-brand-blue-hover text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue-hover opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue-hover"></span>
              </span>
              Disponível 24 Horas
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
              Agilidade e Segurança em <span className="text-brand-blue-hover">Entregas Rápidas</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Soluções inteligentes em moto frete e delivery para São Paulo e Grande São Paulo. Há mais de 9 anos garantindo que sua encomenda chegue no tempo certo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-lg bg-brand-blue text-white font-bold hover:bg-brand-blue-hover hover:scale-105 transition-all shadow-[0_0_20px_rgba(0,102,204,0.4)]">
                Solicitar Coleta
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="inline-flex justify-center items-center px-8 py-4 rounded-lg bg-white/10 text-white font-bold border border-white/20 hover:bg-white/20 transition-all backdrop-blur-sm">
                Conhecer Serviços
              </a>
            </div>

            {/* Badges */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <Clock className="text-brand-blue-hover" size={24} />
                <span className="text-slate-300 text-sm font-medium">Atendimento<br/>24 Horas</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-blue-hover" size={24} />
                <span className="text-slate-300 text-sm font-medium">Equipe<br/>Especializada</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-brand-blue-hover" size={24} />
                <span className="text-slate-300 text-sm font-medium">SP e Grande<br/>São Paulo</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
