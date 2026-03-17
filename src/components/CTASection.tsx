import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

const CTASection = ({
  title = "Essayez Bulbiz gratuitement",
  subtitle = "Sans engagement · Simple · Mis en place en quelques minutes",
  dark = false,
}: CTASectionProps) => (
  <section className={`section-padding ${dark ? "bg-foreground text-primary-foreground" : "bg-primary/5"}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container-tight text-center"
    >
      <h2 className="text-section">{title}</h2>
      <p className={`mt-4 text-subtitle ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
        {subtitle}
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button size="lg" className="px-8 py-6 text-base" asChild>
          <a href="https://app.bulbiz.io" target="_blank" rel="noopener noreferrer">
            Tester gratuitement
          </a>
        </Button>
        <Button
          size="lg"
          variant={dark ? "secondary" : "outline"}
          className="px-8 py-6 text-base"
          asChild
        >
          <a href="https://bulbiz.io" target="_blank" rel="noopener noreferrer">
            Découvrir Bulbiz
          </a>
        </Button>
      </div>
      <p className={`mt-6 text-sm ${dark ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
        Pas besoin de changer vos habitudes.<br />
        On s'adapte à votre façon de travailler.
      </p>
    </motion.div>
  </section>
);

export default CTASection;
