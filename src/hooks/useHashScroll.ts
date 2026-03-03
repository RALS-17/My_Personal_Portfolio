import { useEffect } from 'react';

/**
 * Hook to update URL hash when a section becomes visible
 */
export function useHashScroll(sectionId: string) {
  useEffect(() => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update hash when section is prominently visible
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const newHash = `#${sectionId}`;
          if (window.location.hash !== newHash) {
            window.history.replaceState(null, '', newHash);
          }
        }
      },
      { threshold: [0.5] }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [sectionId]);
}

/**
 * Hook to handle initial hash navigation on page load
 */
export function useHashNavigation() {
  useEffect(() => {
    // On initial load, scroll to hash if present
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);
}
