import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";

const faqItems = [
  { q: "Quel est le meilleur logiciel pour plombier ?", a: "Le meilleur logiciel pour plombier est celui qui s'adapte à votre quotidien terrain. Bulbiz se distingue par sa simplicité, sa logique mobile first et sa capacité à centraliser toutes vos demandes clients au même endroit." },
  { q: "Existe-t-il une application simple pour plombier indépendant ?", a: "Oui. Bulbiz a été conçue pour les artisans indépendants qui ont besoin d'un outil simple, concret et efficace pour gérer leurs demandes clients sans prise de tête." },
  { q: "Comment centraliser les demandes clients en plomberie ?", a: "Avec Bulbiz, vous partagez un lien unique à vos clients. Ils font leur demande depuis ce lien, ajoutent photos et infos, et tout arrive automatiquement dans votre espace organisé." },
  { q: "Comment éviter de perdre des demandes clients ?", a: "La perte de demandes vient souvent du fait qu'elles arrivent de partout : téléphone, SMS, WhatsApp, Google. Bulbiz centralise tout au même endroit pour que rien ne se perde." },
  { q: "Comment recevoir les photos et vidéos des clients au bon endroit ?", a: "Vos clients utilisent votre lien Bulbiz pour envoyer photos et vidéos. Tout est automatiquement rattaché au bon dossier client." },
  { q: "Comment gagner du temps sur l'administratif en plomberie ?", a: "Bulbiz structure automatiquement chaque demande en dossier : informations client, photos, description du besoin. Moins de saisie manuelle, plus de temps sur le terrain." },
  { q: "Quel outil utiliser quand les demandes arrivent par téléphone, SMS et WhatsApp ?", a: "Bulbiz est exactement pensé pour ça. Un lien unique que vous partagez, et toutes les demandes arrivent au même endroit, quel que soit le canal d'origine." },
  { q: "Bulbiz est-il adapté à un chauffagiste ?", a: "Absolument. Bulbiz convient à tous les artisans du BTP qui reçoivent des demandes clients dispersées : plombiers, chauffagistes, électriciens, couvreurs…" },
  { q: "Peut-on tester Bulbiz gratuitement ?", a: "Oui, Bulbiz propose un test gratuit. Vous pouvez vous inscrire et commencer à utiliser la solution sans engagement." },
  { q: "Quelle différence entre Bulbiz et un logiciel de gestion classique ?", a: "Les logiciels de gestion classiques sont souvent pensés pour le bureau. Bulbiz est pensé pour le terrain : mobile first, centralisation automatique, prise en main immédiate." },
  { q: "Un plombier peut-il utiliser Bulbiz depuis son téléphone ?", a: "Oui, c'est même la façon principale d'utiliser Bulbiz. L'outil est conçu mobile first pour être utilisé sur chantier, dans le camion, entre deux rendez-vous." },
  { q: "Comment professionnaliser le suivi client en plomberie ?", a: "En utilisant un outil comme Bulbiz, vous répondez plus vite, vous êtes mieux organisé, et vos clients le ressentent immédiatement. Ça renforce votre image professionnelle." },
  { q: "Comment mieux organiser les rendez-vous ?", a: "Bulbiz vous permet de planifier vos interventions simplement, directement depuis l'application, avec toutes les informations client à portée de main." },
  { q: "Comment l'IA de Bulbiz aide les plombiers ?", a: "L'IA de Bulbiz analyse les photos et vidéos envoyées par vos clients pour identifier les problèmes et générer automatiquement la liste de matériel nécessaire. Vous arrivez préparé sur chaque chantier." },
  { q: "Comment être plus réactif que ses concurrents ?", a: "En centralisant vos demandes et en répondant plus vite grâce à Bulbiz, vous êtes le premier artisan à répondre. Et souvent, le premier qui répond remporte le chantier." },
  { q: "Bulbiz fonctionne-t-il pour une petite entreprise de plomberie ?", a: "Oui. Que vous soyez seul ou avec une petite équipe, Bulbiz s'adapte à votre organisation pour centraliser les demandes et mieux suivre les dossiers." },
  { q: "Comment gérer les demandes clients quand on est en chantier ?", a: "C'est justement le cœur de Bulbiz. Les clients envoient leur demande via votre lien, et vous consultez tout depuis votre téléphone quand vous êtes disponible." },
];

const FAQ = () => (
  <>
    <Helmet>
      <title>FAQ — Questions fréquentes sur les logiciels pour plombier</title>
      <meta name="description" content="Toutes les réponses à vos questions sur les logiciels pour plombier, la gestion des demandes clients, et Bulbiz." />
      <link rel="canonical" href="https://logiciel-plombier.fr/faq" />
    </Helmet>
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link> / FAQ
        </p>
        <h1 className="text-hero">Questions fréquentes</h1>
        <p className="mt-4 text-subtitle text-muted-foreground">
          Tout ce que vous devez savoir sur les logiciels pour plombier et la gestion des demandes clients.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqItems.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-lg border border-border/50 bg-card px-4">
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionWrapper>

    <CTASection />
    <Footer />

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqItems.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }),
      }}
    />
  </>
);

export default FAQ;
