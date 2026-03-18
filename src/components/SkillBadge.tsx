export default function SkillBadge({ name }: { name: string }) {
  return (
    <div className="px-4 py-2 border border-white/10 bg-muted/20 rounded text-sm hover:border-accent/40 hover:text-accent transition-colors font-mono cursor-default text-center">
      {name}
    </div>
  );
}
