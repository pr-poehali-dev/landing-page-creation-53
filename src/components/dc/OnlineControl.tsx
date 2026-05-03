import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const messages = [
  {
    type: "incoming",
    author: "Прораб Михаил",
    text: "Закончили армирование плиты. Ждём бетон.",
    time: "14:32",
    hasPhoto: true,
  },
  {
    type: "outgoing",
    text: "Отлично, спасибо! Всё по графику?",
    time: "14:45",
  },
  {
    type: "incoming",
    author: "Прораб Михаил",
    text: "Да, идём с опережением на 2 дня. Завтра заливаем.",
    time: "14:48",
  },
];

export default function OnlineControl() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [msgStep, setMsgStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const t = setInterval(() => setMsgStep((s) => (s + 1) % (messages.length + 1)), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="control" ref={ref} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Phone mockup */}
          <div className={`relative mx-auto lg:mx-0 w-full max-w-xs section-reveal ${visible ? "visible" : ""}`}>
            <div className="absolute inset-0 scale-110 bg-brand-primary/10 rounded-full blur-3xl" />
            <div className="relative bg-slate-900 rounded-[2.8rem] p-2.5 shadow-2xl border-4 border-slate-800 hover:rotate-0 transition-transform duration-500 -rotate-2">
              <div className="bg-white rounded-[2.3rem] h-[580px] overflow-hidden flex flex-col">
                {/* Header */}
                <div className="bg-slate-100 px-4 pt-8 pb-4 border-b border-slate-200 flex items-center gap-3">
                  <div className="w-9 h-9 bg-brand-primary rounded-full flex items-center justify-center text-white font-bold text-xs">
                    ДК
                  </div>
                  <div>
                    <div className="font-bold text-slate-800 text-sm">Объект Седанка (Чат)</div>
                    <div className="text-xs text-brand-primary">3 участника · онлайн</div>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 p-4 space-y-3 overflow-hidden bg-slate-50">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex gap-2 transition-all duration-500 ${i <= msgStep - 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"} ${msg.type === "outgoing" ? "flex-row-reverse" : ""}`}
                    >
                      {msg.type === "incoming" && (
                        <div className="w-7 h-7 rounded-full bg-slate-300 flex-shrink-0 flex items-center justify-center text-xs font-bold text-slate-600">
                          П
                        </div>
                      )}
                      <div
                        className={`p-3 rounded-2xl shadow-sm text-sm max-w-[85%] ${
                          msg.type === "incoming"
                            ? "bg-white rounded-tl-none text-slate-700"
                            : "bg-blue-100 rounded-tr-none text-slate-800 border border-blue-200"
                        }`}
                      >
                        {msg.author && (
                          <p className="font-bold text-xs text-brand-primary mb-1">{msg.author}</p>
                        )}
                        <p>{msg.text}</p>
                        {msg.hasPhoto && (
                          <div
                            className="mt-2 w-full h-20 rounded-lg bg-cover bg-center"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&q=80')" }}
                          />
                        )}
                        <p className="text-[10px] text-slate-400 mt-1 text-right">{msg.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className={`space-y-8 section-reveal ${visible ? "visible" : ""}`} style={{ transitionDelay: "0.2s" }}>
            <div>
              <div className="text-brand-primary font-bold tracking-widest uppercase text-sm mb-3">
                Главное отличие
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
                Видите каждый гвоздь, не выходя из офиса
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Забудьте о пробках и поездках на объект по вечерам. Мы оцифровали процесс строительства, чтобы вы контролировали его со смартфона.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: "Camera", bg: "bg-blue-50", color: "text-blue-500", title: "Ежедневные фото-отчёты", desc: "Закрытый чат в Telegram. Фотографии каждого скрытого этапа работ до его закрытия." },
                { icon: "Video", bg: "bg-red-50", color: "text-red-500", title: "Прямая видеосвязь", desc: "По вашему запросу прораб выйдет на видеосвязь с объекта и покажет интересующие узлы." },
                { icon: "CheckSquare", bg: "bg-green-50", color: "text-green-600", title: "Удалённая приёмка этапов", desc: "Утверждайте промежуточные этапы (черновая электрика, трубы) онлайн по чек-листу." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${item.bg} ${item.color} flex items-center justify-center`}>
                    <Icon name={item.icon} size={22} />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
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
