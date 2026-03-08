import photoPortrait from "@/assets/photo-portrait.webp";
import photoStudio from "@/assets/photo-studio.webp";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Portrait */}
      <section className="px-6 md:px-16 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="overflow-hidden">
            <img
              src={photoPortrait}
              alt="John Han-Chang Lin portrait"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="space-y-6 md:pt-8">
            <h1 className="font-serif text-3xl md:text-5xl font-light text-foreground">
              John Han-Chang Lin
            </h1>
            <p className="font-serif text-xl text-muted-foreground">林漢章</p>
            <p className="text-sm text-muted-foreground tracking-widest uppercase">
              Taiwanese-Canadian Abstract Painter
            </p>
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed pt-4">
              <p>
                John Han-Chang Lin is a Taiwanese-Canadian artist based in Vancouver.
                Since immigrating to Canada in 1990, he has developed a distinctive approach
                to abstract painting rooted in the natural movement of pigment and gravity.
              </p>
              <p>
                With a background in picture framing, Lin spent decades working intimately
                with fine art — handling, preserving, and studying works by established artists.
                This deep familiarity with materials and technique ultimately led him to the
                creative studio, where he began developing his own artistic voice.
              </p>
              <p>
                Lin's paintings emerge through a process of layered pigment flows, where
                color, gravity, and time collaborate to produce organic compositions
                reminiscent of aerial landscapes, mineral formations, and ocean depths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-6 md:px-16 py-16 md:py-24 bg-secondary">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground">
            Artistic Philosophy
          </h2>
          <blockquote className="font-serif text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
            "I do not paint pictures. I create conditions for paintings to emerge."
          </blockquote>
          <p className="text-base text-muted-foreground leading-relaxed">
            Lin's artistic style reinvents the abstract expressionism of the 1960s with a unique twist.
            Instead of using brushstrokes to complete the work, he allows the pigments to flow freely,
            guided by gravity and the natural properties of the materials. The result is both
            unpredictable and deeply intentional — an expression of inner emotion and a reflection
            of the artist's spiritual journey.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            Each painting is a one-of-a-kind, carefully crafted work that showcases mastery
            of color and composition. For Lin, the act of painting is inseparable from meditation —
            a practice of presence, patience, and surrender.
          </p>
          <div className="text-sm text-muted-foreground/80 leading-relaxed space-y-1 pt-4">
            <p>「繪畫對我而言，是一種修行。」</p>
            <p>林漢章透過色彩流動與自然力量，讓畫面在畫布上逐漸生成。</p>
            <p>每一幅作品都是獨一無二的創作，展現了對色彩與構圖的深厚掌握。</p>
          </div>
        </div>
      </section>

      {/* Creative Process */}
      <section className="px-6 md:px-16 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-foreground mb-8">
            Creative Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
              <p>
                Lin's process begins with careful preparation of the canvas surface and the
                mixing of pigments to precise consistencies. The canvas is then positioned
                at various angles, allowing gravity to guide the flow of color across the surface.
              </p>
              <p>
                Multiple layers are applied over days and weeks, each one interacting with
                the previous to create depth, translucency, and texture. The artist observes
                and responds to the painting as it develops, making subtle adjustments to angle,
                pigment density, and timing.
              </p>
              <p>
                The final compositions evoke natural phenomena — erosion patterns, ocean currents,
                atmospheric formations — yet emerge entirely from the dialogue between material and process.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src={photoStudio}
                alt="John Lin in studio"
                className="w-full aspect-[3/4] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
