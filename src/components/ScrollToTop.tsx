import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element
      const element = document.querySelector(hash);
      if (element) {
        // Small delay to ensure page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      // No hash, scroll to top
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};
