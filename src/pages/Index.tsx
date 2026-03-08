import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ArtworkGrid from "@/components/ArtworkGrid";
import { artworks } from "@/data/artworks";
import emitFlow034 from "@/assets/emit-flow-034.webp";
import emitFlow025 from "@/assets/emit-flow-025.webp";
import photoStudio from "@/assets/photo-studio.webp";
import photoGallery from "@/assets/photo-gallery.webp";
import photoPortrait from "@/assets/photo-portrait.webp";

const selectedWorks = artworks.slice(0, 6);

export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={emitFlow034}
          alt="Emit Flow — abstract ocean landscape by John Han-Chang Lin"
          className="absolute inset-0 w-full h-full object-cover animate-fade-in-slow"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight">
              John Han-Chang Lin
            </h1>
            <p className="font-serif text-lg md:text-xl text-primary-foreground/80 mt-4 font-light italic">
              Color as Meditation · Flow as Expression
            </p>
            <p className="font-serif text-base md:text-lg text-primary-foreground/60 mt-2">
              林漢章 · 以色彩修行 · 讓靈魂流動
            </p>
            <div className="mt-8">
              <Button variant="museum-light" size="lg" asChild>
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="font-serif text-2xl md:text-3xl font-light text-foreground italic leading-relaxed">
            "Painting is a form of meditation."
          </blockquote>
          <p className="mt-8 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            John Han-Chang Lin explores the movement of color, gravity, and silence through abstract landscapes
            formed by flowing pigments.
          </p>
          <div className="mt-6 text-sm md:text-base text-muted-foreground/80 leading-relaxed">
            <p>「繪畫對我而言，是一種修行。」</p>
            <p className="mt-2">林漢章透過色彩流動與自然力量，讓畫面在畫布上逐漸生成，如同自然地景。</p>
          </div>
        </div>
      </section>

      {/* SELECTED WORKS */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-12 text-center">
            Selected Works
          </h2>
          <ArtworkGrid artworks={selectedWorks} columns={3} />
          <div className="mt-12 text-center">
            <Button variant="museum" size="lg" asChild>
              <Link to="/gallery">View Full Gallery</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ARTISTIC PHILOSOPHY */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-secondary">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="overflow-hidden">
            <img
              src={emitFlow025}
              alt="Earth Layers series artwork"
              className="w-full aspect-[3/4] object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">Artistic Philosophy</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              For Lin, painting is not an act of control but a dialogue between pigment, gravity, and time.
              Images emerge gradually through the natural movement of color and surface.
            </p>
            <div className="text-sm text-muted-foreground/80 leading-relaxed space-y-1">
              <p>對林漢章而言，</p>
              <p>繪畫不是控制畫面，</p>
              <p>而是讓顏料、重力與時間共同完成作品。</p>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO PROCESS */}
      <section className="py-16 md:py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
            Studio Process
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            The paintings are created through layered flows of pigment, allowing gravity and material
            to shape the final composition.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[photoStudio, photoGallery, photoPortrait].map((img, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={img}
                  alt={`Studio process ${i + 1}`}
                  className="w-full aspect-[3/4] object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXHIBITIONS PREVIEW */}
      <section className="py-16 md:py-24 px-6 md:px-16 bg-secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-10 text-center">
            Exhibition History
          </h2>
          <div className="space-y-4">
            {[
              { year: "2024", title: "Vancouver Exhibition" },
              { year: "2023", title: "CCAFV Members Exhibition" },
              { year: "2021", title: "Vancouver Chinese Artists Association" },
            ].map((e) => (
              <div key={e.year} className="flex gap-4 items-baseline border-b border-border pb-4">
                <span className="text-sm text-muted-foreground font-sans">{e.year}</span>
                <span className="font-serif text-base md:text-lg text-foreground font-light">{e.title}</span>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button variant="museum" size="lg" asChild>
              <Link to="/exhibitions">View Exhibition History</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* COLLECTOR INQUIRY */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
            Collector Inquiry
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            For acquisition inquiries, exhibition opportunities, or general correspondence,
            please contact the studio.
          </p>
          <p className="text-sm text-muted-foreground/80">
            如需作品收藏洽詢或展覽合作，請與我們聯繫。
          </p>
          <Button variant="museum" size="lg" asChild>
            <Link to="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
