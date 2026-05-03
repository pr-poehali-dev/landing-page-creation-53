import { useEffect, useRef, useState } from "react";

const cards = [
  {
    emoji: "🌧️",
    bg: "bg-blue-50",
    title: "Сырость 9 мес/год",
    desc: "Стандартная гидроизоляция здесь не работает. В квартирах используем влагостойкие материалы и принудительную вентиляцию.",
    badge: "23 объекта без плесени",
    badgeClass: "bg-blue-50 text-blue-700",
  },
  {
    emoji: "🌪️",
    bg: "bg-slate-100",
    title: "Ветры до 35 м/с",
    desc: "При строительстве ИЖС (особенно на Русском и Седанке) закладываем усиленные стропильные системы и фасадный крепёж.",
    badge: "Выдержали тайфун 2024",
    badgeClass: "bg-slate-100 text-slate-700",
  },
  {
    emoji: "🌋",
    bg: "bg-orange-50",
    title: "Сейсмика 9 баллов",
    desc: "Делаем плавающие фундаменты и используем гибкие инженерные узлы, сертифицированные для Дальнего Востока.",
    badge: "Жёсткий контроль ГОСТ",
    badgeClass: "bg-orange-50 text-orange-700",
  },
];

export default function Expertise() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="expertise" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-14 section-reveal ${visible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
            Ремонт во Владике ≠ ремонт в Москве
          </h2>
          <p className="text-lg text-slate-600">
            Мы знаем, как строить и ремонтировать, чтобы через год не отклеились обои и не треснул фундамент.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow section-reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center text-2xl mb-6`}>
                {card.emoji}
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-slate-600 mb-5 text-sm leading-relaxed">{card.desc}</p>
              <span className={`${card.badgeClass} text-xs font-bold px-3 py-2 rounded-lg inline-block`}>
                {card.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
