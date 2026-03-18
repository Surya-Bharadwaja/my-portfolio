"use client";

import { useEffect, useState } from "react";
import SuryaGlitch from "./SuryaGlitch";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Building secure systems in an increasingly vulnerable web.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center pt-20">
      <div className="font-mono text-sm text-secondary-accent mb-6 leading-relaxed opacity-80">
        <p>{"> initializing portfolio..."}</p>
        <p>{"> loading projects..."}</p>
        <p>{"> system ready."}</p>
      </div>

      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter">
        Hi, I&apos;m <SuryaGlitch />
      </h1>
      
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-tight text-foreground/90 min-h-[3em] md:min-h-0">
        {text}<span className="cursor-blink"></span>
      </h2>
      
      <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-10 leading-relaxed">
        Network Engineer & Web Developer. Deploying scalable solutions with a security-first mindset.
      </p>

      <div className="flex flex-wrap gap-4 font-mono text-sm">
        <a href="#contact" className="glow-border px-6 py-3 rounded-sm text-accent bg-accent/5 hover:bg-accent/10 transition-colors">
          Initialize Contact
        </a>
        <a href="#projects" className="px-6 py-3 rounded-sm border border-white/10 hover:border-white/30 transition-colors text-foreground/80">
          View Specs
        </a>
      </div>
    </section>
  );
}
