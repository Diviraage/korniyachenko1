import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] w-full flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center">
            <AlertCircle size={48} />
          </div>
        </div>
        <h1 className="text-4xl font-black text-slate-900 mb-4">Сторінку не знайдено</h1>
        <p className="text-lg text-slate-600 mb-8">
          Схоже, ви перейшли за неправильним посиланням або ця сторінка була видалена.
        </p>
        <Link 
          href="/" 
          className="inline-block px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
        >
          Повернутися на головну
        </Link>
      </div>
    </div>
  );
}
