import { useEffect, useRef } from "react";

// Attaches an IntersectionObserver to the returned ref and adds the
// `.is-visible` class (see .reveal in index.css) once the element enters
// the viewport. Users who prefer reduced motion skip the observer entirely —
// the CSS already shows the content at full opacity for them.
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion || !ref.current) return undefined;

    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return ref;
}
