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
import { FolderOpen, Camera, Calendar, Bell, MapPin, CheckCircle2 } from "lucide-react";

const PATH = "/logiciel-gestion-intervention-plombier";
const TITLE = "Logiciel de gestion d'intervention pour plombier | Suivi des chantiers";
const DESCRIPTION =
  "Suivre ses interventions de plomberie sans rien perdre : demande, dossier, photos, rendez-vous, relances. Découvrez comment Bulbiz structure chaque chantier. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un logiciel de gestion d'intervention pour plombier ?",
    a: "C'est un outil qui aide à suivre chaque demande client de bout en bout : réception, dossier, photos, prise de rendez-vous, intervention et suivi. L'objectif est de ne rien perdre et de savoir à tout moment où en est chaque chantier.",
  },
  {
    q: "Comment suivre ses interventions sans logiciel lourd ?",
    a: "Pas besoin d'un ERP complexe. Bulbiz centralise les demandes via un lien unique et crée automatiquement un dossier par client. Vous suivez l'avancement depuis votre téléphone, sans formation.",
  },
  {
    q: "Comment ne plus oublier une intervention ou un rendez-vous ?",
    a: "Chaque demande devient un dossier suivi, avec ses rendez-vous et ses relances. Vous avez une vue claire de ce qui est planifié, en attente, ou à relancer.",
  },
  {
    q: "Les photos du chantier sont-elles rattachées au bon client ?",
    a: "Oui. Quand le client envoie ses photos via votre lien, elles sont automatiquement rattachées à son dossier. Fini les images perdues dans la galerie du téléphone.",
  },
  {
    q: "Bulbiz convient-il à un plombier seul ou à une petite équipe ?",
    a: "Les deux. Que vous travailliez seul ou à plusieurs, Bulbiz centralise les demandes et structure le suivi pour que chacun sache où en est chaque intervention.",
  },
];

const LogicielGestionInterventionPlombier = () => (
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
          { name: "Logiciel gestion intervention plombier", path: PATH },
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
            { name: "Gestion d'intervention", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Logiciel de gestion d'intervention plombier : suivez chaque chantier sans rien perdre
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Entre la première demande et l'intervention terminée, il se passe beaucoup de choses :
          un appel, des photos, un rendez-vous, une relance. Sans suivi clair, des chantiers
          passent à la trappe.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Un bon suivi d'intervention pour plombier, c'est <strong>un dossier par demande</strong>,
            mis à jour automatiquement : infos client, photos, rendez-vous, relances. Bulbiz crée
            ce dossier dès qu'une demande arrive et vous donne une vue claire de l'avancement de chaque
            chantier — depuis votre téléphone, sur le terrain.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-section text-center">Le cycle d'une intervention, suivi de A à Z</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: FolderOpen, title: "Demande reçue", desc: "Un dossier client est créé automatiquement." },
            { icon: Camera, title: "Photos rattachées", desc: "Les visuels du problème sont liés au bon dossier." },
            { icon: Calendar, title: "Rendez-vous planifié", desc: "Vous organisez l'intervention simplement." },
            { icon: MapPin, title: "Intervention", desc: "Toutes les infos sont accessibles sur place." },
            { icon: Bell, title: "Relance", desc: "Un devis ou un retour en attente ? Vous le savez." },
            { icon: CheckCircle2, title: "Suivi clair", desc: "Vous voyez l'état de chaque chantier d'un coup d'œil." },
          ].map((s, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <div className="w-fit rounded-lg bg-primary/10 p-3">
                  <s.icon className="h-6 w-6 text-primary" />
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
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-section">Pensé pour le terrain, pas pour le bureau</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Les logiciels de gestion classiques sont souvent conçus pour être utilisés assis, devant un
          ordinateur. Le plombier, lui, travaille sur chantier. Bulbiz est mobile first : vous suivez
          vos interventions là où vous êtes.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/logiciel-planning-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Planning plombier →
          </Link>
          <Link to="/application-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Application mobile →
          </Link>
          <Link to="/logiciel-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Quel logiciel choisir ? →
          </Link>
        </div>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-accent/30" />

    <CTASection dark />
    <Footer />
  </>
);

export default LogicielGestionInterventionPlombier;
