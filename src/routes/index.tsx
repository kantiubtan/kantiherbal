import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Products } from "@/components/site/Products";
import { Hampers } from "@/components/site/Hampers";
import { HowItWorks } from "@/components/site/HowItWorks";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kanti — Natural Ayurvedic Skincare | Ubtan, Face Masks & Gift Hampers" },
      {
        name: "description",
        content:
          "Kanti — handcrafted natural skincare from turmeric, sandalwood and herbs. Shop ubtan, bath salts, soaps, face masks, face oil and custom gift hampers with WhatsApp checkout.",
      },
      { property: "og:title", content: "Kanti — Where Purity Meets Glow" },
      {
        property: "og:description",
        content:
          "Handcrafted Ayurvedic skincare and custom gift hampers. WhatsApp checkout, intro pricing on every product.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <Products />
        <Hampers />
        <HowItWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
