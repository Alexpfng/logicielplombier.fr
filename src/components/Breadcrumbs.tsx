import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Fil d'Ariane visuel. Le JSON-LD BreadcrumbList correspondant est injecté
 * séparément via le composant Seo (breadcrumbJsonLd).
 */
const Breadcrumbs = ({ items }: BreadcrumbsProps) => (
  <nav aria-label="Fil d'Ariane" className="mb-4">
    <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <li key={item.path} className="flex items-center gap-1.5">
            {isLast ? (
              <span className="font-medium text-foreground" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="transition-colors hover:text-primary">
                {item.name}
              </Link>
            )}
            {!isLast && <ChevronRight className="h-3.5 w-3.5 shrink-0 opacity-60" />}
          </li>
        );
      })}
    </ol>
  </nav>
);

export default Breadcrumbs;
