import emitFlow004 from "@/assets/emit-flow-004.webp";
import emitFlow006 from "@/assets/emit-flow-006.webp";
import emitFlow012 from "@/assets/emit-flow-012.webp";
import emitFlow015 from "@/assets/emit-flow-015.webp";
import emitFlow018 from "@/assets/emit-flow-018.webp";
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
import emitFlow023 from "@/assets/emit-flow-023.webp";
// New uploads
import artworkOcean1 from "@/assets/artwork-ocean-1.webp";
import artworkOcean2 from "@/assets/artwork-ocean-2.webp";
import artworkEarth1 from "@/assets/artwork-earth-1.webp";
import artworkEarth2 from "@/assets/artwork-earth-2.webp";
import artworkLight1 from "@/assets/artwork-light-1.webp";
import emitFlow079 from "@/assets/emit-flow-079.webp";
import emitFlow080 from "@/assets/emit-flow-080.webp";
import emitFlow081 from "@/assets/emit-flow-081.webp";
import emitFlow082 from "@/assets/emit-flow-082.webp";

export interface Artwork {
  id: number;
  title: string;
  year: number;
  medium: string;
  size: string;
  status: "Available" | "Private Collection" | "Sold";
  category: "Ocean Flow" | "Earth Layers" | "Light Atmosphere" | "Early Works";
  image: string;
}

const sizes = [
  "24 × 36 in",
  "30 × 40 in",
  "36 × 48 in",
  "40 × 40 in",
  "48 × 60 in",
];

// 27 unique artworks — 18 original + 9 new uploads
export const artworks: Artwork[] = [
  // Ocean Flow — 7
  { id: 1, title: "Emit Flow #001", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Ocean Flow", image: emitFlow034 },
  { id: 2, title: "Emit Flow #002", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Ocean Flow", image: emitFlow004 },
  { id: 3, title: "Emit Flow #003", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Private Collection", category: "Ocean Flow", image: emitFlow012 },
  { id: 4, title: "Emit Flow #004", year: 2023, medium: "Mixed Media on Canvas", size: sizes[3], status: "Available", category: "Ocean Flow", image: emitFlow052 },
  { id: 5, title: "Emit Flow #005", year: 2023, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Ocean Flow", image: emitFlow060 },
  { id: 19, title: "Emit Flow #019", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Ocean Flow", image: artworkOcean1 },
  { id: 20, title: "Emit Flow #020", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Ocean Flow", image: artworkOcean2 },

  // Earth Layers — 7
  { id: 6, title: "Emit Flow #006", year: 2023, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Earth Layers", image: emitFlow025 },
  { id: 7, title: "Emit Flow #007", year: 2023, medium: "Mixed Media on Canvas", size: sizes[1], status: "Sold", category: "Earth Layers", image: emitFlow033 },
  { id: 8, title: "Emit Flow #008", year: 2022, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Earth Layers", image: emitFlow039 },
  { id: 9, title: "Emit Flow #009", year: 2022, medium: "Mixed Media on Canvas", size: sizes[3], status: "Available", category: "Earth Layers", image: emitFlow018 },
  { id: 10, title: "Emit Flow #010", year: 2022, medium: "Mixed Media on Canvas", size: sizes[4], status: "Private Collection", category: "Earth Layers", image: emitFlow064 },
  { id: 21, title: "Emit Flow #021", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Earth Layers", image: artworkEarth1 },
  { id: 22, title: "Emit Flow #022", year: 2024, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Earth Layers", image: artworkEarth2 },

  // Light Atmosphere — 7
  { id: 11, title: "Emit Flow #011", year: 2022, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Light Atmosphere", image: emitFlow074 },
  { id: 12, title: "Emit Flow #012", year: 2021, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Light Atmosphere", image: emitFlow077 },
  { id: 13, title: "Emit Flow #013", year: 2021, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Light Atmosphere", image: emitFlow066 },
  { id: 14, title: "Emit Flow #014", year: 2021, medium: "Mixed Media on Canvas", size: sizes[3], status: "Sold", category: "Light Atmosphere", image: emitFlow062 },
  { id: 23, title: "Emit Flow #023", year: 2024, medium: "Mixed Media on Canvas", size: sizes[1], status: "Available", category: "Light Atmosphere", image: artworkLight1 },
  { id: 24, title: "Emit Flow #024", year: 2024, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Light Atmosphere", image: emitFlow079 },
  { id: 25, title: "Emit Flow #025", year: 2024, medium: "Mixed Media on Canvas", size: sizes[3], status: "Available", category: "Light Atmosphere", image: emitFlow082 },

  // Early Works — 6
  { id: 15, title: "Emit Flow #015", year: 2020, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Early Works", image: emitFlow015 },
  { id: 16, title: "Emit Flow #016", year: 2020, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Early Works", image: emitFlow006 },
  { id: 17, title: "Emit Flow #017", year: 2019, medium: "Mixed Media on Canvas", size: sizes[1], status: "Private Collection", category: "Early Works", image: emitFlow069 },
  { id: 18, title: "Emit Flow #018", year: 2019, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Early Works", image: emitFlow075 },
  { id: 26, title: "Emit Flow #026", year: 2024, medium: "Mixed Media on Canvas", size: sizes[4], status: "Available", category: "Early Works", image: emitFlow080 },
  { id: 27, title: "Emit Flow #027", year: 2024, medium: "Mixed Media on Canvas", size: sizes[0], status: "Available", category: "Early Works", image: emitFlow081 },
  { id: 28, title: "Emit Flow #023", year: 2023, medium: "Mixed Media on Canvas", size: sizes[2], status: "Available", category: "Ocean Flow", image: emitFlow023 },
];

export const categories = ["All", "Ocean Flow", "Earth Layers", "Light Atmosphere", "Early Works"] as const;
