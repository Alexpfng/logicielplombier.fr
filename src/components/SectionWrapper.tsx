import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const SectionWrapper = ({ children, className = "", id, dark = false }: SectionWrapperProps) => (
  <section
    id={id}
    className={`section-padding ${dark ? "bg-foreground text-primary-foreground" : ""} ${className}`}
  >
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="container-tight"
    >
      {children}
    </motion.div>
  </section>
);

export default SectionWrapper;
