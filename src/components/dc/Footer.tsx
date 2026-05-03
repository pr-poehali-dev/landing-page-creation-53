import Icon from "@/components/ui/icon";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-10 border-b border-slate-800 pb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-brand-primary rounded-xl flex items-center justify-center shadow-brand">
                <Icon name="Home" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-lg">ДомКонтроль</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500">ООО Венту</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              Строительство ИЖС и ремонт под ключ во Владивостоке, Артёме и пригороде с онлайн-трансляцией этапов.
            </p>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="tel:+74230000000" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={14} className="text-brand-primary" />
                  +7 (423) 000-00-00
                </a>
              </li>
              <li>
                <a href="mailto:info@domcontrol-vl.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={14} className="text-brand-primary" />
                  info@domcontrol-vl.ru
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="MapPin" size={14} className="text-brand-primary mt-0.5 flex-shrink-0" />
                <span>Приморский край, г. Владивосток,<br />п. Трудовое, ул. Чичерина, д. 3</span>
              </li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-white font-display font-bold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "#services", label: "Услуги" },
                { href: "#control", label: "Онлайн-контроль" },
                { href: "#expertise", label: "Специфика ДВ" },
                { href: "#portfolio", label: "Портфолио" },
                { href: "#quiz", label: "Калькулятор сметы" },
                { href: "#faq", label: "FAQ" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-3">
          <p>© 2026 ООО «Венту». Все права защищены. ИНН 2537127968</p>
          <a href="#" className="hover:text-white transition-colors underline underline-offset-2">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
