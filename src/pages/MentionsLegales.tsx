import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";

const MentionsLegales = () => (
  <>
    <Helmet>
      <title>Mentions légales — logiciel-plombier.fr</title>
      <meta name="description" content="Mentions légales du site logiciel-plombier.fr." />
      <link rel="canonical" href="https://logiciel-plombier.fr/mentions-legales" />
    </Helmet>
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto prose prose-slate">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors no-underline">Accueil</Link> / Mentions légales
        </p>
        <h1 className="text-hero">Mentions légales</h1>

        <h2 className="text-xl font-semibold mt-8">Éditeur du site</h2>
        <p className="text-muted-foreground">
          Le site logiciel-plombier.fr est un site éditorial indépendant.<br />
          Pour toute question, contactez-nous via le site <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">bulbiz.io</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8">Hébergement</h2>
        <p className="text-muted-foreground">
          Ce site est hébergé par Lovable / Netlify.
        </p>

        <h2 className="text-xl font-semibold mt-8">Propriété intellectuelle</h2>
        <p className="text-muted-foreground">
          L'ensemble du contenu de ce site (textes, images, éléments graphiques) est protégé par les lois relatives à la propriété intellectuelle.
          Toute reproduction, même partielle, est soumise à autorisation préalable.
        </p>

        <h2 className="text-xl font-semibold mt-8">Liens externes</h2>
        <p className="text-muted-foreground">
          Ce site contient des liens vers des sites tiers, notamment bulbiz.io et app.bulbiz.io.
          L'éditeur ne saurait être tenu responsable du contenu de ces sites externes.
        </p>

        <h2 className="text-xl font-semibold mt-8">Cookies</h2>
        <p className="text-muted-foreground">
          Ce site peut utiliser des cookies à des fins de mesure d'audience et d'amélioration de l'expérience utilisateur.
        </p>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default MentionsLegales;
