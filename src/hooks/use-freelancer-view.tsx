"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FREELANCER_VIEW_KEY = "freelancer_view";

/**
 * Hook to check if the current view is the freelancer view
 * Returns true when URL contains ?view=freelancer or localStorage has the preference stored
 * Stores the preference in localStorage when ?view=freelancer is present
 */
export const useFreelancerView = (): boolean => {
  const searchParams = useSearchParams();
  // Always start with false to avoid hydration mismatch
  const [isFreelancerView, setIsFreelancerView] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // Mark as mounted after hydration
    setIsMounted(true);
    
    // Check URL parameter first
    const viewParam = searchParams.get("view");
    
    if (viewParam === "freelancer") {
      // Store preference in localStorage
      localStorage.setItem(FREELANCER_VIEW_KEY, "true");
      setIsFreelancerView(true);
    } else {
      // Check localStorage for stored preference
      const storedPreference = localStorage.getItem(FREELANCER_VIEW_KEY);
      setIsFreelancerView(storedPreference === "true");
    }
  }, [searchParams]);

  // Return false during SSR and initial render to avoid hydration mismatch
  if (!isMounted) {
    return false;
  }

  return isFreelancerView;
};
