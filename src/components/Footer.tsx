import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-foreground text-primary-foreground">
    <div className="container-tight py-16">
      <div className="grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <Link to="/" className="text-lg font-bold">logiciel-plombier.fr</Link>
          <p className="mt-3 text-sm text-primary-foreground/70 leading-relaxed">
            Le site de référence pour les plombiers et chauffagistes qui veulent mieux organiser leurs demandes clients.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Navigation</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Accueil</Link></li>
            <li><Link to="/logiciel-plombier" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Logiciel Plombier</Link></li>
            <li><Link to="/application-plombier" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Application Plombier</Link></li>
            <li><Link to="/bulbiz-avis" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Avis Bulbiz</Link></li>
            <li><Link to="/faq" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">FAQ</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Bulbiz</h4>
          <ul className="space-y-2.5 text-sm">
            <li><a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Découvrir Bulbiz</a></li>
            <li><a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Tester gratuitement</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">Légal</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/mentions-legales" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Mentions légales</Link></li>
            <li><Link to="/politique-de-confidentialite" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} logiciel-plombier.fr — Site éditorial indépendant
      </div>
    </div>
  </footer>
);

export default Footer;
