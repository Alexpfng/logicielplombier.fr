import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Smartphone, MapPin, Clock, Wrench, CheckCircle2 } from "lucide-react";

const ApplicationPlombier = () => (
  <>
    <Helmet>
      <title>Application Plombier — L'outil mobile pour gérer vos clients sur le terrain</title>
      <meta name="description" content="Découvrez l'application mobile idéale pour les plombiers. Bulbiz centralise vos demandes clients depuis votre téléphone. Sur chantier, dans le camion, partout." />
      <link rel="canonical" href="https://logiciel-plombier.fr/application-plombier" />
    </Helmet>
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors">Accueil</Link> / Application Plombier
        </p>
        <h1 className="text-hero">Application plombier : gérez vos clients depuis votre téléphone</h1>
        <p className="mt-6 text-subtitle text-muted-foreground leading-relaxed">
          En tant que plombier, votre bureau c'est votre téléphone. Vous avez besoin d'un outil
          qui fonctionne là où vous travaillez : sur le terrain.
        </p>
      </div>
    </SectionWrapper>

    <SectionWrapper className="bg-plumber-warm">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Pourquoi une application mobile est essentielle</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {[
            { icon: MapPin, title: "Sur chantier", desc: "Consultez vos demandes et dossiers entre deux interventions" },
            { icon: Wrench, title: "Dans le camion", desc: "Vérifiez les infos client avant d'arriver sur place" },
            { icon: Clock, title: "Entre deux RDV", desc: "Répondez aux nouvelles demandes en quelques secondes" },
            { icon: Smartphone, title: "Partout", desc: "Tout votre suivi client dans votre poche" },
          ].map((u, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <u.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-3 font-semibold">{u.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <SectionWrapper>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-section">Bulbiz : pensé mobile first</h2>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Bulbiz a été conçu dès le départ pour être utilisé sur téléphone.
          Pas une version desktop adaptée en mobile, mais un vrai outil pensé pour le terrain.
        </p>
        <div className="mt-8 space-y-3">
          {[
            "Interface fluide et rapide sur smartphone",
            "Notifications en temps réel des nouvelles demandes",
            "Photos et vidéos accessibles en un clic",
            "Gestion des rendez-vous depuis l'app",
            "Fonctionne même avec une connexion limitée",
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-primary" />
              <p className="text-muted-foreground">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>

    <CTASection />
    <Footer />
  </>
);

export default ApplicationPlombier;
