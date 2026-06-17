import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";
import Breadcrumbs from "@/components/Breadcrumbs";
import KeyTakeaway from "@/components/KeyTakeaway";
import FaqSection from "@/components/FaqSection";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { articleJsonLd, breadcrumbJsonLd, faqJsonLd, type FaqItem } from "@/lib/seo";
import { Flame, Wrench, Calendar, Camera, CheckCircle2, Snowflake } from "lucide-react";

const PATH = "/logiciel-chauffagiste";
const TITLE = "Logiciel pour chauffagiste : gérez dépannages, entretiens et installations";
const DESCRIPTION =
  "Chauffagiste : entre dépannages d'urgence, entretiens de chaudière et installations, vos demandes arrivent de partout. Découvrez comment Bulbiz les centralise. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Existe-t-il un logiciel adapté aux chauffagistes ?",
    a: "Oui. Les chauffagistes ont les mêmes enjeux que les plombiers : des demandes qui arrivent de partout, des urgences, des entretiens à suivre. Bulbiz centralise ces demandes et structure chaque dossier, que ce soit pour un dépannage, un entretien ou une installation.",
  },
  {
    q: "Comment gérer les pics de demandes en hiver ?",
    a: "En hiver, les pannes de chauffage explosent. Quand toutes les demandes arrivent centralisées via un lien unique, vous priorisez les urgences sans perdre les autres demandes dans le flot des appels et SMS.",
  },
  {
    q: "Peut-on suivre les entretiens de chaudière récurrents ?",
    a: "Bulbiz crée un dossier par client, ce qui permet de garder l'historique des échanges et des interventions. Vous retrouvez facilement les informations d'un client lors de son prochain entretien.",
  },
  {
    q: "Les photos d'une chaudière en panne sont-elles utiles ?",
    a: "Très utiles. Quand le client envoie des photos via votre lien, l'IA de Bulbiz les analyse pour aider à identifier le matériel nécessaire. Vous arrivez préparé, avec les bonnes pièces.",
  },
  {
    q: "Bulbiz convient-il à un artisan qui fait plomberie et chauffage ?",
    a: "Tout à fait. Beaucoup d'artisans cumulent plomberie et chauffage. Bulbiz centralise l'ensemble des demandes au même endroit, quel que soit le type d'intervention.",
  },
];

const LogicielChauffagiste = () => (
  <>
    <Seo
      title={TITLE}
      description={DESCRIPTION}
      path={PATH}
      type="article"
      jsonLd={[
        articleJsonLd({ title: TITLE, description: DESCRIPTION, path: PATH }),
        breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Logiciel chauffagiste", path: PATH },
        ]),
        faqJsonLd(faqItems),
      ]}
    />
    <Header />

    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <Breadcrumbs
          items={[
            { name: "Accueil", path: "/" },
            { name: "Logiciel chauffagiste", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Logiciel chauffagiste : dépannages, entretiens et installations au même endroit
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Le métier de chauffagiste vit au rythme des saisons : pics de pannes en hiver, entretiens
          au printemps, installations toute l'année. Le point commun : des demandes qui arrivent
          de partout et qu'il ne faut pas perdre.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Pour un chauffagiste, l'enjeu est de <strong>ne pas perdre de demandes pendant les pics</strong>{" "}
            (notamment l'hiver) et de garder l'historique des entretiens. Bulbiz centralise dépannages,
            entretiens et installations via un lien unique, crée un dossier par client et aide à préparer
            les interventions grâce à l'analyse des photos.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-section text-center">Trois activités, un seul outil</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {[
            { icon: Flame, title: "Dépannage", desc: "Pannes de chaudière, urgences hiver : priorisez sans rien perdre." },
            { icon: Wrench, title: "Entretien", desc: "Suivez les entretiens récurrents avec l'historique client." },
            { icon: Snowflake, title: "Installation", desc: "Centralisez les demandes de devis et préparez le matériel." },
          ].map((s, i) => (
            <Card key={i} className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="mx-auto w-fit rounded-lg bg-primary/10 p-3">
                  <s.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-section">Ce que ça change concrètement</h2>
        <div className="mt-8 space-y-4">
          {[
            "Les demandes d'urgence sont identifiées immédiatement",
            "Chaque client a son dossier, avec l'historique des interventions",
            "Les photos de la chaudière aident à préparer le bon matériel",
            "Vous suivez tout depuis votre téléphone, entre deux interventions",
            "Vous ne perdez plus de demandes pendant les pics de saison",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">{f}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link to="/logiciel-plombier" className="font-medium text-primary hover:underline">
            Voir aussi : logiciel plombier →
          </Link>
        </p>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-accent/30" />

    <CTASection dark />
    <Footer />
  </>
);

export default LogicielChauffagiste;
