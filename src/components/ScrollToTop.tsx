"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const ScrollToTop = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash;
    
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
  }, [pathname, searchParams]);

  return null;
};
