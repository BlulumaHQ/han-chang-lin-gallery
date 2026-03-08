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
}

const sizes = [
  "24 × 36 in",
  "30 × 40 in",
  "36 × 48 in",
  "40 × 40 in",
  "48 × 60 in",
];

const statuses: Array<"Available" | "Private Collection" | "Sold"> = [
  "Available",
  "Private Collection",
  "Sold",
];

// Cycle through available images as placeholders
const imagePool = [artworkOcean1, artworkOcean2, artworkEarth1, artworkEarth2, artworkLight1];

function getImage(index: number): string {
  return imagePool[index % imagePool.length];
}

function getStatus(index: number) {
  // Distribute statuses realistically
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
    image: getImage(i + 2),
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
    image: getImage(i + 4),
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
    image: getImage(i + 1),
  })),
];

export const categories = ["All", "Ocean Flow", "Earth Layers", "Light Atmosphere", "Early Works"] as const;
