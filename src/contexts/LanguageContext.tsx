import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "en" | "mr";

type Dict = Record<string, { en: string; mr: string }>;

// Master translation dictionary. English first (primary), Marathi second.
export const dict = {
  // Header / nav
  "nav.home": { en: "Home", mr: "मुख्यपृष्ठ" },
  "nav.products": { en: "Products", mr: "उत्पादने" },
  "nav.hampers": { en: "Hampers", mr: "हॅम्पर" },
  "nav.how": { en: "How to order", mr: "ऑर्डर कशी" },
  "nav.contact": { en: "Contact", mr: "संपर्क" },
  "nav.account": { en: "My account", mr: "माझे खाते" },
  "nav.login": { en: "Login", mr: "लॉगिन" },
  "nav.cart": { en: "Cart", mr: "कार्ट" },
  "brand.tagline": { en: "Where purity meets glow", mr: "शुद्धता तिथे तेज" },

  // Hero
  "hero.badge": { en: "Where purity meets glow", mr: "शुद्धता तिथे तेज" },
  "hero.title.1": { en: "Natural", mr: "नैसर्गिक" },
  "hero.title.beauty": { en: "beauty", mr: "सौंदर्य" },
  "hero.title.from": { en: "from", mr: "" },
  "hero.title.tradition": { en: "tradition", mr: "परंपरेतून" },
  "hero.subtitle": {
    en: "Ubtan, bath salts, soaps, face masks, face oil and gift hampers — pure handcrafted skincare from turmeric, sandalwood and herbs.",
    mr: "उटणे, बाथ सॉल्ट, साबण, फेस मास्क, फेस ऑईल आणि गिफ्ट हॅम्पर — हळद, चंदन आणि औषधी वनस्पतींपासून हाताने बनवलेली शुद्ध स्किनकेअर.",
  },
  "hero.cta.shop": { en: "Shop now", mr: "आता खरेदी करा" },
  "hero.cta.hampers": { en: "View hampers", mr: "हॅम्पर ऑफर पहा" },
  "hero.tag.herbal": { en: "100% herbal", mr: "१००% हर्बल" },
  "hero.tag.handmade": { en: "Handcrafted", mr: "हस्तनिर्मित" },
  "hero.tag.cruelty": { en: "Cruelty-free", mr: "क्रूरतामुक्त" },
  "hero.card.title": { en: "Real ubtan, real glow", mr: "खरा उटणे, खरी चमक" },
  "hero.card.sub": { en: "Limited stock", mr: "मर्यादित स्टॉक" },

  // Features
  "feat.wa.title": { en: "WhatsApp orders", mr: "व्हॉट्सअ‍ॅप ऑर्डर" },
  "feat.wa.desc": { en: "Send a ready-made order from your cart instantly", mr: "कार्टमधून थेट ऑर्डर मेसेज तयार होतो" },
  "feat.secure.title": { en: "Direct contact", mr: "सुरक्षित संपर्क" },
  "feat.secure.desc": { en: "Reach us on phone, email and Instagram", mr: "फोन, ईमेल आणि इंस्टाग्रामवर थेट संपर्क" },
  "feat.gift.title": { en: "Perfect for gifting", mr: "गिफ्टसाठी योग्य" },
  "feat.gift.desc": { en: "Ideal for bulk and custom hampers", mr: "बल्क आणि कस्टम हॅम्परसाठी आदर्श" },
  "feat.herbal.title": { en: "100% herbal", mr: "१००% हर्बल" },
  "feat.herbal.desc": { en: "Paraben & chemical-free, gentle on every skin", mr: "पॅराबेन व केमिकलमुक्त, सर्व त्वचेसाठी" },

  // Products
  "products.eyebrow": { en: "Kanti store", mr: "कांती स्टोअर" },
  "products.title.1": { en: "Curated", mr: "तुमच्यासाठी निवडक" },
  "products.title.2": { en: "essentials for you", mr: "उत्पादने" },
  "products.subtitle": {
    en: "100% herbal, handcrafted and safe for every skin — Kanti's lovingly made essentials.",
    mr: "१००% हर्बल, हस्तनिर्मित आणि सर्व त्वचेसाठी सुरक्षित — कांतीची काळजीपूर्वक तयार केलेली उत्पादने.",
  },
  "products.discount": { en: "OFF", mr: "सूट" },
  "products.add": { en: "Add to cart", mr: "कार्टमध्ये टाका" },
  "products.tag.natural": { en: "Natural", mr: "नैसर्गिक" },
  "products.tag.vegan": { en: "Vegan", mr: "व्हीगन" },
  "products.tag.cruelty": { en: "Cruelty-free", mr: "क्रूरतामुक्त" },
  "products.tag.handmade": { en: "Handmade", mr: "हस्तनिर्मित" },
  "products.toast.added": { en: "Added to cart", mr: "कार्टमध्ये जोडले" },
  "products.toast.wishadd": { en: "Added to wishlist", mr: "विशलिस्टमध्ये जोडले" },
  "products.toast.wishrm": { en: "Removed from wishlist", mr: "विशलिस्टमधून काढले" },
  "products.toast.loginfav": { en: "Login to save favourites", mr: "आवडती उत्पादने जतन करण्यासाठी लॉगिन करा" },

  // Why Kanti
  "why.eyebrow": { en: "Why Kanti?", mr: "कांती का?" },
  "why.title.1": { en: "Six reasons of", mr: "शुद्धतेची" },
  "why.title.2": { en: "purity", mr: "सहा कारणे" },
  "why.subtitle": { en: "Not just a skincare brand — a modern voice of Ayurveda.", mr: "फक्त एक स्किनकेअर ब्रँड नव्हे — आयुर्वेदाची आधुनिक अभिव्यक्ती." },
  "why.r1.t": { en: "100% natural", mr: "१००% नैसर्गिक" },
  "why.r1.d": { en: "Turmeric, sandalwood, neem, aloe — only pure Ayurvedic ingredients. Zero chemicals.", mr: "हळद, चंदन, कडुलिंब, कोरफड — फक्त शुद्ध आयुर्वेदिक घटक. कोणतेही केमिकल नाही." },
  "why.r2.t": { en: "Small-batch, handmade", mr: "लहान बॅच, हस्तनिर्मित" },
  "why.r2.d": { en: "Each product is hand-crafted in tiny batches — guaranteed freshness and quality.", mr: "प्रत्येक उत्पादन छोट्या बॅचमध्ये हाताने तयार — ताजेपणा आणि गुणवत्तेची हमी." },
  "why.r3.t": { en: "Paraben & sulphate-free", mr: "पॅराबेन व सल्फेटमुक्त" },
  "why.r3.d": { en: "A gentle formula — safe even for sensitive skin.", mr: "त्वचेला त्रास न देणारी सौम्य फॉर्म्युला — संवेदनशील त्वचेसाठीही सुरक्षित." },
  "why.r4.t": { en: "Cruelty-free", mr: "क्रूरतामुक्त" },
  "why.r4.d": { en: "No animal testing. Vegan-friendly ingredients first.", mr: "कोणत्याही प्राण्यांवर चाचणी नाही. व्हीगन-फ्रेंडली घटकांना प्राधान्य." },
  "why.r5.t": { en: "Eco-friendly packaging", mr: "पर्यावरणपूरक पॅकेजिंग" },
  "why.r5.d": { en: "Reusable jars and minimal plastic — for the earth's beauty too.", mr: "पुनर्वापरयोग्य कंटेनर आणि कमीत कमी प्लास्टिक — पृथ्वीच्या सौंदर्यासाठीही." },
  "why.r6.t": { en: "Generations-old recipes", mr: "पिढ्यानपिढ्यांच्या पाककृती" },
  "why.r6.d": { en: "Grandmothers' traditional ubtan recipes, modernised for you.", mr: "आजी-पणजीच्या पारंपरिक उटण्यांच्या रेसिपी, आधुनिक रूपात तुमच्यासाठी." },

  // Offers
  "offers.eyebrow": { en: "Special offers", mr: "खास ऑफर" },
  "offers.title.1": { en: "Limited-time", mr: "मर्यादित काळासाठी" },
  "offers.title.2": { en: "discounts", mr: "सवलती" },
  "offers.subtitle": { en: "Special launch offers on Kanti's selected essentials — order before stock runs out.", mr: "कांतीच्या निवडक उत्पादनांवर विशेष लाँच ऑफर — स्टॉक संपण्यापूर्वी ऑर्डर करा." },

  // Hampers
  "hampers.eyebrow": { en: "For special occasions", mr: "खास प्रसंगांसाठी" },
  "hampers.title.1": { en: "Custom hampers for", mr: "प्रत्येक प्रसंगासाठी" },
  "hampers.title.2": { en: "every occasion", mr: "कस्टम हॅम्पर" },
  "hampers.subtitle": { en: "Bespoke hampers of Kanti's products for Diwali, Haldi-Kunku, wedding return-gifts and corporate gifting — assembled to your taste.", mr: "दिवाळी, हळदी-कुंकू, लग्नाचे रिटर्न गिफ्ट आणि कॉर्पोरेट गिफ्टिंगसाठी आपल्या आवडीनुसार कांतीच्या उत्पादनांचा खास हॅम्पर तयार करून मिळेल." },
  "hampers.cta": { en: "Enquire on WhatsApp", mr: "व्हॉट्सअ‍ॅपवर चौकशी करा" },
  "hampers.occ.diwali": { en: "Diwali", mr: "दिवाळी" },
  "hampers.occ.haldi": { en: "Haldi-Kunku", mr: "हळदी-कुंकू" },
  "hampers.occ.wedding": { en: "Wedding", mr: "लग्न" },
  "hampers.occ.return": { en: "Return gifts", mr: "रिटर्न गिफ्ट" },
  "hampers.occ.corp": { en: "Corporate", mr: "कॉर्पोरेट" },
  "hampers.wa.msg": { en: "Hi Kanti, I'd like more info about a custom hamper.", mr: "नमस्कार कांती, मला कस्टम हॅम्परबद्दल माहिती हवी आहे." },

  // How
  "how.eyebrow": { en: "How to order", mr: "ऑर्डर कशी करायची" },
  "how.title.1": { en: "Easy shopping with", mr: "सोपी खरेदी," },
  "how.title.2": { en: "WhatsApp checkout", mr: "व्हॉट्सअ‍ॅप चेकआउट" },
  "how.s1.t": { en: "Pick a product", mr: "उत्पादन निवडा" },
  "how.s1.d": { en: "Choose your favourite Kanti product and read the details.", mr: "आवडीचे कांती उत्पादन निवडा आणि माहिती वाचा." },
  "how.s2.t": { en: "Add to cart", mr: "कार्टमध्ये टाका" },
  "how.s2.d": { en: "Hit Add to Cart or click Buy Now directly.", mr: "Add to Cart करा किंवा थेट Buy Now वर क्लिक करा." },
  "how.s3.t": { en: "Order on WhatsApp", mr: "व्हॉट्सअ‍ॅपवर ऑर्डर" },
  "how.s3.d": { en: "After checkout, send the auto-prepared order on WhatsApp.", mr: "चेकआउट केल्यावर तयार ऑर्डर मेसेज व्हॉट्सअ‍ॅपवर पाठवा." },

  // Founder
  "founder.eyebrow": { en: "Founder's note", mr: "संस्थापिकेचे मनोगत" },
  "founder.title": { en: "From grandma's ubtan to Kanti — the journey", mr: "आजीच्या उटण्यापासून कांती पर्यंतचा प्रवास" },
  "founder.p1": {
    en: "As a child, every Sunday Aaji would apply ubtan made of turmeric, sandalwood and gram flour. In that fragrance and gentle touch was a love that today's chemical creams simply cannot match.",
    mr: "लहानपणी प्रत्येक रविवारी आजी हळद, चंदन आणि बेसनाचे उटणे लावायची. त्या सुगंधात आणि मृदू स्पर्शात एक प्रेम होतं — जे आजच्या बाजारातल्या केमिकलयुक्त क्रीममध्ये कुठेच सापडत नाही.",
  },
  "founder.p2": {
    en: "Kanti is the modern form of those memories. Every product is hand-made in my own kitchen, in small batches — because what touches your skin must be honest.",
    mr: "कांती हे त्याच आठवणींचं आधुनिक रूप आहे. प्रत्येक उत्पादन माझ्या स्वयंपाकघरात, छोट्या बॅचमध्ये, हाताने तयार होतं — कारण तुमच्या त्वचेवर जे लागतं, ते प्रामाणिक असायलाच हवं.",
  },
  "founder.quote": { en: "\"Where purity meets glow — that is Kanti.\"", mr: "\"शुद्धता तिथे तेज — हीच कांतीची ओळख.\"" },
  "founder.signoff": { en: "— The Kanti family", mr: "— कांती परिवार" },

  // Contact
  "contact.eyebrow": { en: "Talk to us", mr: "आमच्याशी बोला" },
  "contact.title.1": { en: "Start your", mr: "तुमचा" },
  "contact.title.2": { en: "natural glow today", mr: "नैसर्गिक तेज आजच सुरू करा" },
  "contact.subtitle": { en: "Got a question? Reach us directly.", mr: "काही शंका आहे का? आमच्याशी थेट संपर्क करा." },
  "contact.phone": { en: "Phone", mr: "फोन" },
  "contact.wa": { en: "WhatsApp", mr: "व्हॉट्सअ‍ॅप" },
  "contact.wa.value": { en: "Order in one click", mr: "एका क्लिकमध्ये ऑर्डर" },
  "contact.email": { en: "Email", mr: "ईमेल" },
  "contact.ig": { en: "Instagram", mr: "इंस्टाग्राम" },

  // Footer
  "footer.tagline": { en: "Natural skincare hand-crafted from turmeric, sandalwood and herbs.", mr: "हळद, चंदन आणि औषधी वनस्पतींपासून हाताने बनवलेली नैसर्गिक स्किनकेअर." },
  "footer.contact": { en: "Contact", mr: "संपर्क" },
  "footer.explore": { en: "Explore", mr: "पहा" },
  "footer.products": { en: "Products", mr: "उत्पादने" },
  "footer.hampers": { en: "Custom hampers", mr: "कस्टम हॅम्पर" },
  "footer.how": { en: "How to order", mr: "ऑर्डर कशी करायची" },
  "footer.copy": { en: "Hand-crafted with love in India.", mr: "भारतात प्रेमाने हस्तनिर्मित." },
} satisfies Dict;

export type DictKey = keyof typeof dict;

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: DictKey) => string;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("kanti.lang") as Lang | null;
      if (saved === "en" || saved === "mr") setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("kanti.lang", l); } catch {}
  };

  const t = (key: DictKey) => dict[key]?.[lang] ?? "";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
