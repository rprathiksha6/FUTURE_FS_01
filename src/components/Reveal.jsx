import { useScrollReveal } from "../hooks/useScrollReveal.js";

// Thin wrapper so sections can write <Reveal delay={1}>...</Reveal> instead
// of repeating the ref/observer wiring every time.
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "" }) {
  const ref = useScrollReveal();
  const style = delay ? { transitionDelay: `${delay * 90}ms` } : undefined;

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
