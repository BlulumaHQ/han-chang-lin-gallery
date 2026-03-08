import { useState } from "react";
import { artworks, categories } from "@/data/artworks";
import ArtworkGrid from "@/components/ArtworkGrid";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered = activeCategory === "All"
    ? artworks
    : artworks.filter((a) => a.category === activeCategory);

  return (
    <main className="pt-20">
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground mb-4 text-center">
            Gallery
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            {artworks.length} works · Mixed Media on Canvas
          </p>

          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-widest uppercase font-sans px-4 py-2 border transition-colors duration-300 ${
                  activeCategory === cat
                    ? "border-foreground text-foreground bg-foreground/5"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ArtworkGrid artworks={filtered} columns={4} />
        </div>
      </section>
    </main>
  );
}
