import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Гостиная в скандинавском стиле",
    category: "Жилые помещения",
    tag: "Дизайн",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/2b3ae2f0-5cb3-465e-834f-8493bcbec5df.jpg",
    color: "neon-pink",
  },
  {
    id: 2,
    title: "Современная кухня-студия",
    category: "Кухни",
    tag: "Ремонт",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/31084585-e540-42b8-b366-a6e5e357646e.jpg",
    color: "neon-cyan",
  },
  {
    id: 3,
    title: "Spa-ванная комната",
    category: "Санузлы",
    tag: "Люкс",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/87a8ff1e-bcfc-49af-9167-fbbb5d316f03.jpg",
    color: "neon-pink",
  },
  {
    id: 4,
    title: "Стильная спальня",
    category: "Спальни",
    tag: "Дизайн",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/816d435c-978a-463d-82a2-8db831b32592.jpg",
    color: "neon-yellow",
  },
  {
    id: 5,
    title: "Офис open-space",
    category: "Коммерческая недвижимость",
    tag: "Офис",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/0bb89358-6574-4318-97b3-65dd012fe2b7.jpg",
    color: "neon-cyan",
  },
  {
    id: 6,
    title: "Дизайнерская прихожая",
    category: "Прихожие",
    tag: "Ремонт",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/b996578e-4ce6-4ce5-899c-295f85638de4.jpg",
    color: "neon-pink",
  },
];

const categories = ["Все", "Жилые помещения", "Кухни", "Санузлы", "Спальни", "Коммерческая недвижимость", "Прихожие"];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Все");
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const filtered = activeCategory === "Все"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const currentLightbox = lightbox !== null ? projects.find((p) => p.id === lightbox) : null;

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 site-surface relative overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-neon-cyan/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-pink/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-neon-pink" />
            <span className="text-neon-pink text-sm font-semibold uppercase tracking-widest">Портфолио</span>
            <div className="w-8 h-0.5 bg-neon-pink" />
          </div>
          <h2 className="font-display font-black text-4xl sm:text-5xl text-white uppercase leading-tight">
            Наши{" "}
            <span className="text-neon-cyan text-glow-cyan">работы</span>
          </h2>
          <p className="text-white/50 text-lg mt-4">
            Галерея реализованных проектов
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-neon-pink text-white glow-pink"
                  : "bg-white/5 text-white/60 border border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className={`group cursor-pointer rounded-3xl overflow-hidden card-border relative transition-all duration-500 hover:-translate-y-2 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              onClick={() => setLightbox(project.id)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`text-xs font-bold uppercase tracking-wider text-${project.color} bg-${project.color}/10 px-3 py-1 rounded-full`}>
                  {project.tag}
                </span>
                <h3 className="font-display font-bold text-white text-lg uppercase mt-2">{project.title}</h3>
                <p className="text-white/60 text-sm mt-1">{project.category}</p>
                <div className="mt-3 flex items-center gap-2 text-white/80 text-sm">
                  <Icon name="Expand" size={14} />
                  <span>Открыть</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {currentLightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} />
          </button>
          <div
            className="max-w-4xl w-full rounded-3xl overflow-hidden site-card card-border"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentLightbox.image}
              alt={currentLightbox.title}
              className="w-full object-contain max-h-[70vh]"
            />
            <div className="p-6">
              <span className={`text-xs font-bold uppercase tracking-wider text-${currentLightbox.color}`}>
                {currentLightbox.tag} · {currentLightbox.category}
              </span>
              <h3 className="font-display font-bold text-white text-2xl uppercase mt-2">{currentLightbox.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
