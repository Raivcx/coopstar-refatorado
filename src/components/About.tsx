import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images/Visuals */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about.png`} 
                alt="Motoboy realizando entrega" 
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            {/* Decoration Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-red/10 rounded-full blur-3xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-red/20 rounded-full blur-2xl z-0"></div>
            
            {/* Experience Badge */}
            <div className="absolute bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block">
              <div className="text-4xl font-black text-brand-red mb-1">+9 Anos</div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">de Experiência</div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-brand-red font-bold tracking-wider uppercase text-sm">Quem Somos</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Referência em agilidade para o seu negócio
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="prose prose-lg text-slate-600 mb-8">
              <p>
                A <strong>Coopstar Express</strong> é uma empresa especializada no serviço de entregas e coletas, atuando há mais de nove anos no mercado. 
              </p>
              <p>
                Oferecemos serviços de alta qualidade, desempenhando uma função essencial para nossos clientes: <strong>agilizar os mais diversos processos logísticos</strong>, o que nos consolidou como uma empresa de destaque neste segmento.
              </p>
            </motion.div>

            {/* Features */}
            <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                  <Target className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Foco no Cliente</h3>
                  <p className="text-sm text-slate-500">Garantimos o êxito das suas operações logísticas.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center shrink-0">
                  <TrendingUp className="text-brand-red" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Alta Performance</h3>
                  <p className="text-sm text-slate-500">Agendamento com hora marcada para total precisão.</p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
