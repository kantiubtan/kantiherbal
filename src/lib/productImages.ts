import hamper from "@/assets/hamper.jpg";

import ubtan1 from "@/assets/products/ubtan-1.png";
import ubtan2 from "@/assets/products/ubtan-2.png";
import ubtan3 from "@/assets/products/ubtan-3.png";

import bathsalt1 from "@/assets/products/bathsalt-1.png";
import bathsalt2 from "@/assets/products/bathsalt-2.png";
import bathsalt3 from "@/assets/products/bathsalt-3.png";
import bathsalt4 from "@/assets/products/bathsalt-4.png";

import soap1 from "@/assets/products/soap-1.png";
import soap2 from "@/assets/products/soap-2.jpg";

import facemask1 from "@/assets/products/facemask-1.png";
import facemask2 from "@/assets/products/facemask-2.jpg";

import faceoil1 from "@/assets/products/faceoil-1.png";
import faceoil2 from "@/assets/products/faceoil-2.jpg";

const ubtan = ubtan1;

// Multiple images per product slug (for carousels)
const gallery: Record<string, string[]> = {
  ubtan: [ubtan1, ubtan2, ubtan3],
  "bath-salt": [bathsalt1, bathsalt2, bathsalt3, bathsalt4],
  soap: [soap1, soap2],
  "face-mask": [facemask1, facemask2],
  "face-oil": [faceoil1, faceoil2],
  hamper: [hamper],
};

// Legacy DB image_url path → first gallery image
const map: Record<string, string> = {
  "/src/assets/product-ubtan.jpg": ubtan,
  "/src/assets/product-facemask.jpg": facemask1,
  "/src/assets/product-bathsalt.jpg": bathsalt1,
  "/src/assets/product-soap.jpg": soap1,
  "/src/assets/product-faceoil.jpg": faceoil1,
  "/src/assets/hamper.jpg": hamper,
};

export function resolveProductImage(url: string | null | undefined): string {
  if (!url) return ubtan;
  return map[url] ?? url;
}

export function resolveProductImages(slug: string | null | undefined, fallbackUrl?: string | null): string[] {
  if (slug && gallery[slug]) return gallery[slug];
  return [resolveProductImage(fallbackUrl)];
}
