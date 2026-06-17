// Configuration centrale du site logiciel-plombier.fr
// Source unique de vérité pour le SEO (URLs, marque, liens Bulbiz, navigation).

export const SITE_URL = "https://logiciel-plombier.fr";
export const SITE_NAME = "logiciel-plombier.fr";
export const SITE_TAGLINE =
  "Le guide des logiciels et applications pour plombiers et chauffagistes";

// Image sociale par défaut (Open Graph / Twitter)
export const DEFAULT_OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/wmL1M0jMH4acyVjq1dmkiHafCIz1/social-images/social-1773746917496-Capture_d%E2%80%99e%CC%81cran_2026-03-17_a%CC%80_12.27.30.webp";

// Liens Bulbiz (cible de conversion)
export const BULBIZ_SITE = "https://bulbiz.io";
export const BULBIZ_APP = "https://app.bulbiz.io";

// URL absolue propre à partir d'un chemin relatif ("/faq" -> "https://.../faq")
export const absoluteUrl = (path: string): string => {
  if (!path || path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
