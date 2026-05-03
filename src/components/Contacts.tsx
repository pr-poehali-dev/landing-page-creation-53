import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" ref={sectionRef} className="py-24 site-surface relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-neon-pink/50 to-transparent" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/8 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-neon-cyan" />
              <span className="text-neon-cyan text-sm font-semibold uppercase tracking-widest">Контакты</span>
              <div className="w-8 h-0.5 bg-neon-cyan" />
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight">
              Начнём{" "}
              <span className="gradient-text">вместе?</span>
            </h2>
            <p className="text-white/50 text-lg mt-4 max-w-xl mx-auto">
              Оставьте заявку и мы свяжемся с вами в течение часа
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="site-card card-border rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-pink/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={22} className="text-neon-pink" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Телефон</div>
                  <a href="tel:+78001234567" className="text-white font-semibold text-lg hover:text-neon-pink transition-colors">
                    +7 (800) 123-45-67
                  </a>
                </div>
              </div>

              <div className="site-card card-border rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-cyan/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={22} className="text-neon-cyan" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Email</div>
                  <a href="mailto:hello@brandname.ru" className="text-white font-semibold text-lg hover:text-neon-cyan transition-colors">
                    hello@brandname.ru
                  </a>
                </div>
              </div>

              <div className="site-card card-border rounded-2xl p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-neon-yellow/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={22} className="text-neon-yellow" />
                </div>
                <div>
                  <div className="text-white/50 text-xs uppercase tracking-widest mb-1">Адрес</div>
                  <p className="text-white font-semibold">Москва, ул. Примерная, д. 1</p>
                </div>
              </div>

              <div className="site-card card-border rounded-2xl p-6">
                <div className="text-white/50 text-xs uppercase tracking-widest mb-4">Мы в соцсетях</div>
                <div className="flex gap-3">
                  {[
                    { icon: "Send", label: "Telegram", color: "text-neon-cyan" },
                    { icon: "Instagram", label: "Instagram", color: "text-neon-pink" },
                    { icon: "Youtube", label: "YouTube", color: "text-red-400" },
                  ].map((s) => (
                    <button
                      key={s.label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 flex items-center justify-center transition-all hover:scale-110"
                      title={s.label}
                    >
                      <Icon name={s.icon} size={18} className={s.color} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="site-card card-border rounded-3xl p-8">
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-display font-bold text-white text-2xl uppercase mb-6">Оставить заявку</h3>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Ваше имя</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-pink transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Телефон</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (___) ___-__-__"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-pink transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/50 text-xs uppercase tracking-widest block mb-2">Сообщение</label>
                    <textarea
                      rows={4}
                      placeholder="Расскажите о вашем проекте..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-neon-pink transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neon-pink text-white font-bold text-base glow-pink hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                  >
                    Отправить заявку
                    <Icon name="Send" size={18} />
                  </button>
                  <p className="text-white/30 text-xs text-center">Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности</p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-neon-cyan/10 flex items-center justify-center mb-6">
                    <Icon name="CheckCircle" size={40} className="text-neon-cyan" />
                  </div>
                  <h3 className="font-display font-bold text-white text-2xl uppercase mb-3">Заявка отправлена!</h3>
                  <p className="text-white/60">Мы свяжемся с вами в течение часа в рабочее время</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }); }}
                    className="mt-8 text-neon-pink font-semibold hover:underline text-sm"
                  >
                    Отправить ещё одну заявку
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
