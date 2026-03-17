import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Fonctionnalités", href: "/#fonctionnalites" },
  { label: "Avis", href: "/bulbiz-avis" },
  { label: "FAQ", href: "/faq" },
  { label: "Logiciel Plombier", href: "/logiciel-plombier" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container-tight flex h-16 items-center justify-between md:h-18">
        <Link to="/" className="flex items-center gap-2 font-bold text-lg text-foreground">
          <img src={logo} alt="logiciel-plombier.fr" className="h-8 w-8 rounded-lg" />
          <span className="hidden sm:inline">logiciel-plombier.fr</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/#") ? (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button variant="outline" size="sm" asChild>
            <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer">
              Découvrir Bulbiz
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer">
              Tester gratuitement
            </a>
          </Button>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border/50 bg-background md:hidden"
          >
            <nav className="container-tight flex flex-col gap-4 py-6">
              {navLinks.map((link) =>
                link.href.startsWith("/#") ? (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-sm font-medium text-muted-foreground"
                  >
                    {link.label}
                  </button>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-muted-foreground"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" asChild>
                  <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer">
                    Découvrir Bulbiz
                  </a>
                </Button>
                <Button asChild>
                  <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer">
                    Tester gratuitement
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
