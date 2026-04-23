import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Contato / Localização</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Fale com a nossa equipe
            </h2>
            <p className="text-slate-600 mb-10 text-lg">
              Estamos prontos para atender você 24 horas por dia. Entre em contato para solicitar uma coleta ou tirar dúvidas.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Phone className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Telefones</h3>
                  <p className="text-slate-600">(11) 5052-3563</p>
                  <p className="text-slate-600">(11) 5051-4442</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <Mail className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">E-mail</h3>
                  <a href="mailto:coopstar_express@hotmail.com" className="text-slate-600 hover:text-brand-blue transition-colors">
                    coopstar_express@hotmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">Endereço</h3>
                  <p className="text-slate-600">
                    Av. Jurucê, 898 - Moema<br />
                    São Paulo - SP
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-100 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Envie uma mensagem</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Nome</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                    placeholder="(11) 90000-0000"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">E-mail</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-colors outline-none resize-none"
                  placeholder="Como podemos ajudar?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-lg hover:bg-brand-blue-hover transition-colors flex justify-center items-center gap-2"
              >
                <Send size={20} />
                Enviar Mensagem
              </button>
            </form>
          </motion.div>

        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 hidden lg:block rounded-l-[100px]"></div>
    </section>
  );
}
