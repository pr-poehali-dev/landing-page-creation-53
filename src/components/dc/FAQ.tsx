import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const faqs = [
  {
    q: "Насколько реально фиксируется смета?",
    a: "Смета прописывается в приложении к договору с ООО «Венту». Изменения возможны только по инициативе заказчика и оформляются доп. соглашением. Скрытых доплат не бывает.",
  },
  {
    q: "Как работает онлайн-контроль?",
    a: "Вы получаете доступ в закрытый Telegram-чат, где прораб ежедневно публикует фотографии всех скрытых работ. По запросу выходим на видеосвязь прямо с объекта.",
  },
  {
    q: "Работаете ли вы на Острове Русский и в Артёме?",
    a: "Да. Мы работаем по всему Владивостоку, Артёму, Седанке, Острову Русский и ближайшему пригороду. Выезд на замер — бесплатно.",
  },
  {
    q: "Какой срок ремонта однокомнатной квартиры?",
    a: "Евроремонт однушки (40–45 м²) с нуля занимает около 45–60 дней. Сроки фиксируются в договоре, за просрочку по нашей вине — штраф 0,1% в день.",
  },
  {
    q: "Нужен ли аванс?",
    a: "Нет. Оплата строго по этапам: черновые работы, чистовые работы, сдача. Вы платите только за то, что уже сделано и принято вами.",
  },
  {
    q: "Даёте ли гарантию после сдачи объекта?",
    a: "Да, официальная гарантия от ООО «Венту» — 3 года на все виды работ. При гарантийном случае выезжаем и устраняем бесплатно.",
  },
];

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 section-reveal ${visible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Частые вопросы
          </h2>
          <p className="text-slate-600 text-lg">Отвечаем честно и по делу</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl border border-slate-100 overflow-hidden transition-shadow hover:shadow-md section-reveal ${visible ? "visible" : ""} ${open === i ? "border-brand-primary/30" : ""}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold leading-snug transition-colors ${open === i ? "text-brand-primary" : "text-slate-900 group-hover:text-slate-700"}`}>
                  {faq.q}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all ${open === i ? "bg-brand-primary text-white rotate-45" : "bg-slate-100 text-slate-400"}`}>
                  <Icon name="Plus" size={16} />
                </div>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <div className="w-full h-px bg-slate-100 mb-4" />
                  <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
