import SectionWrapper from "@/components/SectionWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/seo";

interface FaqSectionProps {
  items: FaqItem[];
  title?: string;
  className?: string;
  id?: string;
}

/**
 * Section FAQ réutilisable. Le JSON-LD FAQPage correspondant doit être passé
 * au composant Seo de la page (faqJsonLd(items)).
 */
const FaqSection = ({
  items,
  title = "Questions fréquentes",
  className = "",
  id = "faq",
}: FaqSectionProps) => (
  <SectionWrapper id={id} className={className}>
    <div className="text-center">
      <h2 className="text-section">{title}</h2>
    </div>
    <div className="mx-auto mt-10 max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {items.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-lg border border-border/50 bg-card px-4"
          >
            <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </SectionWrapper>
);

export default FaqSection;
