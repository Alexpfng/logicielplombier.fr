import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Link } from "react-router-dom";

const PolitiqueConfidentialite = () => (
  <>
    <Helmet>
      <title>Politique de confidentialité — logiciel-plombier.fr</title>
      <meta name="description" content="Politique de confidentialité et protection des données personnelles du site logiciel-plombier.fr." />
      <link rel="canonical" href="https://logiciel-plombier.fr/politique-de-confidentialite" />
    </Helmet>
    <Header />

    <SectionWrapper>
      <div className="max-w-3xl mx-auto prose prose-slate">
        <p className="text-sm text-muted-foreground mb-2">
          <Link to="/" className="hover:text-primary transition-colors no-underline">Accueil</Link> / Politique de confidentialité
        </p>
        <h1 className="text-hero">Politique de confidentialité</h1>

        <h2 className="text-xl font-semibold mt-8">Collecte des données</h2>
        <p className="text-muted-foreground">
          Le site logiciel-plombier.fr ne collecte aucune donnée personnelle directement.
          Les liens vers bulbiz.io et app.bulbiz.io renvoient vers des services tiers dont les
          politiques de confidentialité respectives s'appliquent.
        </p>

        <h2 className="text-xl font-semibold mt-8">Cookies</h2>
        <p className="text-muted-foreground">
          Ce site peut utiliser des cookies techniques et de mesure d'audience. Ces cookies n'ont pas
          pour finalité de collecter des données personnelles. Vous pouvez configurer votre navigateur
          pour refuser les cookies.
        </p>

        <h2 className="text-xl font-semibold mt-8">Services tiers</h2>
        <p className="text-muted-foreground">
          Ce site peut utiliser des outils d'analyse (analytics) pour mesurer son audience.
          Ces outils peuvent collecter des informations anonymes sur votre navigation.
        </p>

        <h2 className="text-xl font-semibold mt-8">Vos droits</h2>
        <p className="text-muted-foreground">
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression
          de vos données. Pour toute demande, contactez-nous via le site
          <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">bulbiz.io</a>.
        </p>

        <h2 className="text-xl font-semibold mt-8">Modification de cette politique</h2>
        <p className="text-muted-foreground">
          Cette politique de confidentialité peut être mise à jour à tout moment. La date de dernière
          modification est indiquée ci-dessous.
        </p>
        <p className="text-sm text-muted-foreground mt-4">Dernière mise à jour : mars 2026</p>
      </div>
    </SectionWrapper>

    <Footer />
  </>
);

export default PolitiqueConfidentialite;
