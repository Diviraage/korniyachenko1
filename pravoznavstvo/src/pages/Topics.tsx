import { useState } from "react";
import { topics } from "@/data/content";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, BookOpen, Landmark, ShieldCheck, Building, Settings, Scale, Network, Users, Gavel } from "lucide-react";
import { cn } from "@/lib/utils";

// Map string icon names from data to actual Lucide components
const IconMap: Record<string, any> = {
  Landmark, ShieldCheck, Building, Settings, Scale, BookOpen, Network, Users, Gavel
};

export default function Topics() {
  const [openTopicId, setOpenTopicId] = useState<string | null>(topics[0].id);

  const toggleTopic = (id: string) => {
    setOpenTopicId(prev => prev === id ? null : id);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 text-primary mb-4">
          <BookOpen className="w-6 h-6" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">Теоретичний матеріал</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Ознайомся з основними поняттями теорії держави і права. Натисни на тему, щоб розгорнути конспект.
        </p>
      </div>

      <div className="space-y-4">
        {topics.map((topic, index) => {
          const isOpen = openTopicId === topic.id;
          const Icon = IconMap[topic.icon] || BookOpen;

          return (
            <motion.div 
              key={topic.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={cn(
                "bg-card rounded-2xl border overflow-hidden transition-all duration-300",
                isOpen 
                  ? "border-primary shadow-lg shadow-primary/10" 
                  : "border-border shadow-sm hover:border-primary/40 hover:shadow-md"
              )}
            >
              <button
                onClick={() => toggleTopic(topic.id)}
                className="w-full px-6 py-5 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 text-left"
              >
                <div className="flex items-center gap-4">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300",
                    isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500 group-hover:text-primary"
                  )}>
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{topic.title}</h2>
                </div>
                <div className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300",
                  isOpen ? "rotate-180 bg-primary/10 text-primary" : "bg-slate-50 text-slate-400"
                )}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="h-px w-full bg-border mb-6"></div>
                      <div className="prose prose-slate prose-lg max-w-none text-muted-foreground whitespace-pre-wrap">
                        {/* Process simple bullet points for better rendering */}
                        {topic.content.split('\n').map((paragraph, i) => {
                          if (paragraph.trim().startsWith('•')) {
                            return (
                              <div key={i} className="flex items-start gap-3 my-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 shrink-0"></div>
                                <p className="m-0 leading-relaxed text-slate-700">{paragraph.replace('•', '').trim()}</p>
                              </div>
                            );
                          }
                          return <p key={i} className="my-3 leading-relaxed">{paragraph}</p>;
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
