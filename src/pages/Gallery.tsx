import { artworks } from "@/data/artworks";
import ArtworkGrid from "@/components/ArtworkGrid";

export default function GalleryPage() {
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

          <ArtworkGrid artworks={artworks} columns={4} />
        </div>
      </section>
    </main>
  );
}
