export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start">
            <span className="text-2xl font-bold tracking-tighter text-brand-red">
              Coopstar<span className="text-slate-400">Express</span>
            </span>
            <span className="text-xs font-medium tracking-widest uppercase text-brand-red-hover mt-1">
              Moto Frete & Delivery
            </span>
          </div>

          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">Quem Somos</a>
            <a href="#services" className="hover:text-white transition-colors">Serviços</a>
            <a href="#contact" className="hover:text-white transition-colors">Contato</a>
          </div>

        </div>

        <div className="mt-8 pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} Coopstar Express. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com <span className="text-brand-red">♥</span> para alta performance.
          </p>
        </div>
      </div>
    </footer>
  );
}
