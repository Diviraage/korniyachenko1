import { Scale } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <Scale size={24} className="text-secondary" />
            <span className="text-lg font-bold text-white font-display">Основи правознавства</span>
          </div>
          
          <div className="text-center md:text-right text-sm">
            <p>Навчальний портал для учнів 9 класу.</p>
            <p className="mt-1 opacity-60">Створено для освітніх цілей.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
