import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

export default function Trust() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-24 bg-slate-900 text-white border-t-4 border-brand-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className={`section-reveal ${visible ? "visible" : ""}`}>
            <h2 className="font-display text-3xl md:text-4xl font-black mb-5 leading-tight">
              Как выглядит честный договор
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Это не расписка на коленке с бригадиром из интернета. Это официальный документ с зарегистрированным юрлицом.
            </p>
            <ul className="space-y-4">
              {[
                "Смета фиксируется юридически (доплаты только по вашему желанию)",
                "Оплата строго по факту сдачи этапов работ",
                "Штраф 0,1% в нашу сторону за каждый день просрочки",
                "Официальная гарантия от компании на 3 года",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Icon name="Check" size={22} className="text-brand-primary flex-shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card */}
          <div className={`section-reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <div className="bg-white p-8 rounded-3xl text-slate-800 shadow-2xl relative rotate-2 hover:rotate-0 transition-transform duration-300 max-w-sm mx-auto lg:mx-0">
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg">
                <Icon name="CheckCircle" size={24} />
              </div>
              <h3 className="font-display text-xl font-bold mb-4 border-b border-slate-100 pb-4">
                Реквизиты компании
              </h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: "Организация", value: 'ООО "Венту"', bold: true },
                  { label: "ИНН", value: "2537127968" },
                  { label: "ОГРН", value: "1162536082070" },
                  { label: "Руководитель", value: "Таланова О.Н." },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="text-slate-500">{row.label}:</span>
                    <span className={`text-slate-900 ${row.bold ? "font-bold" : "font-medium"}`}>{row.value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-slate-100 text-center text-xs text-slate-400">
                Проверьте нас в открытых базах перед звонком:<br />
                СБИС, Rusprofile, РБК Компании. Мы не прячемся.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
