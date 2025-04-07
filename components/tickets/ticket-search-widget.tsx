"use client";

import React, { useEffect, useRef } from 'react';

const TicketSearchWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAdded = useRef(false); // Prevent adding script multiple times

  useEffect(() => {
    if (containerRef.current && !scriptAdded.current) {
      const script = document.createElement('script');
      script.async = true;
      script.src = "https://tp.media/content?currency=eur&trs=381560&shmarker=599857&locale=en&default_origin=TZL&stops=0&show_hotels=false&powered_by=true&border_radius=15&plain=true&color_button=%2300A991&color_button_text=%23ffffff&promo_id=3414&campaign_id=111";
      script.charset = "utf-8";

      containerRef.current.appendChild(script);
      scriptAdded.current = true; // Mark script as added
    }
    // No cleanup needed as the script is self-contained and modifies the container
  }, []); // Empty dependency array ensures this runs only once on mount

  return <div ref={containerRef}></div>;
};

export default TicketSearchWidget;
