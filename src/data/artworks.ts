import emitFlow004 from "@/assets/emit-flow-004.webp";
import emitFlow006 from "@/assets/emit-flow-006.webp";
import emitFlow012 from "@/assets/emit-flow-012.webp";
import emitFlow015 from "@/assets/emit-flow-015.webp";
import emitFlow018 from "@/assets/emit-flow-018.webp";
import emitFlow023 from "@/assets/emit-flow-023.webp";
import emitFlow025 from "@/assets/emit-flow-025.webp";
import emitFlow033 from "@/assets/emit-flow-033.webp";
import emitFlow034 from "@/assets/emit-flow-034.webp";
import emitFlow039 from "@/assets/emit-flow-039.webp";
import emitFlow052 from "@/assets/emit-flow-052.webp";
import emitFlow060 from "@/assets/emit-flow-060.webp";
import emitFlow062 from "@/assets/emit-flow-062.webp";
import emitFlow064 from "@/assets/emit-flow-064.webp";
import emitFlow066 from "@/assets/emit-flow-066.webp";
import emitFlow069 from "@/assets/emit-flow-069.webp";
import emitFlow074 from "@/assets/emit-flow-074.webp";
import emitFlow075 from "@/assets/emit-flow-075.webp";
import emitFlow077 from "@/assets/emit-flow-077.webp";
import emitFlow079 from "@/assets/emit-flow-079.webp";
import emitFlow080 from "@/assets/emit-flow-080.webp";
import emitFlow081 from "@/assets/emit-flow-081.webp";
import emitFlow082 from "@/assets/emit-flow-082.webp";
import artworkOcean1 from "@/assets/artwork-ocean-1.webp";
import artworkOcean2 from "@/assets/artwork-ocean-2.webp";
import artworkEarth1 from "@/assets/artwork-earth-1.webp";
import artworkEarth2 from "@/assets/artwork-earth-2.webp";
import artworkLight1 from "@/assets/artwork-light-1.webp";

export interface Artwork {
  id: number;
  title: string;
  year: number;
  medium: string;
  size: string;
  status: "Available" | "Private Collection" | "Sold";
  category: "Ocean Flow" | "Earth Layers" | "Light Atmosphere" | "Early Works";
  image: string;
  /** True if the artwork is suitable for full-screen horizontal hero display */
  heroCandidate: boolean;
}

const sizes = [
  "24 × 36 in",
  "30 × 40 in",
  "36 × 48 in",
  "40 × 40 in",
  "48 × 60 in",
];

// 28 unique artworks — Ocean Flow 8, Earth Layers 8, Light Atmosphere 6, Early Works 6
export const artworks: Artwork[] = [
  // Ocean Flow — 8
  { id: 1, title: "Emit Flow #001", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Ocean Flow", image: emitFlow034, heroCandidate: true },
  { id: 2, title: "Emit Flow #002", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Ocean Flow", image: emitFlow004, heroCandidate: true },
  { id: 3, title: "Emit Flow #003", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Private Collection", category: "Ocean Flow", image: emitFlow012, heroCandidate: true },
  { id: 4, title: "Emit Flow #004", year: 2023, medium: "Mixed Media on Canvas", size: sizes[3], status: "Available", category: "Ocean Flow", image: emitFlow052, heroCandidate: true },
  { id: 5, title: "Emit Flow #005", year: 2023, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Ocean Flow", image: emitFlow060, heroCandidate: true },
  { id: 19, title: "Emit Flow #019", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Ocean Flow", image: artworkOcean1, heroCandidate: true },
  { id: 20, title: "Emit Flow #020", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Ocean Flow", image: artworkOcean2, heroCandidate: true },
  { id: 28, title: "Emit Flow #028", year: 2023, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Ocean Flow", image: emitFlow023, heroCandidate: true },

  // Earth Layers — 8
  { id: 6, title: "Emit Flow #006", year: 2023, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Earth Layers", image: emitFlow025, heroCandidate: true },
  { id: 7, title: "Emit Flow #007", year: 2023, medium: "Mixed Media on Canvas", size: sizes[1], status: "Sold", category: "Earth Layers", image: emitFlow033, heroCandidate: true },
  { id: 8, title: "Emit Flow #008", year: 2022, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Earth Layers", image: emitFlow039, heroCandidate: true },
  { id: 9, title: "Emit Flow #009", year: 2022, medium: "Mixed Media on Canvas", size: sizes[3], status: "Available", category: "Earth Layers", image: emitFlow018, heroCandidate: false },
  { id: 10, title: "Emit Flow #010", year: 2022, medium: "Mixed Media on Canvas", size: sizes[4], status: "Private Collection", category: "Earth Layers", image: emitFlow064, heroCandidate: true },
  { id: 21, title: "Emit Flow #021", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Earth Layers", image: artworkEarth1, heroCandidate: true },
  { id: 22, title: "Emit Flow #022", year: 2024, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Earth Layers", image: artworkEarth2, heroCandidate: true },
  { id: 29, title: "Emit Flow #029", year: 2022, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Earth Layers", image: emitFlow066, heroCandidate: false },

  // Light Atmosphere — 6
  { id: 11, title: "Emit Flow #011", year: 2022, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Light Atmosphere", image: emitFlow074, heroCandidate: true },
  { id: 12, title: "Emit Flow #012", year: 2021, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Light Atmosphere", image: emitFlow077, heroCandidate: true },
  { id: 13, title: "Emit Flow #013", year: 2021, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Light Atmosphere", image: emitFlow062, heroCandidate: true },
  { id: 14, title: "Emit Flow #014", year: 2021, medium: "Mixed Media on Canvas", size: sizes[3], status: "Sold", category: "Light Atmosphere", image: artworkLight1, heroCandidate: false },
  { id: 23, title: "Emit Flow #023", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Light Atmosphere", image: emitFlow079, heroCandidate: true },
  { id: 24, title: "Emit Flow #024", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Light Atmosphere", image: emitFlow082, heroCandidate: true },

  // Early Works — 6
  { id: 15, title: "Emit Flow #015", year: 2020, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Early Works", image: emitFlow015, heroCandidate: false },
  { id: 16, title: "Emit Flow #016", year: 2020, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Early Works", image: emitFlow006, heroCandidate: false },
  { id: 17, title: "Emit Flow #017", year: 2019, medium: "Mixed Media on Canvas", size: sizes[1], status: "Private Collection", category: "Early Works", image: emitFlow069, heroCandidate: false },
  { id: 18, title: "Emit Flow #018", year: 2019, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Early Works", image: emitFlow075, heroCandidate: false },
  { id: 25, title: "Emit Flow #025", year: 2024, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Early Works", image: emitFlow080, heroCandidate: true },
  { id: 26, title: "Emit Flow #026", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Early Works", image: emitFlow081, heroCandidate: true },
];

export const categories = ["All", "Ocean Flow", "Earth Layers", "Light Atmosphere", "Early Works"] as const;

/** Shuffle array using Fisher-Yates */
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Pick 3 random hero candidates and 6 random selected works (no overlap) */
export function getRandomHomeArtworks() {
  const heroCandidates = artworks.filter((a) => a.heroCandidate);
  const shuffledHero = shuffle(heroCandidates);
  const heroArtworks = shuffledHero.slice(0, 3);
  const heroIds = new Set(heroArtworks.map((a) => a.id));

  const remaining = artworks.filter((a) => !heroIds.has(a.id));
  const selectedWorks = shuffle(remaining).slice(0, 6);

  return { heroArtworks, selectedWorks };
}
