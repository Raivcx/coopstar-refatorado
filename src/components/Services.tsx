import { motion } from 'framer-motion';
import { Package, Truck, MapPin } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'Serviços Moto Frete',
      description: 'Entregas rápidas de documentos e pequenos volumes de um ponto a outro da cidade. Inclui serviços bancários, cartórios, além de despachos e retiradas em aeroportos.',
      icon: <Package className="text-white" size={32} />,
      image: '/images/service-moto.png',
    },
    {
      id: 2,
      title: 'Delivery Especializado',
      description: 'Tem um grande volume de documentos ou encomendas leves? Implantamos um serviço de delivery dedicado com o melhor custo-benefício. Ideal para Farmácias, Pizzarias, Restaurantes e Auto Peças.',
      icon: <Truck className="text-white" size={32} />,
      image: '/images/service-delivery.png',
    },
    {
      id: 3,
      title: 'Fora da Capital',
      description: 'Atendemos também demandas intermunicipais e para a Grande São Paulo com a mesma agilidade e compromisso. Consulte nossa tabela de preços especial para estes trajetos.',
      icon: <MapPin className="text-white" size={32} />,
      image: '/images/service-intercity.png',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            Soluções completas para sua logística
          </h2>
          <p className="text-slate-600 text-lg">
            Agilidade e segurança sob medida para as necessidades da sua empresa.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={cardVariants}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute -bottom-6 left-6 w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center shadow-lg z-20 group-hover:-translate-y-2 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 pt-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
