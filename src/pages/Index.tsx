import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Phone, MessageSquare, MessageCircle, Globe, FileX, Clock,
  Link2, Users, Camera, Calendar, Bell, FolderOpen,
  Smartphone, Shield, Zap, CheckCircle2, ArrowRight,
  Wrench, Flame, Building2, Briefcase, Star, ThumbsUp, ThumbsDown,
  Mic, FileText, MapPin, TrendingUp, Heart, Award
} from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Logiciel Plombier — Centralisez vos demandes clients | Bulbiz</title>
        <meta name="description" content="Découvrez le meilleur logiciel pour plombiers et chauffagistes. Bulbiz centralise automatiquement vos demandes clients. Simple, mobile, efficace. Testez gratuitement." />
        <link rel="canonical" href="https://logiciel-plombier.fr/" />
      </Helmet>

      <Header />

      {/* === HERO === */}
      <section className="relative overflow-hidden bg-background section-padding pb-0 md:pb-0">
        <div className="container-tight">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex flex-wrap gap-2">
                {["Pensé pour les artisans", "Simple à prendre en main", "Mobile first", "Test gratuit"].map((badge) => (
                  <span key={badge} className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    {badge}
                  </span>
                ))}
              </div>

              <h1 className="text-hero text-balance">
                Vous ne manquez pas de clients.<br />
                <span className="text-primary">Vous perdez des demandes.</span>
              </h1>

              <p className="mt-6 text-subtitle text-muted-foreground leading-relaxed">
                Appels, SMS, WhatsApp, Google…<br />
                Vos demandes arrivent de partout.<br />
                <strong>Bulbiz les centralise automatiquement au même endroit.</strong>
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="px-8 py-6 text-base" asChild>
                  <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer">
                    Tester gratuitement <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 text-base" asChild>
                  <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer">
                    Découvrir Bulbiz
                  </a>
                </Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                Pas besoin de changer vos habitudes.<br />
                On s'adapte à votre façon de travailler.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Mock phone frame */}
              <div className="mx-auto max-w-xs">
                <div className="rounded-[2.5rem] border-8 border-foreground/10 bg-card p-4 shadow-2xl">
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-primary/20" />
                    <div className="h-2 flex-1 rounded-full bg-muted" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { icon: Phone, label: "Appel entrant — M. Dupont", color: "bg-primary/10 text-primary" },
                      { icon: MessageCircle, label: "WhatsApp — Fuite cuisine", color: "bg-green-100 text-green-700" },
                      { icon: Globe, label: "Google — Nouvelle demande", color: "bg-amber-100 text-amber-700" },
                      { icon: MessageSquare, label: "SMS — Chaudière en panne", color: "bg-blue-100 text-blue-700" },
                    ].map((item, i) => (
                      <div key={i} className={`flex items-center gap-3 rounded-xl p-3 ${item.color}`}>
                        <item.icon className="h-5 w-5 shrink-0" />
                        <span className="text-sm font-medium">{item.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-xl bg-primary p-3 text-center text-sm font-medium text-primary-foreground">
                    4 demandes centralisées ✓
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick benefits */}
          <div className="mt-16 grid gap-4 pb-16 sm:grid-cols-3">
            {[
              { icon: FolderOpen, title: "Centralisation des demandes", desc: "Tout arrive au même endroit" },
              { icon: Zap, title: "Meilleure organisation", desc: "Fini les infos perdues" },
              { icon: Clock, title: "Gain de temps", desc: "Plus de productivité au quotidien" },
            ].map((b, i) => (
              <Card key={i} className="border-border/50 bg-card/50 backdrop-blur">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="rounded-lg bg-primary/10 p-2.5">
                    <b.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{b.title}</p>
                    <p className="text-sm text-muted-foreground">{b.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* === SECTION 1: PROBLÈME TERRAIN === */}
      <SectionWrapper className="bg-plumber-warm">
        <div className="text-center">
          <h2 className="text-section">Le vrai quotidien d'un plombier</h2>
        </div>
        <div className="mt-10 max-w-2xl mx-auto text-lg leading-relaxed text-muted-foreground space-y-4">
          <p>Vous êtes sur un chantier. Votre téléphone sonne.</p>
          <p>Un client laisse un message. Un autre envoie un SMS. Un troisième passe par Google.</p>
          <p>Vous vous dites : <em>"Je note ça plus tard."</em></p>
          <p className="font-semibold text-foreground">Et parfois : vous oubliez, vous perdez l'info, vous répondez trop tard.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {[
            { icon: Phone, label: "Appel entrant" },
            { icon: MessageSquare, label: "SMS" },
            { icon: MessageCircle, label: "WhatsApp" },
            { icon: Globe, label: "Google" },
            { icon: FileX, label: "Note oubliée" },
            { icon: Clock, label: "Non traitée" },
          ].map((item, i) => (
            <Card key={i} className="border-border/50 text-center">
              <CardContent className="flex flex-col items-center gap-2 p-4">
                <item.icon className="h-7 w-7 text-primary" />
                <span className="text-xs font-medium text-muted-foreground">{item.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-semibold text-foreground">
          Ce n'est pas un manque de travail.<br />
          <span className="text-primary">C'est un manque d'organisation.</span>
        </p>
      </SectionWrapper>

      {/* === SECTION 2: DOULEUR / IMPACT === */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-section">Ce que ça vous coûte vraiment</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { icon: FileText, title: "Une réponse trop tardive", desc: "Un client qui attend votre retour… et qui finit par appeler un autre artisan." },
            { icon: FileX, title: "Une demande oubliée", desc: "Un message perdu dans le flot des appels et des SMS." },
            { icon: TrendingUp, title: "Des chantiers perdus", desc: "Du chiffre d'affaires invisible qui part chez vos concurrents." },
          ].map((item, i) => (
            <Card key={i} className="border-destructive/20 bg-destructive/5">
              <CardContent className="p-6">
                <item.icon className="h-8 w-8 text-destructive/70" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-bold text-foreground">
          Vous perdez des chantiers…<br />
          <span className="text-primary">sans même le savoir.</span>
        </p>
      </SectionWrapper>

      {/* === SECTION 3: SOLUTION SIMPLE === */}
      <SectionWrapper className="bg-accent/50">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-section">Un principe simple</h2>
          <p className="mt-4 text-xl font-medium text-primary">
            Un lien unique pour recevoir toutes vos demandes clients
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Vous mettez ce lien sur votre fiche Google, votre site, votre camion, vos cartes, avec un QR code.
            Vos clients font leur demande, ajoutent les infos, et tout arrive dans Bulbiz.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-4">
          {[
            { step: "1", title: "Lien partagé", desc: "Partout où vos clients vous trouvent" },
            { step: "2", title: "Client remplit", desc: "Infos, photos, description du besoin" },
            { step: "3", title: "Demande centralisée", desc: "Tout arrive au même endroit" },
            { step: "4", title: "Dossier créé", desc: "Automatiquement structuré" },
          ].map((s, i) => (
            <Card key={i} className="text-center">
              <CardContent className="p-6">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                  {s.step}
                </div>
                <h3 className="mt-4 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* === SECTION 4: ORGANISATION AUTO === */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-section">Tout est organisé automatiquement</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Users, title: "Demande structurée", desc: "Chaque demande client est claire et complète" },
            { icon: FolderOpen, title: "Dossier créé automatiquement", desc: "Plus besoin de tout recopier" },
            { icon: Camera, title: "Photos rattachées", desc: "Les images sont liées au bon client, au bon dossier" },
            { icon: Calendar, title: "Rendez-vous planifiés", desc: "Organisez vos interventions simplement" },
            { icon: Bell, title: "Relances automatiques", desc: "Ne laissez plus un client sans réponse" },
            { icon: Shield, title: "Suivi complet", desc: "Vous savez où en est chaque demande" },
          ].map((f, i) => (
            <Card key={i} className="border-border/50 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="mt-10 text-center text-lg font-semibold">
          Plus besoin de chercher. <span className="text-primary">Plus besoin d'y penser.</span>
        </p>
      </SectionWrapper>

      {/* === SECTION 5: IA MÉTIER === */}
      <SectionWrapper dark>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-section">
            Pas une IA gadget.<br />
            <span className="text-primary">Une IA pensée pour le BTP.</span>
          </h2>
          <p className="mt-6 text-lg text-primary-foreground/70 leading-relaxed">
            Vos clients envoient des photos et vidéos de leur problème.
            Bulbiz analyse automatiquement les visuels et génère la liste de matériel nécessaire.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { icon: Camera, label: "Analyse photo & vidéo" },
              { icon: Wrench, label: "Liste matériel auto" },
              { icon: Zap, label: "Envoi automatique" },
            ].map((a, i) => (
              <div key={i} className="flex flex-col items-center gap-3 rounded-xl border border-primary-foreground/10 p-6">
                <a.icon className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium text-primary-foreground/80">{a.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-lg font-semibold text-primary-foreground">
            Une IA qui vous fait gagner du temps.<br />
            Pas une IA pour faire joli.
          </p>
        </div>
      </SectionWrapper>

      {/* === SECTION 6: POSITIONNEMENT === */}
      <SectionWrapper className="bg-accent/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-section">Bulbiz n'est pas un logiciel.</h2>
          <div className="mt-8 space-y-3 text-xl text-muted-foreground">
            <p>C'est <strong className="text-foreground">votre organisation.</strong></p>
            <p>C'est <strong className="text-foreground">votre suivi client.</strong></p>
            <p>C'est <strong className="text-foreground">votre mémoire.</strong></p>
          </div>
          <div className="mt-10 inline-block rounded-2xl bg-primary px-8 py-4">
            <p className="text-lg font-bold text-primary-foreground">
              La boîte à outils digitale du plombier.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* === SECTION 7: RÉSULTATS === */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-section">Ce que ça change pour vous</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {[
            { icon: CheckCircle2, text: "Vous ne perdez plus de demandes" },
            { icon: TrendingUp, text: "Vous choisissez les chantiers les plus rentables" },
            { icon: Zap, text: "Vous êtes plus rapide que vos concurrents" },
            { icon: Award, text: "Vous paraissez plus professionnel" },
          ].map((r, i) => (
            <div key={i} className="flex items-center gap-4 rounded-xl border border-primary/20 bg-primary/5 p-5">
              <r.icon className="h-6 w-6 shrink-0 text-primary" />
              <p className="font-medium">{r.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-xl font-bold">
          Rien ne se perd. <span className="text-primary">Tout se transforme en chantier.</span>
        </p>
      </SectionWrapper>

      {/* === SECTION 8: CONFIANCE CLIENT === */}
      <SectionWrapper className="bg-plumber-warm">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-section">Vos clients le ressentent immédiatement</h2>
          <div className="mt-8 space-y-3 text-lg text-muted-foreground">
            <p>Quand vous <strong className="text-foreground">répondez vite</strong>,</p>
            <p>que vous êtes <strong className="text-foreground">organisé</strong>,</p>
            <p>et que vous <strong className="text-foreground">ne perdez rien</strong>,</p>
            <p>vous <strong className="text-foreground">inspirez confiance</strong>.</p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Heart className="h-6 w-6 text-primary" />
            <p className="text-xl font-bold text-foreground">
              Et dans le BTP, la confiance fait tout.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* === SECTION 9: MOBILE FIRST === */}
      <SectionWrapper>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-section">Votre bureau, c'est votre téléphone</h2>
            <div className="mt-6 space-y-3 text-lg text-muted-foreground">
              <p>Sur chantier.</p>
              <p>Dans le camion.</p>
              <p>Entre deux rendez-vous.</p>
              <p className="font-semibold text-foreground">Bulbiz est pensé pour ça.</p>
            </div>
            <div className="mt-8">
              <Button size="lg" asChild>
                <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer">
                  Tester sur mobile <Smartphone className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-56 rounded-[2rem] border-4 border-foreground/10 bg-card p-5 shadow-xl">
              <div className="space-y-3">
                <div className="h-4 w-3/4 rounded bg-primary/20" />
                <div className="h-3 w-full rounded bg-muted" />
                <div className="h-3 w-5/6 rounded bg-muted" />
                <div className="mt-4 rounded-lg bg-primary/10 p-3 text-center text-xs font-medium text-primary">
                  3 demandes en attente
                </div>
                <div className="rounded-lg bg-accent p-3 text-xs text-muted-foreground">
                  📸 2 photos reçues
                </div>
                <div className="rounded-lg bg-accent p-3 text-xs text-muted-foreground">
                  📅 RDV confirmé demain 9h
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* === SECTION 10: DÉMO VIDÉO === */}
      <SectionWrapper className="bg-accent/30" id="demo">
        <div className="text-center">
          <h2 className="text-section">Voyez comment Bulbiz fonctionne en situation réelle</h2>
        </div>
        <div className="mt-10 mx-auto max-w-3xl">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-lg">
            <div className="aspect-video rounded-xl bg-muted flex items-center justify-center">
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg className="h-8 w-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground font-medium">Démo vidéo Bulbiz</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Intégrez votre vidéo ici</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-5">
          {[
            "Réception de la demande",
            "Dossier structuré",
            "Suivi plus clair",
            "Devis facilité",
            "RDV mieux organisés",
          ].map((step, i) => (
            <div key={i} className="flex items-center gap-2 rounded-lg bg-card p-3 text-center text-sm font-medium shadow-sm">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">
                {i + 1}
              </span>
              {step}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* === SECTION 11: AVIS / PREUVES SOCIALES === */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-section">Ce qu'en disent les utilisateurs</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Retours réels issus d'échanges terrain et d'avis utilisateurs
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Erwan Vignol",
              source: "Avis Google",
              text: "Équipe au top, réactive, service très correct et en constante amélioration.",
              rating: 5,
            },
            {
              name: "Nisrine Benabdelkader",
              source: "LinkedIn",
              text: "Retour très positif sur l'approche terrain et la simplicité de la solution pour les artisans.",
              rating: null,
            },
            {
              name: "Yannis Benabdelkader",
              source: "LinkedIn",
              text: "Une solution qui répond vraiment aux besoins concrets du quotidien des artisans du BTP.",
              rating: null,
            },
          ].map((testimonial, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                {testimonial.rating && (
                  <div className="mb-3 flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                )}
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.source}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* === SECTION 12: NOTRE AVIS === */}
      <SectionWrapper className="bg-plumber-warm">
        <div className="text-center">
          <h2 className="text-section">Notre avis sur Bulbiz</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Bulbiz est une solution particulièrement pertinente pour les plombiers et chauffagistes
            qui veulent reprendre le contrôle sur leurs demandes clients. Simple, concrète, mobile :
            elle a été pensée pour le terrain, pas pour un bureau.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-primary font-semibold mb-4">
                <ThumbsUp className="h-5 w-5" />
                Ce qu'on aime
              </div>
              <ul className="space-y-3">
                {[
                  "Pensée pour le terrain",
                  "Centralisation simple des demandes",
                  "Logique mobile first",
                  "Approche concrète, pas abstraite",
                  "Amélioration continue du produit",
                  "Expérience plus fluide pour l'artisan",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="border-amber-500/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-amber-600 font-semibold mb-4">
                <ThumbsDown className="h-5 w-5" />
                À garder en tête
              </div>
              <ul className="space-y-3">
                {[
                  "Solution en évolution constante",
                  "Approche différente des logiciels de gestion classiques",
                  "Nécessite une vraie logique d'organisation pour en tirer le meilleur",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-amber-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* === SECTION 13: FONCTIONNALITÉS === */}
      <SectionWrapper id="fonctionnalites">
        <div className="text-center">
          <h2 className="text-section">Fonctionnalités clés</h2>
          <p className="mt-4 text-muted-foreground">Chaque fonctionnalité est pensée pour le quotidien terrain.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Link2, title: "Lien client unique", desc: "Un seul lien pour recevoir toutes les demandes" },
            { icon: FolderOpen, title: "Demande centralisée", desc: "Tout arrive au même endroit, bien organisé" },
            { icon: FileText, title: "Ajout d'informations", desc: "Le client ajoute tout ce qu'il faut" },
            { icon: Camera, title: "Photos et vidéos", desc: "Images rattachées au bon dossier client" },
            { icon: Zap, title: "Structuration automatique", desc: "Dossier créé et organisé tout seul" },
            { icon: FileText, title: "Aide au devis", desc: "Générez vos devis plus rapidement" },
            { icon: Calendar, title: "Gestion rendez-vous", desc: "Planifiez facilement vos interventions" },
            { icon: Bell, title: "Relances", desc: "Ne laissez plus un client sans réponse" },
            { icon: Shield, title: "Suivi complet", desc: "Visualisez l'avancement de chaque dossier" },
          ].map((f, i) => (
            <Card key={i} className="group border-border/50 hover:border-primary/30 hover:shadow-md transition-all">
              <CardContent className="p-6">
                <div className="rounded-lg bg-primary/10 p-3 w-fit group-hover:bg-primary/20 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* === SECTION 14: CAS D'USAGE === */}
      <SectionWrapper className="bg-accent/30">
        <div className="text-center">
          <h2 className="text-section">Situations concrètes</h2>
        </div>
        <div className="mt-10 space-y-6">
          {[
            {
              title: "Un appel en plein chantier",
              steps: [
                "Vous êtes sous un évier. Un client appelle.",
                "Vous ne pouvez pas répondre. Pas grave : il a votre lien Bulbiz.",
                "Il remplit sa demande, ajoute des photos.",
                "Vous retrouvez tout à la pause, bien organisé.",
              ],
            },
            {
              title: "Un devis à envoyer vite",
              steps: [
                "Un client veut un devis pour une fuite.",
                "Les infos sont déjà structurées dans Bulbiz.",
                "Vous générez le devis en quelques clics.",
                "Le client reçoit votre réponse plus vite que vos concurrents.",
              ],
            },
            {
              title: "Plusieurs demandes le même jour",
              steps: [
                "3 appels, 2 SMS, 1 demande Google.",
                "Tout arrive au même endroit dans Bulbiz.",
                "Vous traitez chaque demande dans l'ordre.",
                "Rien n'est oublié, tout est suivi.",
              ],
            },
          ].map((useCase, i) => (
            <Card key={i} className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground font-bold">
                    {i + 1}
                  </span>
                  {useCase.title}
                </h3>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-4">
                  {useCase.steps.map((step, j) => (
                    <div key={j} className="rounded-lg bg-accent/50 p-3 text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Étape {j + 1} : </span>{step}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* === SECTION 15: COMPARAISON === */}
      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-section">
            Pourquoi Bulbiz parle davantage au terrain<br className="hidden sm:inline" /> que les outils trop génériques
          </h2>
        </div>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="p-4 text-left font-medium text-muted-foreground">Critère</th>
                <th className="p-4 text-center font-medium text-muted-foreground">Outil générique</th>
                <th className="p-4 text-center font-medium text-primary">Bulbiz</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Réception des demandes", "Email / formulaire", "Lien unique multi-canal"],
                ["Centralisation des infos", "Manuelle", "Automatique"],
                ["Logique terrain", "Bureau", "Chantier / mobile"],
                ["Simplicité d'usage", "Formation nécessaire", "Prise en main immédiate"],
                ["Usage mobile", "Adapté en second", "Mobile first"],
                ["Suivi des dossiers", "Tableur / notes", "Structuré automatiquement"],
                ["Rapidité de traitement", "Lent", "Rapide et fluide"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="p-4 font-medium">{row[0]}</td>
                  <td className="p-4 text-center text-muted-foreground">{row[1]}</td>
                  <td className="p-4 text-center font-medium text-primary">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      {/* === SECTION 16: À QUI ÇA S'ADRESSE === */}
      <SectionWrapper className="bg-plumber-warm">
        <div className="text-center">
          <h2 className="text-section">À qui ça s'adresse</h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Wrench, title: "Plombier indépendant", desc: "Vous gérez seul vos clients et vos chantiers" },
            { icon: Flame, title: "Chauffagiste", desc: "Installations, dépannages, entretiens : tout est suivi" },
            { icon: Phone, title: "Artisan multi-demandes", desc: "Appels, SMS, Google : tout arrive de partout" },
            { icon: Building2, title: "Petite structure", desc: "Vous voulez vous organiser sans outil lourd" },
          ].map((p, i) => (
            <Card key={i} className="border-border/50 text-center">
              <CardContent className="p-6">
                <div className="mx-auto rounded-lg bg-primary/10 p-3 w-fit">
                  <p.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Card className="mt-10 border-amber-500/20 bg-amber-50">
          <CardContent className="p-6">
            <h3 className="font-semibold text-amber-800">Ce n'est probablement pas l'outil idéal si…</h3>
            <ul className="mt-3 space-y-2 text-sm text-amber-700">
              <li>• Vous cherchez un ERP industriel très complexe</li>
              <li>• Vous voulez uniquement une solution de comptabilité pure</li>
              <li>• Vous avez déjà un système parfaitement structuré et adapté</li>
            </ul>
          </CardContent>
        </Card>
      </SectionWrapper>

      {/* === SECTION 17: FAQ SEO === */}
      <SectionWrapper id="faq">
        <div className="text-center">
          <h2 className="text-section">Questions fréquentes</h2>
        </div>
        <div className="mt-10 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {[
              {
                q: "Quel est le meilleur logiciel pour plombier ?",
                a: "Le meilleur logiciel pour plombier est celui qui s'adapte à votre quotidien terrain. Bulbiz se distingue par sa simplicité, sa logique mobile first et sa capacité à centraliser toutes vos demandes clients au même endroit.",
              },
              {
                q: "Existe-t-il une application simple pour plombier indépendant ?",
                a: "Oui. Bulbiz a été conçue pour les artisans indépendants qui ont besoin d'un outil simple, concret et efficace pour gérer leurs demandes clients sans prise de tête.",
              },
              {
                q: "Comment centraliser les demandes clients en plomberie ?",
                a: "Avec Bulbiz, vous partagez un lien unique à vos clients. Ils font leur demande depuis ce lien, ajoutent photos et infos, et tout arrive automatiquement dans votre espace organisé.",
              },
              {
                q: "Comment éviter de perdre des demandes clients ?",
                a: "La perte de demandes vient souvent du fait qu'elles arrivent de partout : téléphone, SMS, WhatsApp, Google. Bulbiz centralise tout au même endroit pour que rien ne se perde.",
              },
              {
                q: "Comment recevoir les photos et vidéos des clients au bon endroit ?",
                a: "Vos clients utilisent votre lien Bulbiz pour envoyer photos et vidéos. Tout est automatiquement rattaché au bon dossier client.",
              },
              {
                q: "Comment gagner du temps sur l'administratif en plomberie ?",
                a: "Bulbiz structure automatiquement chaque demande en dossier : informations client, photos, description du besoin. Moins de saisie manuelle, plus de temps sur le terrain.",
              },
              {
                q: "Quel outil utiliser quand les demandes arrivent par téléphone, SMS et WhatsApp ?",
                a: "Bulbiz est exactement pensé pour ça. Un lien unique que vous partagez, et toutes les demandes arrivent au même endroit, quel que soit le canal d'origine.",
              },
              {
                q: "Bulbiz est-il adapté à un chauffagiste ?",
                a: "Absolument. Bulbiz convient à tous les artisans du BTP qui reçoivent des demandes clients dispersées : plombiers, chauffagistes, électriciens, couvreurs…",
              },
              {
                q: "Peut-on tester Bulbiz gratuitement ?",
                a: "Oui, Bulbiz propose un test gratuit. Vous pouvez vous inscrire et commencer à utiliser la solution sans engagement.",
              },
              {
                q: "Quelle différence entre Bulbiz et un logiciel de gestion classique ?",
                a: "Les logiciels de gestion classiques sont souvent pensés pour le bureau. Bulbiz est pensé pour le terrain : mobile first, centralisation automatique, prise en main immédiate.",
              },
              {
                q: "Un plombier peut-il utiliser Bulbiz depuis son téléphone ?",
                a: "Oui, c'est même la façon principale d'utiliser Bulbiz. L'outil est conçu mobile first pour être utilisé sur chantier, dans le camion, entre deux rendez-vous.",
              },
              {
                q: "Comment professionnaliser le suivi client en plomberie ?",
                a: "En utilisant un outil comme Bulbiz, vous répondez plus vite, vous êtes mieux organisé, et vos clients le ressentent immédiatement. Ça renforce votre image professionnelle.",
              },
              {
                q: "Comment mieux organiser les rendez-vous ?",
                a: "Bulbiz vous permet de planifier vos interventions simplement, directement depuis l'application, avec toutes les informations client à portée de main.",
              },
              {
                q: "Comment éviter les oublis de devis ?",
                a: "Avec Bulbiz, chaque demande est structurée et suivie. Vous êtes relancé automatiquement, et rien ne passe entre les mailles du filet.",
              },
              {
                q: "Comment être plus réactif que ses concurrents ?",
                a: "En centralisant vos demandes et en répondant plus vite grâce à Bulbiz, vous êtes le premier artisan à répondre. Et souvent, le premier qui répond remporte le chantier.",
              },
            ].map((faq, i) => (
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

      {/* === SECTION 18: CTA FINAL === */}
      <CTASection dark />

      <Footer />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Quel est le meilleur logiciel pour plombier ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Le meilleur logiciel pour plombier est celui qui s'adapte à votre quotidien terrain. Bulbiz se distingue par sa simplicité, sa logique mobile first et sa capacité à centraliser toutes vos demandes clients au même endroit.",
                },
              },
              {
                "@type": "Question",
                name: "Peut-on tester Bulbiz gratuitement ?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Oui, Bulbiz propose un test gratuit. Vous pouvez vous inscrire et commencer à utiliser la solution sans engagement.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
};

export default Index;
