import { motion } from "framer-motion";
import { GraduationCap, Code, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Про проект</h1>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              Цей вебсайт створено як сучасний інтерактивний посібник для учнів 9-х класів, які вивчають предмет «Основи правознавства».
            </p>
            <p>
              Головна мета проекту — зробити вивчення складної юридичної термінології та теоретичних концепцій доступним, цікавим та візуально привабливим для молоді.
            </p>
            <p>
              Замість нудних підручників ми пропонуємо структурований конспект, швидкий пошук по словнику та інтерактивні тести для закріплення матеріалу.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Decorative background blob */}
          <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl transform -translate-x-10 translate-y-10"></div>
          
          <img 
            src={`${import.meta.env.BASE_URL}images/about-illustration.png`} 
            alt="Студенти вивчають право" 
            className="w-full h-auto rounded-3xl shadow-2xl relative z-10 border border-white/50"
          />
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-card rounded-3xl p-10 border border-slate-100 shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Особливості платформи</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Навчальна база</h3>
            <p className="text-slate-500">Матеріали відповідають шкільній програмі 9 класу МОН України.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Code size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Сучасні технології</h3>
            <p className="text-slate-500">Швидкий, адаптивний інтерфейс, що працює на будь-якому пристрої.</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">Зроблено з любов'ю</h3>
            <p className="text-slate-500">Дизайн продуманий до дрібниць, щоб зробити навчання приємним.</p>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
