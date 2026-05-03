import { useState } from "react";
import Icon from "@/components/ui/icon";

type Step = 1 | 2 | 3 | 4 | 5;

export default function Quiz() {
  const [step, setStep] = useState<Step>(1);
  const [data, setData] = useState({ type: "", area: 85, region: "", start: "", name: "", phone: "" });
  const [sent, setSent] = useState(false);

  const progress = (step / 5) * 100;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="quiz" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.3)_1px,transparent_0)] [background-size:32px_32px]" />
      {/* Progress bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-slate-800">
        <div className="h-full bg-brand-primary transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-black text-white mb-3">
            Узнайте стоимость без звонка
          </h2>
          <p className="text-slate-400 text-lg">
            Пройдите тест из 4 вопросов. В конце — скидка 5% и PDF «Топ-10 ошибок ремонта»
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl min-h-[380px]">
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-8">Что планируете сделать?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { emoji: "🏠", label: "Построить дом", val: "house" },
                  { emoji: "🏢", label: "Сделать ремонт", val: "flat" },
                  { emoji: "🔧", label: "Мелкий ремонт", val: "small" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => { setData({ ...data, type: opt.val }); setStep(2); }}
                    className="p-6 border-2 border-slate-200 rounded-2xl hover:border-brand-primary hover:bg-orange-50 transition-all group flex flex-col items-center text-center"
                  >
                    <span className="text-5xl mb-4 group-hover:scale-110 transition-transform inline-block">{opt.emoji}</span>
                    <span className="font-bold text-slate-800">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-8">В каком районе объект?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {[
                  { val: "sedanka", label: "Седанка / Пригород", sub: "Учтём сложный грунт" },
                  { val: "artem", label: "г. Артём", sub: "" },
                  { val: "vlad_center", label: "Владивосток (Город)", sub: "Новостройки и вторичка" },
                  { val: "russky", label: "Остров Русский", sub: "Учтём ветровую нагрузку" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => { setData({ ...data, region: opt.val }); setStep(3); }}
                    className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-primary hover:bg-orange-50 transition-all text-left"
                  >
                    <span className="font-bold text-slate-800 block">{opt.label}</span>
                    {opt.sub && <span className="text-xs text-slate-500 mt-1 block">{opt.sub}</span>}
                  </button>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button onClick={() => setStep(1)} className="text-slate-400 hover:text-slate-600 font-medium text-sm">
                  ← Назад
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-8">Укажите примерную площадь</h3>
              <div className="max-w-xl mx-auto text-center py-4">
                <div className="text-5xl font-black text-brand-primary mb-8">{data.area} м²</div>
                <input
                  type="range"
                  min={20}
                  max={300}
                  step={5}
                  value={data.area}
                  onChange={(e) => setData({ ...data, area: Number(e.target.value) })}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer accent-brand-primary bg-slate-200"
                />
                <div className="flex justify-between text-slate-400 text-sm mt-2">
                  <span>20 м²</span>
                  <span>300+ м²</span>
                </div>
              </div>
              <div className="flex justify-between max-w-xl mx-auto mt-6">
                <button onClick={() => setStep(2)} className="text-slate-400 hover:text-slate-600 font-medium">← Назад</button>
                <button onClick={() => setStep(4)} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition">
                  Далее →
                </button>
              </div>
            </div>
          )}

          {/* Step 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-slate-900 text-center mb-8">Когда планируете начать?</h3>
              <div className="flex flex-col gap-3 max-w-md mx-auto">
                {[
                  { val: "asap", label: "Срочно" },
                  { val: "month", label: "В этом месяце" },
                  { val: "later", label: "В следующем сезоне (прицениваюсь)" },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    onClick={() => { setData({ ...data, start: opt.val }); setStep(5); }}
                    className="p-4 border-2 border-slate-200 rounded-xl hover:border-brand-primary hover:bg-orange-50 transition-all text-center font-bold text-slate-800"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
              <div className="flex justify-center mt-6">
                <button onClick={() => setStep(3)} className="text-slate-400 hover:text-slate-600 font-medium text-sm">
                  ← Назад
                </button>
              </div>
            </div>
          )}

          {/* Step 5 */}
          {step === 5 && !sent && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900">Смета готова!</h3>
                <p className="text-slate-500 mt-2">
                  Оставьте WhatsApp, чтобы закрепить скидку 5% и получить расчёт + бонусный PDF.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Ваше имя"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none transition bg-slate-50 font-medium"
                />
                <input
                  type="tel"
                  required
                  placeholder="+7 (___) ___-__-__"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                  className="w-full px-5 py-4 rounded-xl border-2 border-slate-200 focus:border-brand-primary focus:outline-none transition bg-slate-50 font-medium"
                />
                <button type="submit" className="w-full bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-hover transition shadow-brand">
                  Получить расчёт + Бонусы
                </button>
                <p className="text-xs text-center text-slate-400">Перезвоним в рабочее время для уточнения деталей</p>
              </form>
            </div>
          )}

          {/* Sent */}
          {step === 5 && sent && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="CheckCircle" size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Заявка принята!</h3>
              <p className="text-slate-500 max-w-xs">Смета и бонусный PDF придут в WhatsApp в течение 30 минут</p>
              <button
                onClick={() => { setSent(false); setStep(1); setData({ type: "", area: 85, region: "", start: "", name: "", phone: "" }); }}
                className="mt-8 text-brand-primary font-semibold hover:underline text-sm"
              >
                Отправить ещё одну заявку
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
