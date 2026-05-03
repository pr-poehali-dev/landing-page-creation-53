import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 section-reveal ${visible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Наши услуги
          </h2>
          <p className="text-lg text-slate-600">
            Комплексные решения для строительства и ремонта с учётом сложного климата Приморского края.
          </p>
        </div>

        {/* Bento grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 section-reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.15s" }}>
          {/* Large: Construction */}
          <div className="bento-card md:col-span-2 bg-white rounded-3xl p-8 relative overflow-hidden group border border-slate-100 flex flex-col justify-end min-h-[300px]">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
            <div className="relative z-10 text-white">
              <span className="inline-block bg-brand-primary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4">
                Популярно
              </span>
              <h3 className="font-display text-3xl font-bold mb-2">Строительство ИЖС</h3>
              <p className="text-slate-300 max-w-md mb-5 hidden sm:block">
                Каменные, каркасные и комбинированные дома с усиленным фундаментом. Тёплый контур от 85 000 ₽/м².
              </p>
              <a href="#quiz" className="inline-flex items-center gap-2 text-brand-primary font-bold hover:text-white transition-colors">
                Рассчитать дом <Icon name="ArrowRight" size={18} />
              </a>
            </div>
          </div>

          {/* Tall: Repair */}
          <div className="bento-card md:row-span-2 bg-slate-900 rounded-3xl p-8 flex flex-col">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl mb-6">🏢</div>
            <h3 className="font-display text-2xl font-bold text-white mb-3">Ремонт квартир</h3>
            <p className="text-slate-400 mb-6 flex-grow text-sm leading-relaxed">
              Капитальный, евро и косметический ремонт. Работаем в новостройках и вторичке с защитой от влажности. От 8 000 ₽/м².
            </p>
            <ul className="space-y-3 mb-6">
              {["Дизайн-проект в подарок", "Закупка черновых материалов"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <Icon name="Check" size={16} className="text-brand-primary flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a href="#quiz" className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 py-3 rounded-xl font-bold text-center transition-colors">
              Рассчитать ремонт
            </a>
          </div>

          {/* Small: Handyman */}
          <div className="bento-card bg-white border border-slate-200 rounded-3xl p-8 group flex flex-col justify-center min-h-[220px]">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🔧
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Муж на час</h3>
            <p className="text-slate-600 text-sm mb-4">Срочный выезд в Трудовое и Владивосток. Сантехника, электрика, сборка.</p>
            <div className="mt-auto">
              <span className="block text-lg font-bold text-brand-primary mb-1">от 1 500 ₽</span>
              <a href="tel:+74230000000" className="text-sm font-semibold text-slate-900 hover:text-brand-primary transition-colors">
                Вызвать мастера →
              </a>
            </div>
          </div>

          {/* Small: House */}
          <div className="bento-card bg-white border border-slate-200 rounded-3xl p-8 group flex flex-col justify-center min-h-[220px]">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
              🏡
            </div>
            <h3 className="font-display text-xl font-bold text-slate-900 mb-2">Ремонт домов</h3>
            <p className="text-slate-600 text-sm mb-4">Внутренняя отделка, фасады, утепление, замена кровли. Гарантия 3 года.</p>
            <div className="mt-auto">
              <span className="block text-lg font-bold text-brand-primary mb-1">от 12 000 ₽/м²</span>
              <a href="#quiz" className="text-sm font-semibold text-slate-900 hover:text-brand-primary transition-colors">
                Получить смету →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
