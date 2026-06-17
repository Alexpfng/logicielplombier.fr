import { Lightbulb } from "lucide-react";
import { ReactNode } from "react";

interface KeyTakeawayProps {
  title?: string;
  children: ReactNode;
}

/**
 * Bloc "réponse directe" placé en haut des pages.
 * Optimisé GEO : résume la réponse en 2-3 phrases citables par les moteurs
 * génératifs (ChatGPT, Perplexity, Google AI Overviews).
 */
const KeyTakeaway = ({ title = "En bref", children }: KeyTakeawayProps) => (
  <aside className="rounded-2xl border border-primary/20 bg-primary/5 p-5 md:p-6">
    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
      <Lightbulb className="h-4 w-4" />
      {title}
    </div>
    <div className="mt-3 text-base leading-relaxed text-foreground/90">{children}</div>
  </aside>
);

export default KeyTakeaway;
