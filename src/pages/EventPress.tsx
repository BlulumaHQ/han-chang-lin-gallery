import { useState, useMemo, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import ep006 from "@/assets/event-press-006.webp";
import ep011 from "@/assets/event-press-011.webp";
import ep012 from "@/assets/event-press-012.webp";
import ep013 from "@/assets/event-press-013.webp";
import ep014 from "@/assets/event-press-014.webp";
import ep015 from "@/assets/event-press-015.webp";
import ep016 from "@/assets/event-press-016.webp";
import ep017 from "@/assets/event-press-017.webp";
import ep018 from "@/assets/event-press-018.webp";
import ep019 from "@/assets/event-press-019.webp";

const photos = [ep006, ep011, ep012, ep013, ep014, ep015, ep016, ep017, ep018, ep019];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function EventPress() {
  const shuffled = useMemo(() => shuffle(photos), []);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightbox((i) => (i !== null ? (i - 1 + shuffled.length) % shuffled.length : null));
  }, [shuffled.length]);

  const next = useCallback(() => {
    setLightbox((i) => (i !== null ? (i + 1) % shuffled.length : null));
  }, [shuffled.length]);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, prev, next]);

  return (
    <main className="pt-20">
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-12 text-center">
            Event &amp; Press
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shuffled.map((src, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="overflow-hidden cursor-pointer group"
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={28} />
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous"
          >
            <ChevronLeft size={36} />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next"
          >
            <ChevronRight size={36} />
          </button>

          <img
            src={shuffled[lightbox]}
            alt=""
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </main>
  );
}
