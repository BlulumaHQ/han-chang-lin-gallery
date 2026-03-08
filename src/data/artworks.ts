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

// All 18 real artwork images
const imagePool = [
  emitFlow034, emitFlow004, emitFlow012, emitFlow015, emitFlow006,
  emitFlow060, emitFlow052, emitFlow064,
  emitFlow025, emitFlow033, emitFlow039, emitFlow018,
  emitFlow074, emitFlow077, emitFlow066,
  emitFlow062, emitFlow069, emitFlow075,
];

function getImage(index: number): string {
  return imagePool[index % imagePool.length];
}

function getStatus(index: number) {
  if (index % 5 === 0) return "Private Collection" as const;
  if (index % 7 === 0) return "Sold" as const;
  return "Available" as const;
}

export const artworks: Artwork[] = [
  // Ocean Flow — 8
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    title: `Emit Flow #${String(i + 1).padStart(3, "0")}`,
    year: 2024 - Math.floor(i / 3),
    medium: "Mixed Media on Canvas",
    size: sizes[i % sizes.length],
    status: getStatus(i),
    category: "Ocean Flow" as const,
    image: getImage(i),
  })),
  // Earth Layers — 8
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 9,
    title: `Emit Flow #${String(i + 9).padStart(3, "0")}`,
    year: 2023 - Math.floor(i / 3),
    medium: "Mixed Media on Canvas",
    size: sizes[(i + 2) % sizes.length],
    status: getStatus(i + 3),
    category: "Earth Layers" as const,
    image: getImage(i + 8),
  })),
  // Light Atmosphere — 6
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 17,
    title: `Emit Flow #${String(i + 17).padStart(3, "0")}`,
    year: 2022 - Math.floor(i / 3),
    medium: "Mixed Media on Canvas",
    size: sizes[(i + 1) % sizes.length],
    status: getStatus(i + 1),
    category: "Light Atmosphere" as const,
    image: getImage(i + 12),
  })),
  // Early Works — 6
  ...Array.from({ length: 6 }, (_, i) => ({
    id: i + 23,
    title: `Emit Flow #${String(i + 23).padStart(3, "0")}`,
    year: 2020 - Math.floor(i / 2),
    medium: "Mixed Media on Canvas",
    size: sizes[(i + 3) % sizes.length],
    status: getStatus(i + 5),
    category: "Early Works" as const,
    image: getImage(i + 3),
  })),
];

export const categories = ["All", "Ocean Flow", "Earth Layers", "Light Atmosphere", "Early Works"] as const;
