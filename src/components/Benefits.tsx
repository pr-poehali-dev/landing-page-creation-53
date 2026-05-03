import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const benefits = [
  {
    icon: "Rocket",
    color: "neon-pink",
    title: "Быстрый старт",
    desc: "Начинаем работу в течение 48 часов после заключения договора. Никаких долгих согласований.",
    glow: "glow-pink",
  },
  {
    icon: "BarChart3",
    color: "neon-cyan",
    title: "Измеримый результат",
    desc: "Каждое действие направлено на конкретные метрики. Вы видите прогресс в реальном времени.",
    glow: "glow-cyan",
  },
  {
    icon: "Users",
    color: "neon-yellow",
    title: "Команда экспертов",
    desc: "Над вашим проектом работают специалисты с опытом от 5 лет в своей области.",
    glow: "",
  },
  {
    icon: "RefreshCw",
    color: "neon-pink",
    title: "Гибкость",
    desc: "Корректируем стратегию на ходу, если что-то меняется. Мы адаптируемся под вас.",
    glow: "glow-pink",
  },
  {
    icon: "Lock",
    color: "neon-cyan",
    title: "Конфиденциальность",
    desc: "Ваши данные и проекты под защитой. Подписываем NDA по первому запросу.",
    glow: "glow-cyan",
  },
  {
    icon: "HeartHandshake",
    color: "neon-yellow",
    title: "Поддержка 24/7",
    desc: "Мы всегда на связи. Любые вопросы решаются в течение часа в рабочее время.",
    glow: "",
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="benefits" ref={sectionRef} className="py-24 site-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-pink/3 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-neon-cyan" />
            <span className="text-neon-cyan text-sm font-semibold uppercase tracking-widest">Почему мы</span>
            <div className="w-8 h-0.5 bg-neon-cyan" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight">
            Наши{" "}
            <span className="text-neon-pink text-glow-pink">преимущества</span>
          </h2>
          <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
            Мы собрали всё необходимое для вашего успеха в одном месте
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`group site-card card-border rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 cursor-default ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`w-14 h-14 rounded-2xl bg-${b.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <Icon name={b.icon} size={26} className={`text-${b.color}`} />
              </div>
              <h3 className="font-display font-bold text-white text-xl uppercase mb-3">{b.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{b.desc}</p>
              <div className={`w-8 h-0.5 bg-${b.color} mt-6 group-hover:w-16 transition-all duration-300`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
