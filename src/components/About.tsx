import { useEffect, useRef, useState } from "react";
import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "Target",
    color: "text-neon-pink",
    bg: "bg-neon-pink/10",
    title: "Точечный подход",
    desc: "Изучаем задачу глубоко, чтобы предложить решение именно для вашей ситуации, а не шаблонный ответ.",
  },
  {
    icon: "Layers",
    color: "text-neon-cyan",
    bg: "bg-neon-cyan/10",
    title: "Комплексность",
    desc: "Берём на себя весь процесс — от анализа до финального результата. Вы просто получаете готовое.",
  },
  {
    icon: "Shield",
    color: "text-neon-yellow",
    bg: "bg-neon-yellow/10",
    title: "Гарантия качества",
    desc: "Каждый этап проходит строгий контроль. Мы отвечаем за результат и не сдаём работу, пока не убедимся в качестве.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 site-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-neon-pink" />
            <span className="text-neon-pink text-sm font-semibold uppercase tracking-widest">О нас</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight mb-6">
                Мы делаем то,{" "}
                <span className="gradient-text">что работает</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                Наша команда — это профессионалы с многолетним опытом, которые вкладывают душу в каждый проект. Мы не просто выполняем задачи — мы создаём ценность для вашего бизнеса.
              </p>
              <p className="text-white/50 leading-relaxed mb-8">
                За 5 лет работы мы реализовали более 200 проектов в разных нишах. Каждый раз мы совершенствуемся и берём лучшее из опыта, чтобы ваш проект получил максимальный результат.
              </p>
              <a
                href="#contacts"
                className="inline-flex items-center gap-2 text-neon-cyan font-semibold hover:gap-3 transition-all"
              >
                Поговорить с командой
                <Icon name="ArrowRight" size={18} />
              </a>
            </div>

            <div className="space-y-4">
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`site-card card-border rounded-2xl p-6 flex items-start gap-4 hover:border-white/20 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon name={f.icon} size={22} className={f.color} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg uppercase mb-1">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}