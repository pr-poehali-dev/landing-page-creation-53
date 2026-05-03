import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Сколько стоят ваши услуги?",
    a: "Стоимость зависит от объёма и сложности проекта. Мы всегда проводим бесплатную консультацию и формируем индивидуальное предложение. Оставьте заявку, и мы свяжемся в течение часа.",
  },
  {
    q: "Как быстро вы начинаете работу?",
    a: "После подписания договора и обсуждения деталей мы приступаем к работе в течение 48 часов. В экстренных случаях — быстрее.",
  },
  {
    q: "Даёте ли вы гарантию на результат?",
    a: "Да. Мы работаем по чёткому техническому заданию и несём ответственность за выполнение всех оговорённых показателей. Если результат не достигнут — дорабатываем бесплатно.",
  },
  {
    q: "Как происходит общение в процессе работы?",
    a: "У вас будет персональный менеджер, который ведёт ваш проект от начала до конца. Общаемся в мессенджере, регулярно предоставляем отчёты и согласовываем каждый важный шаг.",
  },
  {
    q: "Можно ли внести изменения в процессе работы?",
    a: "Конечно. Мы используем гибкую методологию и легко адаптируемся к изменениям. Правки в рамках ТЗ — бесплатно, существенные изменения обсуждаем отдельно.",
  },
  {
    q: "Работаете ли вы с небольшими проектами?",
    a: "Да, мы берёмся за проекты любого масштаба. Небольшие проекты — отличная возможность познакомиться с нами и убедиться в качестве нашей работы.",
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-24 site-bg relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px] -translate-y-1/2" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-neon-yellow" />
            <span className="text-neon-yellow text-sm font-semibold uppercase tracking-widest">FAQ</span>
            <div className="w-8 h-0.5 bg-neon-yellow" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight">
            Частые{" "}
            <span className="text-neon-pink text-glow-pink">вопросы</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`site-card card-border rounded-2xl overflow-hidden transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${openIndex === i ? "border-neon-pink/30" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className={`font-semibold text-base transition-colors ${openIndex === i ? "text-neon-pink" : "text-white/90 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${openIndex === i ? "bg-neon-pink text-white rotate-45" : "bg-white/10 text-white/50 group-hover:bg-white/20"}`}>
                  <Icon name="Plus" size={16} />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <p className="text-white/60 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
