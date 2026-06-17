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
import { Hammer, Smartphone, FolderOpen, Zap, CheckCircle2, Users } from "lucide-react";

const PATH = "/logiciel-artisan-plombier";
const TITLE = "Logiciel artisan plombier : l'outil simple pour les indépendants du BTP";
const DESCRIPTION =
  "Artisan plombier indépendant : pas besoin d'un ERP lourd. Découvrez un outil simple, mobile et concret pour centraliser vos demandes clients avec Bulbiz. Test gratuit.";

const faqItems: FaqItem[] = [
  {
    q: "Quel logiciel pour un artisan plombier indépendant ?",
    a: "Un artisan plombier indépendant a besoin d'un outil simple, mobile et rapide à prendre en main — pas d'un ERP complexe. Bulbiz centralise les demandes clients et structure les dossiers sans formation, directement depuis le téléphone.",
  },
  {
    q: "Faut-il être à l'aise avec l'informatique ?",
    a: "Non. Bulbiz est pensé pour le terrain : vous partagez un lien, les demandes arrivent organisées, et vous gérez tout depuis votre téléphone. Pas de paramétrage compliqué.",
  },
  {
    q: "Est-ce que ça vaut le coup quand on travaille seul ?",
    a: "Surtout quand on travaille seul. Sans secrétariat, c'est vous qui gérez tout. Centraliser et structurer les demandes vous fait gagner un temps précieux et évite de perdre des chantiers.",
  },
  {
    q: "Quelle différence avec un logiciel de gestion classique ?",
    a: "Les logiciels de gestion classiques sont souvent pensés pour le bureau et nécessitent une vraie prise en main. Bulbiz est un assistant métier mobile first, centré sur la réception et le suivi des demandes clients.",
  },
  {
    q: "Peut-on tester avant de s'engager ?",
    a: "Oui, Bulbiz propose un test gratuit, sans engagement. Vous pouvez l'essayer dans votre quotidien avant de décider.",
  },
];

const LogicielArtisanPlombier = () => (
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
          { name: "Logiciel artisan plombier", path: PATH },
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
            { name: "Logiciel artisan plombier", path: PATH },
          ]}
        />
        <h1 className="text-hero">
          Logiciel artisan plombier : simple, mobile, sans usine à gaz
        </h1>
        <p className="mt-6 text-subtitle leading-relaxed text-muted-foreground">
          Quand on est artisan plombier indépendant, on n'a ni le temps ni l'envie d'apprendre
          un logiciel compliqué. Ce qu'il faut, c'est un outil qui s'adapte au terrain, pas l'inverse.
        </p>
        <div className="mt-8">
          <KeyTakeaway>
            Pour un artisan plombier, le bon logiciel est <strong>simple, mobile et concret</strong> — pas un
            ERP lourd. Bulbiz centralise les demandes clients via un lien unique et crée un dossier par
            client, sans formation. Idéal pour les indépendants qui gèrent tout eux-mêmes.
          </KeyTakeaway>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-section text-center">Pensé pour les indépendants du BTP</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Smartphone, title: "Mobile first", desc: "Tout se gère depuis le téléphone, sur chantier." },
            { icon: Zap, title: "Prise en main immédiate", desc: "Pas de formation, pas de paramétrage." },
            { icon: FolderOpen, title: "Dossiers automatiques", desc: "Une demande = un dossier structuré." },
            { icon: Users, title: "Adapté au solo", desc: "Parfait quand vous êtes votre propre secrétariat." },
          ].map((s, i) => (
            <Card key={i} className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="mx-auto w-fit rounded-lg bg-primary/10 p-3">
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
      <div className="mx-auto max-w-3xl">
        <h2 className="text-section">Ce qu'un artisan plombier y gagne</h2>
        <div className="mt-8 space-y-4">
          {[
            "Moins de temps perdu à trier appels, SMS et messages",
            "Plus aucune demande qui passe à la trappe",
            "Une image plus professionnelle auprès des clients",
            "Un suivi clair, même sans secrétariat",
            "Un démarrage immédiat, sans investissement compliqué",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">{f}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          <Link to="/assistant-administratif-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Assistant administratif →
          </Link>
          <Link to="/application-plombier" className="rounded-full border border-border px-4 py-2 transition-colors hover:border-primary hover:text-primary">
            Application mobile →
          </Link>
        </div>
      </div>
    </SectionWrapper>

    <FaqSection items={faqItems} className="bg-accent/30" />

    <CTASection dark />
    <Footer />
  </>
);

export default LogicielArtisanPlombier;
