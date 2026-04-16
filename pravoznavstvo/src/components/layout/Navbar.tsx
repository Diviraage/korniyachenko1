import { Link, useRoute } from "wouter";
import { BookOpen, BookText, HelpCircle, Info, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

const NavLink = ({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) => {
  const [isActive] = useRoute(href);
  
  return (
    <Link 
      href={href} 
      className={cn(
        "flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium transition-all duration-300",
        isActive 
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/20" 
          : "text-foreground/70 hover:bg-primary/10 hover:text-primary"
      )}
    >
      <Icon size={18} className={isActive ? "text-primary-foreground" : "text-primary"} />
      {children}
    </Link>
  );
};

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
              <Scale size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-foreground leading-tight">
                Правознавство
              </h1>
              <span className="text-xs font-semibold text-secondary tracking-wider uppercase">9 Клас</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink href="/topics" icon={BookOpen}>Теми</NavLink>
            <NavLink href="/glossary" icon={BookText}>Словник</NavLink>
            <NavLink href="/quiz" icon={HelpCircle}>Тестування</NavLink>
            <NavLink href="/about" icon={Info}>Про курс</NavLink>
          </nav>

          {/* Mobile menu toggle could go here, for now relying on bottom nav for mobile in a real app, 
              but we'll keep it simple and flex-wrap if needed, or just hide on extremely small screens 
              and rely on the homepage grid. */}
        </div>
      </div>
    </header>
  );
}
