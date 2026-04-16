import { useState } from "react";
import { glossary } from "@/data/content";
import { Search, BookText } from "lucide-react";
import { motion } from "framer-motion";

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = glossary.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort alphabetically
  const sortedGlossary = [...filteredGlossary].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-secondary/10 text-secondary mb-4">
          <BookText className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">Юридичний словник</h1>
        
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Пошук термінів..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white border-2 border-slate-200 text-lg shadow-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all duration-300"
          />
        </div>
      </div>

      {sortedGlossary.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">За запитом "{searchTerm}" нічого не знайдено.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedGlossary.map((item, index) => (
            <motion.div
              key={item.term}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className="bg-card rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-primary mb-3 font-display border-b border-slate-100 pb-3">
                {item.term}
              </h3>
              <p className="text-muted-foreground leading-relaxed flex-grow">
                {item.definition}
              </p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
