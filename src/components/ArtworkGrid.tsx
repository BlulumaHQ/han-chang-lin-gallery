import { useState } from "react";
import type { Artwork } from "@/data/artworks";
import ArtworkModal from "./ArtworkModal";

interface ArtworkGridProps {
  artworks: Artwork[];
  columns?: 3 | 4;
}

export default function ArtworkGrid({ artworks, columns = 3 }: ArtworkGridProps) {
  const [selected, setSelected] = useState<Artwork | null>(null);

  const gridClass = columns === 4
    ? "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
    : "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6";

  return (
    <>
      <div className={gridClass}>
        {artworks.map((artwork, i) => (
          <button
            key={artwork.id}
            onClick={() => setSelected(artwork)}
            className="group text-left animate-fade-in-up"
            style={{ animationDelay: `${i * 80}ms`, animationFillMode: "forwards" }}
          >
            <div className="overflow-hidden bg-muted">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full aspect-[3/4] object-cover artwork-hover"
                loading="lazy"
              />
            </div>
            <div className="mt-3 space-y-1">
              <p className="font-serif text-sm md:text-base font-light text-foreground">{artwork.title}</p>
              <p className="text-xs text-muted-foreground">{artwork.year} · {artwork.medium}</p>
            </div>
          </button>
        ))}
      </div>
      <ArtworkModal artwork={selected} open={!!selected} onClose={() => setSelected(null)} />
    </>
  );
}
