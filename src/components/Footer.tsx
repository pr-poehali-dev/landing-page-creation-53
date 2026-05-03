import Icon from "@/components/ui/icon";

const links = [
  { href: "#about", label: "О услуге" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#contacts", label: "Контакты" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="site-bg border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-neon-pink flex items-center justify-center glow-pink">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <span className="font-display font-bold text-xl text-white tracking-wider uppercase">
                BrandName
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Профессиональные услуги для вашего бизнеса. Качество, которое говорит само за себя.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Навигация</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/40 text-sm hover:text-neon-pink transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold uppercase tracking-widest text-xs mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+78001234567" className="flex items-center gap-2 text-white/40 text-sm hover:text-neon-pink transition-colors">
                  <Icon name="Phone" size={14} />
                  +7 (800) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:hello@brandname.ru" className="flex items-center gap-2 text-white/40 text-sm hover:text-neon-cyan transition-colors">
                  <Icon name="Mail" size={14} />
                  hello@brandname.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2026 BrandName. Все права защищены.</p>
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <Icon name="Heart" size={12} className="text-neon-pink" />
            <span>Сделано с любовью</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
