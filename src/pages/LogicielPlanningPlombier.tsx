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
import { Calendar, Clock, MapPin, Smartphone, CheckCircle2 } from "lucide-react";

const PATH = "/logiciel-planning-plombier";
const TITLE = "Logiciel de planning pour plombier : organisez vos journées simplement";
const DESCRIPTION =
  "Planifier ses interventions de plomberie sans casse-tête : rendez-vous, urgences, tournées. Découvrez comment mieux organiser vos journées avec Bulbiz. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Comment organiser le planning d'un plombier ?",
    a: "Un bon planning de plombier part des demandes : une fois centralisées et qualifiées, vous placez les rendez-vous en tenant compte des urgences et des déplacements. Bulbiz vous aide à transformer chaque demande en rendez-vous planifié, avec toutes les infos rattachées.",
  },
  {
    q: "Comment gérer les urgences sans casser sa journée ?",
    a: "Quand les demandes sont centralisées, vous identifiez tout de suite ce qui est urgent et ce qui peut attendre. Vous arbitrez plus vite, sans éplucher vos SMS et appels manqués.",
  },
  {
    q: "Peut-on planifier ses rendez-vous depuis son téléphone ?",
    a: "Oui. Bulbiz est mobile first : vous planifiez et consultez vos rendez-vous depuis votre téléphone, sur chantier ou dans le camion, avec les informations du client à portée de main.",
  },
  {
    q: "Faut-il un logiciel de planning séparé ?",
    a: "Pas nécessairement. L'intérêt de Bulbiz est que la planification est liée à la demande : vous évitez de recopier les informations d'un outil à l'autre. Tout reste au même endroit.",
  },
  {
    q: "Comment éviter les trous et les oublis dans son planning ?",
    a: "En reliant chaque rendez-vous à un dossier suivi, vous gardez une vue claire de ce qui est confirmé, en attente ou à relancer. Moins d'oublis, des journées mieux remplies.",
  },
];

const LogicielPlanningPlombier = () => (
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
          { name: "Logiciel planning plombier", path: PATH },
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
            { name: "Logiciel planning plombier", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Logiciel de planning plombier : des journées mieux organisées
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Entre les urgences, les rendez-vous et les déplacements, le planning d'un plombier change
          toute la journée. L'enjeu : garder une vue claire sans y passer des heures.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Le planning d'un plombier devient simple quand il part des <strong>demandes déjà centralisées</strong>.
            Avec Bulbiz, chaque demande qualifiée se transforme en rendez-vous planifié, avec les infos client
            rattachées. Vous arbitrez les urgences plus vite et organisez vos tournées depuis votre téléphone.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-section">Ce qui complique un planning de plombier</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Clock, title: "Les urgences", desc: "Une fuite qui tombe en plein milieu d'une journée déjà pleine." },
            { icon: MapPin, title: "Les déplacements", desc: "Des chantiers aux quatre coins du secteur à enchaîner." },
            { icon: Calendar, title: "Les changements", desc: "Des rendez-vous décalés, annulés, reprogrammés." },
            { icon: Smartphone, title: "Le suivi mobile", desc: "Tout gérer depuis le téléphone, entre deux interventions." },
          ].map((m, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <m.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-section">De la demande au rendez-vous, sans recopier</h2>
        <div className="mt-8 space-y-4">
          {[
            "La demande client arrive centralisée, avec toutes ses infos",
            "Vous identifiez ce qui est urgent et ce qui peut attendre",
            "Vous transformez la demande en rendez-vous planifié",
            "Les informations du client restent rattachées au rendez-vous",
            "Vous suivez et ajustez votre planning depuis votre téléphone",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">{f}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link to="/logiciel-gestion-intervention-plombier" className="font-medium text-primary hover:underline">
            Voir aussi : gestion d'intervention plombier →
          </Link>
        </p>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-accent/30" />

    <CTASection dark />
    <Footer />
  </>
);

export default LogicielPlanningPlombier;
