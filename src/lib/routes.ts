// Source unique des routes publiques du site.
// Utilisée pour le sitemap.xml (script scripts/generate-sitemap.mjs)
// et le maillage interne.

export interface SiteRoute {
  path: string;
  /** Priorité sitemap (0.0 - 1.0) */
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
  /** Page indexable dans le sitemap (false pour le légal) */
  indexable?: boolean;
}

export const SITE_ROUTES: SiteRoute[] = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/logiciel-plombier", priority: 0.9, changefreq: "monthly" },
  { path: "/application-plombier", priority: 0.9, changefreq: "monthly" },
  { path: "/logiciel-devis-facture-plombier", priority: 0.9, changefreq: "monthly" },
  { path: "/logiciel-gestion-intervention-plombier", priority: 0.9, changefreq: "monthly" },
  { path: "/logiciel-planning-plombier", priority: 0.8, changefreq: "monthly" },
  { path: "/assistant-administratif-plombier", priority: 0.8, changefreq: "monthly" },
  { path: "/logiciel-chauffagiste", priority: 0.8, changefreq: "monthly" },
  { path: "/logiciel-artisan-plombier", priority: 0.8, changefreq: "monthly" },
  { path: "/bulbiz-avis", priority: 0.7, changefreq: "monthly" },
  { path: "/faq", priority: 0.6, changefreq: "monthly" },
  { path: "/mentions-legales", priority: 0.2, changefreq: "yearly" },
  { path: "/politique-de-confidentialite", priority: 0.2, changefreq: "yearly" },
];
