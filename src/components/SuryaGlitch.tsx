"use client";

import { useEffect, useState } from "react";

export default function SuryaGlitch() {
  const [text, setText] = useState("Surya");

  useEffect(() => {
    const interval = setInterval(() => {
      // 40% chance to trigger a glitch effect
      if (Math.random() > 0.6) {
        const binaryLength = "Surya".length;
        const binary = Array.from({ length: binaryLength }, () => (Math.random() > 0.5 ? "1" : "0")).join("");
        setText(binary);
        
        // Return to normal very quickly to create a flash effect
        setTimeout(() => {
          setText("Surya");
        }, 100 + Math.random() * 200);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <span 
      className="inline-block text-accent font-mono font-bold px-1 transition-all duration-75 relative"
      style={{ 
        textShadow: "0 0 10px rgba(0, 255, 159, 1), 0 0 20px rgba(0, 255, 159, 0.6)",
        animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
      }}
    >
      {text}
    </span>
  );
}
