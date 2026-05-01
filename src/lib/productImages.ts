import ubtan from "@/assets/product-ubtan.jpg";
import facemask from "@/assets/product-facemask.jpg";
import bathsalt from "@/assets/product-bathsalt.jpg";
import soap from "@/assets/product-soap.jpg";
import faceoil from "@/assets/product-faceoil.jpg";
import hamper from "@/assets/hamper.jpg";

// Map DB image_url paths to bundled assets so they survive build hashing.
const map: Record<string, string> = {
  "/src/assets/product-ubtan.jpg": ubtan,
  "/src/assets/product-facemask.jpg": facemask,
  "/src/assets/product-bathsalt.jpg": bathsalt,
  "/src/assets/product-soap.jpg": soap,
  "/src/assets/product-faceoil.jpg": faceoil,
  "/src/assets/hamper.jpg": hamper,
};

export function resolveProductImage(url: string | null | undefined): string {
  if (!url) return ubtan;
  return map[url] ?? url;
}
