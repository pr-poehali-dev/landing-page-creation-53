import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const projects = [
  {
    id: 1,
    title: "Квартира в новостройке, 72 м²",
    category: "Ремонт квартир",
    location: "Владивосток, Первореченский р-н",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/2b3ae2f0-5cb3-465e-834f-8493bcbec5df.jpg",
    tag: "Евроремонт",
  },
  {
    id: 2,
    title: "Кухня-студия под ключ",
    category: "Ремонт квартир",
    location: "Артём",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/31084585-e540-42b8-b366-a6e5e357646e.jpg",
    tag: "Кухня",
  },
  {
    id: 3,
    title: "Ванная комната с нуля",
    category: "Ремонт квартир",
    location: "Владивосток, Чуркин",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/87a8ff1e-bcfc-49af-9167-fbbb5d316f03.jpg",
    tag: "Санузел",
  },
  {
    id: 4,
    title: "Спальня и гардеробная",
    category: "Ремонт квартир",
    location: "Седанка",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/816d435c-978a-463d-82a2-8db831b32592.jpg",
    tag: "Спальня",
  },
  {
    id: 5,
    title: "Офис 120 м² под ключ",
    category: "Коммерческая",
    location: "Владивосток, центр",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/0bb89358-6574-4318-97b3-65dd012fe2b7.jpg",
    tag: "Офис",
  },
  {
    id: 6,
    title: "Прихожая и коридор",
    category: "Ремонт квартир",
    location: "Владивосток, Снеговая падь",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/b996578e-4ce6-4ce5-899c-295f85638de4.jpg",
    tag: "Прихожая",
  },
  {
    id: 7,
    title: "Ремонт после сдачи застройщика",
    category: "Ремонт квартир",
    location: "Остров Русский",
    image: "https://cdn.poehali.dev/projects/cb76576f-1bc9-47f8-94b6-08888c4f4080/files/9fc6bf99-6cca-4b5b-bd83-dc0652af1517.jpg",
    tag: "Под ключ",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const current = lightbox !== null ? projects.find((p) => p.id === lightbox) : null;

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-14 section-reveal ${visible ? "visible" : ""}`}>
          <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-5 tracking-tight">
            Портфолио
          </h2>
          <p className="text-lg text-slate-600">
            Реальные объекты, которые мы сдали с онлайн-контролем и в срок
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.id}
              onClick={() => setLightbox(project.id)}
              className={`group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 section-reveal ${visible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icon name="Expand" size={18} className="text-white" />
                </div>
              </div>
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-brand-primary bg-orange-50 px-2 py-1 rounded-full">
                    {project.tag}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Icon name="MapPin" size={12} />
                    {project.location}
                  </span>
                </div>
                <h3 className="font-display font-bold text-slate-900 mt-2">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#quiz" className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-brand-hover transition-all shadow-brand">
            Хочу такой же результат
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {current && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition"
            onClick={() => setLightbox(null)}
          >
            <Icon name="X" size={20} />
          </button>
          <div
            className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={current.image} alt={current.title} className="w-full object-contain max-h-[65vh]" />
            <div className="p-6">
              <span className="text-xs font-bold text-brand-primary bg-orange-50 px-2 py-1 rounded-full">
                {current.tag} · {current.category}
              </span>
              <h3 className="font-display font-bold text-slate-900 text-xl mt-2">{current.title}</h3>
              <p className="text-slate-500 text-sm mt-1 flex items-center gap-1">
                <Icon name="MapPin" size={14} />{current.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
