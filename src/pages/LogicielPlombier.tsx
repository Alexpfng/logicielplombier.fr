import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { FileText, Smartphone, Zap, Clock, FolderOpen, CheckCircle2 } from "lucide-react";

const LogicielPlombier = () => (
  <>
    <Helmet>
      <title>Logiciel Plombier — Le meilleur outil pour gérer vos demandes clients</title>
      <meta name="description" content="Comparatif des logiciels pour plombier. Découvrez pourquoi Bulbiz est l'outil idéal pour centraliser vos demandes clients et mieux organiser votre quotidien terrain." />
      <link rel="canonical" href="https://logiciel-plombier.fr/logiciel-plombier" />
    </Helmet>
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link> / Logiciel Plombier
        </p>
        <h1 className="text-hero">Logiciel plombier : quel outil choisir pour gérer ses demandes clients ?</h1>
        <p className="mt-6 text-subtitle text-muted-foreground leading-relaxed">
          En tant que plombier, vous jonglez chaque jour entre les appels, les SMS, les messages WhatsApp
          et les demandes Google. Comment ne rien perdre ? Quel logiciel peut vraiment vous aider au quotidien ?
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Le problème avec les méthodes classiques</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {[
            { title: "Le carnet papier", desc: "Pratique… jusqu'au moment où vous le perdez, ou que les notes deviennent illisibles." },
            { title: "Le fichier Excel", desc: "Difficile à maintenir, pas accessible sur le terrain, et jamais vraiment à jour." },
            { title: "Le téléphone seul", desc: "Les infos se perdent entre les SMS, les appels et les messages vocaux." },
          ].map((m, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <h3 className="font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Ce qu'un bon logiciel plombier doit offrir</h2>
        <div className="mt-8 space-y-4">
          {[
            { icon: FolderOpen, text: "Centraliser toutes les demandes en un seul endroit" },
            { icon: Smartphone, text: "Fonctionner parfaitement sur mobile, sur le terrain" },
            { icon: Zap, text: "Être simple et rapide à prendre en main" },
            { icon: Clock, text: "Faire gagner du temps, pas en perdre" },
            { icon: FileText, text: "Aider à structurer les infos clients automatiquement" },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
              <c.icon className="h-5 w-5 shrink-0 text-primary" />
              <p className="font-medium">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-accent/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Pourquoi Bulbiz répond à ces critères</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Bulbiz n'est pas un logiciel de gestion classique. C'est un outil pensé pour le terrain.
          Son principe est simple : un lien unique que vous partagez, et toutes les demandes de vos
          clients arrivent au même endroit, structurées automatiquement.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Lien client unique partageable partout",
            "Centralisation automatique des demandes",
            "Photos et vidéos rattachées au bon dossier",
            "IA qui analyse photos/vidéos et génère la liste matériel",
            "Application mobile first",
            "Test gratuit sans engagement",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <CTASection />
    <Footer />
  </>
);

export default LogicielPlombier;
