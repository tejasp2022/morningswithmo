"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export function Analytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // This is where you would add analytics tracking code
    // For example, if using Google Analytics, you might have:
    // if (window.gtag) {
    //   window.gtag('config', 'G-YOUR_MEASUREMENT_ID', {
    //     page_path: pathname + searchParams.toString(),
    //   });
    // }
    
    console.log(`Page viewed: ${pathname}${searchParams.toString()}`);
  }, [pathname, searchParams]);

  return null; // This component doesn't render anything
} 