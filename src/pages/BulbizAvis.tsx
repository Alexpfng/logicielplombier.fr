import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import Seo from "@/components/Seo";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { Card, CardContent } from "@/components/ui/card";
import { Star, CheckCircle2, ThumbsUp, ThumbsDown } from "lucide-react";
import { Link } from "react-router-dom";

const PATH = "/bulbiz-avis";
const TITLE = "Avis Bulbiz — Test complet pour plombiers et artisans du BTP";
const DESCRIPTION =
  "Notre avis complet sur Bulbiz : le logiciel de centralisation des demandes clients pour plombiers et chauffagistes. Test, fonctionnalités, points forts et limites.";

const BulbizAvis = () => (
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
          { name: "Avis Bulbiz", path: PATH },
        ]),
      ]}
    />
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link> / Avis Bulbiz
        </p>
        <h1 className="text-hero">Notre avis sur Bulbiz</h1>
        <p className="mt-4 text-subtitle text-muted-foreground">
          Test complet de la solution de centralisation des demandes clients pour plombiers, chauffagistes et artisans du BTP.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">En résumé</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Bulbiz est un outil conçu spécifiquement pour les artisans du terrain. Son objectif est clair :
          centraliser toutes les demandes clients au même endroit, qu'elles viennent d'un appel, d'un SMS,
          de WhatsApp ou de Google. L'approche est simple, mobile first, et pensée pour des professionnels
          qui passent leur journée en chantier, pas devant un écran.
        </p>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Ce n'est pas un logiciel de gestion tout-en-un. C'est un outil focalisé sur un problème précis :
          ne plus perdre de demandes clients. Et sur ce créneau, il fait le job.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Analyse des fonctionnalités</h2>
        <div className="mt-8 space-y-6">
          {[
            { title: "Lien client unique", desc: "Le principe est malin : un seul lien à partager partout. Le client remplit sa demande, ajoute des photos, et tout est structuré automatiquement. Simple et efficace." },
            { title: "Centralisation automatique", desc: "Toutes les demandes arrivent au même endroit. Plus besoin de fouiller dans ses SMS, emails ou notes. C'est le cœur de la proposition de valeur." },
            { title: "Organisation des dossiers", desc: "Chaque demande devient un dossier structuré avec les infos client, photos et détails. La structuration automatique fait gagner un temps précieux." },
            { title: "IA métier intégrée", desc: "L'IA de Bulbiz analyse les photos et vidéos envoyées par les clients pour générer automatiquement des listes de matériel. Concrète et utile, pas gadget." },
            { title: "Usage mobile", desc: "L'application est clairement pensée mobile first. Sur chantier, dans le camion : l'expérience est fluide et rapide." },
          ].map((f, i) => (
            <div key={i}>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
        <Card className="border-primary/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-primary font-semibold mb-4">
              <ThumbsUp className="h-5 w-5" /> Ce qu'on aime
            </div>
            <ul className="space-y-3">
              {["Pensée pour le terrain", "Centralisation simple des demandes", "Mobile first", "IA concrète et utile", "Prise en main rapide", "Amélioration continue"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />{item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-amber-500/20">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 text-amber-600 font-semibold mb-4">
              <ThumbsDown className="h-5 w-5" /> À garder en tête
            </div>
            <ul className="space-y-3">
              {["Solution jeune, en évolution", "Pas un ERP complet", "Demande une organisation de base"].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />{item}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Avis utilisateurs réels</h2>
        <p className="mt-2 text-sm text-muted-foreground">Retours issus d'échanges terrain et d'avis vérifiés.</p>
        <div className="mt-8 space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, j) => <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
              <p className="italic text-muted-foreground">"Équipe au top, réactive, service très correct et en constante amélioration."</p>
              <p className="mt-3 text-sm font-semibold">Erwan Vignol <span className="text-muted-foreground font-normal">— Avis Google</span></p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <p className="italic text-muted-foreground">"Retour très positif sur l'approche terrain et la simplicité de la solution pour les artisans."</p>
              <p className="mt-3 text-sm font-semibold">Nisrine Benabdelkader <span className="text-muted-foreground font-normal">— LinkedIn</span></p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-accent/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-section">Verdict</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Bulbiz est une solution pertinente et honnête pour les plombiers et chauffagistes qui veulent
          arrêter de perdre des demandes clients. Ce n'est pas un outil miracle, mais un compagnon de terrain
          qui vous aide à mieux vous organiser au quotidien. Si vous cherchez un logiciel plombier simple,
          mobile et concret, ça vaut le test gratuit.
        </p>
      </div>
    </SectionWrapper>

    <CTASection />
    <Footer />
  </>
);

export default BulbizAvis;
