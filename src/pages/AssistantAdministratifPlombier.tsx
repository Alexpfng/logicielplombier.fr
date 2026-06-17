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
import { Inbox, FolderOpen, Bell, Clock, CheckCircle2, MessageSquare } from "lucide-react";

const PATH = "/assistant-administratif-plombier";
const TITLE = "Assistant administratif pour plombier : déléguez le suivi des demandes";
const DESCRIPTION =
  "Trop d'administratif quand on est plombier ? Découvrez comment un assistant métier comme Bulbiz centralise les demandes, structure les dossiers et réduit la charge mentale. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Qu'est-ce qu'un assistant administratif pour plombier ?",
    a: "C'est un outil (ou un service) qui prend en charge les tâches répétitives autour des demandes clients : centraliser les messages, structurer les dossiers, rassembler les photos, rappeler les relances. Bulbiz joue ce rôle d'assistant métier, pensé pour le terrain.",
  },
  {
    q: "Bulbiz remplace-t-il une vraie secrétaire ?",
    a: "Non, et ce n'est pas son but. Bulbiz automatise la partie répétitive et chronophage (réception, tri, structuration des demandes) pour vous faire gagner du temps. Il ne remplace pas un échange humain quand il est nécessaire.",
  },
  {
    q: "Comment réduire la charge administrative quand on est plombier ?",
    a: "La charge vient surtout des informations dispersées : appels, SMS, WhatsApp, photos. En centralisant tout via un lien unique et en créant un dossier par demande, Bulbiz réduit la saisie manuelle et la charge mentale.",
  },
  {
    q: "Est-ce compliqué à mettre en place ?",
    a: "Non. Vous partagez un lien (fiche Google, site, camion, QR code) et les demandes commencent à arriver structurées. Pas de formation lourde, prise en main immédiate depuis le téléphone.",
  },
  {
    q: "Combien de temps peut-on gagner ?",
    a: "Le gain dépend du volume de demandes, mais l'essentiel est de récupérer le temps perdu en allers-retours, en recherche d'informations et en relances oubliées. Vous restez concentré sur le métier, pas sur la paperasse.",
  },
];

const AssistantAdministratifPlombier = () => (
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
          { name: "Assistant administratif plombier", path: PATH },
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
            { name: "Assistant administratif plombier", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Assistant administratif plombier : moins de paperasse, plus de chantier
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Vous êtes plombier, pas secrétaire. Pourtant, une bonne partie de vos soirées part dans
          le tri des messages, la recherche de photos et les relances. C'est exactement ce qu'un
          assistant métier peut prendre en charge.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Un assistant administratif pour plombier prend en charge les tâches répétitives liées aux
            demandes clients : <strong>centraliser, trier, structurer, relancer</strong>. Bulbiz fait ça
            automatiquement à partir d'un lien unique : chaque demande devient un dossier complet, sans
            saisie manuelle. Il automatise le répétitif — il ne remplace pas l'humain quand un vrai échange
            est nécessaire.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-section text-center">Ce que l'assistant prend en charge</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Inbox, title: "Réception des demandes", desc: "Appels, SMS, WhatsApp, Google : tout arrive au même endroit." },
            { icon: FolderOpen, title: "Structuration", desc: "Un dossier complet créé automatiquement par client." },
            { icon: MessageSquare, title: "Qualification", desc: "Les infos utiles sont rassemblées dès le départ." },
            { icon: Bell, title: "Relances", desc: "Les devis et retours en attente ne sont plus oubliés." },
            { icon: Clock, title: "Gain de temps", desc: "Moins de saisie, moins de recherche, moins de charge mentale." },
            { icon: CheckCircle2, title: "Suivi clair", desc: "Vous savez à tout moment où en est chaque demande." },
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
        <h2 className="text-section">Reprenez vos soirées</h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Quand l'administratif est géré au fil de l'eau, vous ne finissez plus vos journées à
          rattraper le retard. Vous répondez plus vite, vous oubliez moins, et vous paraissez plus
          professionnel auprès de vos clients.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/logiciel-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Quel logiciel plombier ? →
          </Link>
          <Link to="/bulbiz-avis" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Notre avis sur Bulbiz →
          </Link>
        </div>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-accent/30" />

    <CTASection dark />
    <Footer />
  </>
);

export default AssistantAdministratifPlombier;
