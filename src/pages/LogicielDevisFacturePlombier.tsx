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
import { FileText, Camera, Wrench, Clock, CheckCircle2, AlertTriangle } from "lucide-react";

const PATH = "/logiciel-devis-facture-plombier";
const TITLE = "Logiciel devis facture plombier : comment gagner du temps sur vos devis";
const DESCRIPTION =
  "Devis et factures de plomberie : pourquoi vous perdez du temps, ce qu'un bon outil doit faire, et comment Bulbiz aide à préparer vos devis plus vite grâce à l'IA. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Existe-t-il un logiciel de devis et facture pour plombier ?",
    a: "Oui, il existe de nombreux logiciels de devis et facturation pour artisans. La vraie difficulté n'est pas d'éditer un devis, mais de réunir rapidement les bonnes informations (besoin du client, photos, matériel). Bulbiz se concentre sur cette étape amont : centraliser la demande et préparer la liste de matériel pour aller plus vite ensuite.",
  },
  {
    q: "Bulbiz fait-il les factures ?",
    a: "Bulbiz est avant tout un assistant qui centralise les demandes clients et aide à préparer les devis (analyse des photos, liste de matériel). Ce n'est pas un logiciel de comptabilité complet : pour la facturation et la comptabilité, il s'utilise en complément de votre outil habituel.",
  },
  {
    q: "Comment faire un devis de plomberie plus rapidement ?",
    a: "Le plus gros gain de temps vient de l'amont : si le client envoie photos et description via un lien, et que l'IA propose une liste de matériel, vous n'avez plus qu'à ajuster. Vous évitez les allers-retours et les déplacements inutiles avant de chiffrer.",
  },
  {
    q: "Comment éviter d'oublier de relancer un devis ?",
    a: "Beaucoup de chantiers sont perdus faute de relance. En centralisant chaque demande dans un dossier suivi, vous gardez une vue claire de ce qui est en attente de réponse et vous relancez au bon moment.",
  },
  {
    q: "Pourquoi je perds du temps sur mes devis aujourd'hui ?",
    a: "Le temps perdu vient rarement de la saisie du devis : il vient de la collecte d'informations dispersées (appels, SMS, photos par WhatsApp), des déplacements pour constater, et des relances oubliées. C'est précisément là que Bulbiz fait gagner du temps.",
  },
];

const LogicielDevisFacturePlombier = () => (
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
          { name: "Logiciel devis facture plombier", path: PATH },
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
            { name: "Logiciel devis facture plombier", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Logiciel devis facture plombier : où se cache vraiment la perte de temps ?
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Faire un devis de plomberie ne prend que quelques minutes. Ce qui prend du temps,
          c'est tout ce qu'il y a <strong>avant</strong> : comprendre le besoin, obtenir des photos,
          estimer le matériel, et ne pas oublier de relancer.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Pour un plombier, le devis n'est pas le problème : c'est la <strong>collecte d'informations</strong>{" "}
            et la <strong>relance</strong> qui font perdre du temps et des chantiers. Bulbiz agit en amont —
            il centralise la demande, rassemble photos et infos, et aide à préparer la liste de matériel —
            pour que le chiffrage soit rapide. Pour l'édition de factures et la comptabilité, il complète
            votre logiciel habituel.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-section">Pourquoi un devis prend (vraiment) du temps</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: Clock, title: "Les allers-retours", desc: "Appels et SMS pour comprendre le besoin avant même de chiffrer." },
            { icon: Camera, title: "Les photos éparpillées", desc: "Des images reçues par WhatsApp, perdues dans la galerie du téléphone." },
            { icon: Wrench, title: "Le matériel à estimer", desc: "Lister les pièces et fournitures de tête, sans rien oublier." },
            { icon: FileText, title: "Les relances", desc: "Le devis envoyé… puis oublié, faute de suivi." },
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
        <h2 className="text-section">Comment Bulbiz accélère la préparation de vos devis</h2>
        <div className="mt-8 space-y-4">
          {[
            "Le client envoie sa demande, ses photos et ses infos via un lien unique",
            "Tout est rassemblé dans un dossier structuré, au bon endroit",
            "L'IA analyse les photos et vidéos et propose une liste de matériel",
            "Vous arrivez préparé et vous chiffrez plus vite, sans aller-retour inutile",
            "Chaque demande reste suivie : vous savez ce qui attend une réponse",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-accent/30">
      <div className="mx-auto max-w-3xl">
        <Card className="border-amber-500/30 bg-amber-50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 font-semibold text-amber-800">
              <AlertTriangle className="h-5 w-5" />
              À garder en tête
            </div>
            <p className="mt-3 text-sm leading-relaxed text-amber-800/90">
              Bulbiz n'est pas un logiciel de comptabilité ni un ERP de facturation complet.
              C'est un assistant métier qui fait gagner du temps sur la partie la plus chronophage :
              recevoir, structurer et préparer la demande. Pour l'édition des factures et le suivi comptable,
              utilisez-le en complément de votre solution existante.
            </p>
          </CardContent>
        </Card>
        <p className="mt-8 text-center">
          <Link to="/logiciel-plombier" className="font-medium text-primary hover:underline">
            Voir aussi : quel logiciel plombier choisir →
          </Link>
        </p>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-plumber-warm" />

    <CTASection dark />
    <Footer />
  </>
);

export default LogicielDevisFacturePlombier;
