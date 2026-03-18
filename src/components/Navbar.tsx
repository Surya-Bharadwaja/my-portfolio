import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-mono text-accent font-bold text-lg">
          <Link href="/">
            SB<span className="cursor-blink"></span>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 text-sm text-foreground/80 font-mono">
          <Link href="#about" className="hover:text-accent transition-colors">/about</Link>
          <Link href="#projects" className="hover:text-accent transition-colors">/projects</Link>
          <Link href="#skills" className="hover:text-accent transition-colors">/skills</Link>
          <Link href="#contact" className="hover:text-accent transition-colors">/contact</Link>
        </div>
      </div>
    </nav>
  );
}
