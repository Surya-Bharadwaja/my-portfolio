interface ProjectCardProps {
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  security: string;
  performance: string;
  results: string;
}

export default function ProjectCard({
  title, problem, solution, stack, security, performance, results
}: ProjectCardProps) {
  return (
    <div className="glow-border bg-muted/30 p-6 md:p-8 rounded-md relative flex flex-col h-full group">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-secondary-accent opacity-40 group-hover:opacity-100 transition-opacity"></div>
      
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <span className="text-accent font-mono text-base">{">"}</span> {title}
      </h3>
      
      <div className="space-y-4 text-sm text-foreground/90 mb-8 flex-grow">
        <p><strong className="text-foreground opacity-70 block mb-1">Problem:</strong> {problem}</p>
        <p><strong className="text-foreground opacity-70 block mb-1">Solution:</strong> {solution}</p>
        <p><strong className="text-foreground opacity-70 block mb-1">Security:</strong> {security}</p>
        <p><strong className="text-foreground opacity-70 block mb-1">Performance:</strong> {performance}</p>
        <div className="p-3 bg-accent/5 border border-accent/20 rounded mt-4">
          <p><strong className="text-accent font-mono">Results:</strong> {results}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
        {stack.map(tech => (
          <span key={tech} className="text-xs font-mono px-2 py-1 bg-background/50 rounded border border-white/10 text-foreground/70">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
