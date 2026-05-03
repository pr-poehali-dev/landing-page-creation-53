import Icon from "@/components/ui/icon";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient pt-20 overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
        {/* Text */}
        <div className="lg:col-span-7 space-y-8 animate-slide-up z-10">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-semibold">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-primary" />
            </span>
            Строим во Владивостоке и пригороде
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white">
            Пока вы доверяете ремонт «дяде Ване»...
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
            ...мы сдали{" "}
            <span className="text-white font-bold border-b-2 border-brand-primary">47 объектов</span>{" "}
            с онлайн-контролем 24/7 и официальным договором от ООО «Венту».
            Без авансов. Без сюрпризов в смете.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#quiz"
              className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-brand-hover transition-all shadow-brand flex items-center justify-center gap-2 group"
            >
              Рассчитать стоимость
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-white/20 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="Play" size={18} />
              Смотреть 3D-туры
            </a>
          </div>
        </div>

        {/* Floating cards */}
        <div className="hidden lg:block lg:col-span-5 relative h-full min-h-[420px]">
          <div className="absolute top-10 right-0 w-72 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl animate-float">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-primary/20 flex items-center justify-center text-2xl">📱</div>
              <div>
                <p className="text-white font-bold">Фото-отчеты</p>
                <p className="text-slate-300 text-sm">Каждый день в Telegram</p>
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -left-10 w-80 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl animate-float-delay1">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-2xl">📜</div>
              <div>
                <p className="text-white font-bold">Договор с печатью</p>
                <p className="text-slate-300 text-sm">Фиксированная смета ООО</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 right-10 w-64 bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-2xl animate-float-delay2">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-400">
                <Icon name="Star" size={22} />
              </div>
              <div>
                <p className="text-white font-bold text-2xl">4.9</p>
                <p className="text-slate-300 text-sm">Рейтинг в Яндекс</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
