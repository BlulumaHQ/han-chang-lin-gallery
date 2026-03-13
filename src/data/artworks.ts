import emitFlow1109 from "@/assets/emit-flow-1109.webp";
import emitFlow1308 from "@/assets/emit-flow-1308.webp";
import emitFlow1506 from "@/assets/emit-flow-1506.webp";
import emitFlow1603 from "@/assets/emit-flow-1603.webp";
import emitFlow1609 from "@/assets/emit-flow-1609.webp";
import emitFlow1806 from "@/assets/emit-flow-1806.webp";
import emitFlow2102_1 from "@/assets/emit-flow-2102-1.webp";
import emitFlow2102_2 from "@/assets/emit-flow-2102-2.webp";
import emitFlow2102_3 from "@/assets/emit-flow-2102-3.webp";
import emitFlow2108 from "@/assets/emit-flow-2108.webp";

export interface Artwork {
  id: string;
  title: string;
  year: number;
  medium: string;
  size: string;
  status: "Available" | "Private Collection";
  image: string;
  /** Marked "selected" in filename — shown in homepage Selected Works */
  selected: boolean;
  /** Marked "hero" in filename — eligible for homepage hero slider */
  hero: boolean;
}

export const artworks: Artwork[] = [
  { id: "1109", title: "Emit Flow #1109", year: 2011, medium: "Mixed Media on Canvas", size: "32 × 52 in", status: "Private Collection", image: emitFlow1109, selected: false, hero: false },
  { id: "1308", title: "Emit Flow #1308", year: 2013, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow1308, selected: false, hero: false },
  { id: "1506", title: "Emit Flow #1506", year: 2015, medium: "Mixed Media on Canvas", size: "32 × 36 in", status: "Available", image: emitFlow1506, selected: true, hero: false },
  { id: "1603", title: "Emit Flow #1603", year: 2016, medium: "Mixed Media on Canvas", size: "50 × 30 in", status: "Private Collection", image: emitFlow1603, selected: false, hero: false },
  { id: "1609", title: "Emit Flow #1609", year: 2016, medium: "Mixed Media on Canvas", size: "48 × 72 in", status: "Available", image: emitFlow1609, selected: true, hero: false },
  { id: "1806", title: "Emit Flow #1806", year: 2018, medium: "Mixed Media on Canvas", size: "32 × 52 in", status: "Available", image: emitFlow1806, selected: true, hero: false },
  { id: "2102-1", title: "Emit Flow #2102-1", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_1, selected: true, hero: false },
  { id: "2102-2", title: "Emit Flow #2102-2", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_2, selected: false, hero: false },
  { id: "2102-3", title: "Emit Flow #2102-3", year: 2021, medium: "Mixed Media on Canvas", size: "36 × 48 in", status: "Private Collection", image: emitFlow2102_3, selected: false, hero: false },
  { id: "2108", title: "Emit Flow #2108", year: 2021, medium: "Mixed Media on Canvas", size: "30 × 58 in", status: "Private Collection", image: emitFlow2108, selected: false, hero: false },
];

/** Shuffle array using Fisher-Yates */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Get randomized homepage data */
export function getRandomHomeArtworks() {
  // Hero: artworks tagged "hero", fallback to selected if none tagged
  let heroCandidates = artworks.filter((a) => a.hero);
  if (heroCandidates.length === 0) {
    heroCandidates = artworks.filter((a) => a.selected);
  }
  const heroArtworks = shuffle(heroCandidates).slice(0, 3);
  const heroIds = new Set(heroArtworks.map((a) => a.id));

  // Selected works: tagged "selected", excluding hero overlap, up to 12
  const selectedCandidates = artworks.filter((a) => a.selected && !heroIds.has(a.id));
  // If not enough selected, add remaining artworks
  const remaining = artworks.filter((a) => !a.selected && !heroIds.has(a.id));
  const selectedWorks = shuffle([...selectedCandidates, ...remaining]).slice(0, 12);

  return { heroArtworks, selectedWorks };
}
