import { Link } from "wouter";
import { BookOpen, HelpCircle, BookText, ArrowRight, Shield, Landmark, Scale } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Теоретичні основи",
    description: "Зручний конспект з усіх ключових тем курсу. Держава, право, форми правління та механізм держави.",
    icon: Landmark,
    href: "/topics",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Юридичний словник",
    description: "Тлумачення найважливіших термінів. Завжди під рукою для швидкого повторення.",
    icon: BookText,
    href: "/glossary",
    color: "from-teal-500 to-emerald-600"
  },
  {
    title: "Перевірка знань",
    description: "Інтерактивні тести для самоперевірки. Дізнайся, наскільки добре ти засвоїв матеріал.",
    icon: HelpCircle,
    href: "/quiz",
    color: "from-amber-500 to-orange-600"
  }
];

export default function Home() {
  return (
    <div className="w-full pb-20">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-950 pt-24 pb-32">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-bg.png`} 
            alt="Абстрактний фон правознавства" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-8 border border-white/20 shadow-2xl"
          >
            <Shield className="w-8 h-8 text-secondary mr-3" />
            <span className="text-white font-bold tracking-widest uppercase text-sm">Основи правознавства</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Теорія держави <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-teal-300 to-primary drop-shadow-none">та права</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Інтерактивний курс для учнів 9 класу. Вивчайте складні юридичні поняття легко, цікаво та з задоволенням.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/topics"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-gradient-to-r from-primary to-blue-600 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Почати вивчення
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/quiz"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-white/10 text-white backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-5 h-5" />
              Пройти тест
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Link 
                href={feature.href}
                className="block h-full bg-card rounded-2xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-bold text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  Перейти <ArrowRight size={16} className="ml-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center">
        <Scale className="w-16 h-16 text-slate-200 mx-auto mb-6" />
        <blockquote className="text-2xl md:text-3xl font-display font-medium text-slate-800 italic leading-snug">
          "Право існує для того, щоб кожен знав свої межі і поважав межі інших. Знання права — це основа вільного суспільства."
        </blockquote>
      </section>
    </div>
  );
}
