import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem Somos', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="flex flex-col">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-brand-red' : 'text-white'}`}>
                Coopstar<span className={isScrolled ? 'text-slate-800' : 'text-slate-200'}>Express</span>
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-brand-red-hover' : 'text-slate-300'}`}>
                Moto Frete & Delivery
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  isScrolled ? 'text-slate-600 hover:text-brand-red' : 'text-slate-200 hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all ${
                isScrolled
                  ? 'bg-brand-red text-white shadow-md hover:bg-brand-red-hover hover:shadow-lg'
                  : 'bg-white text-brand-red hover:bg-slate-100'
              }`}
            >
              <Phone size={18} />
              <span>(11) 5052-3563</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-800' : 'text-white'} hover:text-brand-red transition-colors`}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-red hover:bg-slate-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md font-semibold bg-brand-red text-white hover:bg-brand-red-hover transition-colors"
            >
              <Phone size={18} />
              <span>Ligar Agora</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
