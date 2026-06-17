// Helpers de données structurées (JSON-LD) — schema.org
// Centralisés ici pour rester cohérents sur toutes les pages.

import { SITE_NAME, SITE_URL, BULBIZ_SITE, absoluteUrl } from "./siteConfig";

export interface FaqItem {
  q: string;
  a: string;
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

// FAQPage : améliore l'éligibilité aux rich results et la citabilité par les IA.
export const faqJsonLd = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});

// Fil d'Ariane structuré.
export const breadcrumbJsonLd = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

// Article éditorial (pour les pages de type guide / avis).
export const articleJsonLd = ({
  title,
  description,
  path,
  datePublished = "2026-03-17",
  dateModified = "2026-06-17",
}: {
  title: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  datePublished,
  dateModified,
  inLanguage: "fr-FR",
  mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
});

// SoftwareApplication (Bulbiz) — description honnête, sans note inventée.
export const softwareAppJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Bulbiz",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android",
  url: BULBIZ_SITE,
  description:
    "Bulbiz est un assistant métier pour artisans du BTP (plombiers, chauffagistes) qui centralise les demandes clients reçues par téléphone, SMS, WhatsApp ou Google, structure automatiquement les dossiers et aide au suivi des interventions et devis.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    description: "Test gratuit, sans engagement",
  },
});
