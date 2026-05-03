import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number; color: string }[] = [];
    const colors = ["#FF2D78", "#00F5FF", "#FFE600"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });
      animId = requestAnimationFrame(animate);
    };
    animate();

    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden site-bg noise-bg">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-pink/20 rounded-full blur-[100px] animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/20 rounded-full blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-neon-yellow/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center pt-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-neon-cyan animate-pulse" />
          Современный подход к вашему делу
        </div>

        <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-8xl text-white mb-6 leading-[1.0] tracking-tight uppercase">
          Создаём{" "}
          <span className="gradient-text text-glow-pink">результаты</span>
          <br />
          которые{" "}
          <span className="text-neon-cyan text-glow-cyan">работают</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          Профессиональный подход, современные технологии и команда экспертов — всё для достижения ваших целей. Доверяйте лучшим.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon-pink text-white font-bold text-base glow-pink hover:scale-105 transition-transform"
          >
            Узнать больше
            <Icon name="ArrowRight" size={18} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-neon-cyan hover:text-neon-cyan transition-colors backdrop-blur-sm"
          >
            <Icon name="Play" size={16} />
            Смотреть работы
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto">
          {[
            { value: "200+", label: "Проектов" },
            { value: "98%", label: "Довольных клиентов" },
            { value: "5 лет", label: "На рынке" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-3xl sm:text-4xl gradient-text">{stat.value}</div>
              <div className="text-white/50 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <Icon name="ChevronDown" size={16} />
      </div>
    </section>
  );
}
