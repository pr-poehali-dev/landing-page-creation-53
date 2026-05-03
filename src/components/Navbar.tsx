import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { href: "#about", label: "О услуге" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#contacts", label: "Контакты" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--site-bg)]/90 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-neon-pink flex items-center justify-center glow-pink">
              <Icon name="Zap" size={16} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl text-white tracking-wider uppercase">
              BrandName
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors hover:text-neon-cyan"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contacts"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neon-pink text-white font-semibold text-sm glow-pink hover:scale-105 transition-transform"
          >
            Связаться
            <Icon name="ArrowRight" size={14} />
          </a>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[var(--site-bg)] border-t border-white/10 px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/80 hover:text-neon-pink font-medium text-lg transition-colors py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacts"
            onClick={() => setMenuOpen(false)}
            className="mt-2 text-center px-5 py-3 rounded-full bg-neon-pink text-white font-semibold"
          >
            Связаться
          </a>
        </div>
      )}
    </header>
  );
}
