import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-sm border-b border-slate-200/60" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 z-50">
            <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-brand">
              <Icon name="Home" size={20} className="text-white" />
            </div>
            <div>
              <div className={`font-display font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                ДомКонтроль
              </div>
              <div className={`text-[10px] uppercase tracking-widest font-semibold transition-colors ${scrolled ? "text-slate-400" : "text-slate-300"}`}>
                ООО Венту
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#control", label: "Онлайн-контроль" },
              { href: "#expertise", label: "Специфика ДВ" },
              { href: "#portfolio", label: "Портфолио" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-brand-primary ${
                  scrolled ? "text-slate-600" : "text-slate-200"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <a
                href="tel:+74230000000"
                className={`block font-bold text-lg hover:text-brand-primary transition-colors ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                +7 (423) 000-00-00
              </a>
              <span className="text-xs font-medium flex items-center justify-end gap-1 text-green-500">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Сейчас работаем
              </span>
            </div>
            <a
              href="#quiz"
              className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-brand-hover transition-all shadow-brand hover:-translate-y-0.5 transform"
            >
              Рассчитать смету
            </a>
          </div>

          {/* Mobile button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden z-50 p-2 transition-colors ${
              scrolled || menuOpen ? "text-slate-900" : "text-white"
            }`}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full min-h-screen bg-white pt-24 px-6 pb-8 shadow-2xl">
          <div className="flex flex-col gap-6 text-center">
            {[
              { href: "#services", label: "Услуги" },
              { href: "#control", label: "Онлайн-контроль" },
              { href: "#expertise", label: "Специфика ДВ" },
              { href: "#portfolio", label: "Портфолио" },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={close}
                className="text-2xl font-bold text-slate-800 hover:text-brand-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-6 border-t border-slate-100">
              <a href="tel:+74230000000" className="block text-2xl font-bold text-brand-primary mb-4">
                +7 (423) 000-00-00
              </a>
              <a
                href="#quiz"
                onClick={close}
                className="block w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg text-center"
              >
                Рассчитать смету
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
