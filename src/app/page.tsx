import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";
import BackgroundGraphics from "@/components/BackgroundGraphics";

export default function Home() {
  const projects = [
    {
      title: "Secure Web Access Portal",
      problem: "Legacy client portals exposed sensitive over-permissioned endpoints, risking data leakage.",
      solution: "Developed a modern, token-based authentication portal with strict rate-limiting and encrypted payloads.",
      security: "Protected against CSRF/XSS, implemented secure httpOnly cookie handling, and strictly enforced CORS policies.",
      performance: "Reduced authentication latency by 45% using edge caching.",
      stack: ["Next.js", "Node.js", "Redis", "Tailwind CSS"]
    },
    {
      title: "Network Traffic Analyzer",
      problem: "Inefficient processing of large network logs led to delayed threat detection.",
      solution: "Built a real-time log ingestion and visualization dashboard for network administrators.",
      security: "End-to-end encryption for in-flight log data, strict Role-Based Access Control (RBAC).",
      performance: "Handled 10,000+ events per second without browser lag via UI virtualization.",
      stack: ["React", "Python", "WebSockets", "Elasticsearch"]
    },
    {
      title: "Web Page Extractor via Chrome",
      problem: "Rebuilding web interfaces from scratch was time-consuming when reference structures already existed.",
      solution: "Developed a workflow to create custom web pages by extracting targeted page sections using Google Chrome DevTools.",
      security: "Implemented strict HTML sanitization on extracted DOM nodes to prevent XSS payloads from third-party sites.",
      performance: "Minimized extraneous CSS and JavaScript from extracted sections to ensure lightweight, fast-loading outputs.",
      stack: ["JavaScript", "Chrome DevTools", "DOM Manipulation", "HTML/CSS"]
    }
  ];

  const skills = {
    Development: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Website Creation", "HTML/CSS"],
    Databases: ["SQL", "DBMS", "PostgreSQL", "Redis"],
    Networking: ["TCP/IP", "DNS", "Routing & Switching", "VPNs", "Load Balancing"],
    Security: ["Vulnerability Assessment", "SSL/TLS", "Secure Coding", "IAM"],
    Tools: ["Git", "Docker", "Wireshark", "Linux/Bash", "Tailwind CSS"]
  };

  const insights = [
    "Common vulnerabilities in modern HTML/JS web apps",
    "Understanding and mapped defenses against MITRE ATT&CK techniques",
    "Relational Database (DBMS) optimization and secure SQL query design",
    "Optimizing frontend performance in real-world projects",
    "Security mindset for developers"
  ];

  return (
    <main className="min-h-screen text-foreground selection:bg-accent/20 selection:text-accent relative">
      <div className="fixed inset-0 grid-bg pointer-events-none -z-10">
        <BackgroundGraphics />
      </div>
      
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-32">
        <Hero />

        {/* About Section */}
        <section id="about" className="scroll-mt-24 text-lg text-foreground/80 leading-relaxed border-l-2 border-accent/40 pl-6 md:pl-10 space-y-4">
          <p>
            I am a Network Engineer and Web Developer with a systems-level mindset. With a strong foundation in network security and custom website creation, I design web applications that are not just visually engaging but impenetrable by design.
          </p>
          <p>
            My expertise bridges the gap between robust backend infrastructure—utilizing SQL and advanced DBMS architecture to securely structure and query data—and perfect frontend execution using semantic HTML and React. I ensure that every deployment is highly performant, scalable, and protected against modern vulnerabilities.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/10 uppercase tracking-widest font-mono text-secondary-accent">
            <span className="text-accent mr-2 opacity-50">01.</span> Deployments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {projects.map((p, idx) => {
              const isLastOdd = idx === projects.length - 1 && projects.length % 2 !== 0;
              return (
                <div 
                  key={p.title} 
                  className={`w-full h-full text-left ${
                    isLastOdd 
                      ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-0.75rem)]" 
                      : ""
                  }`}
                >
                  <ProjectCard {...p} />
                </div>
              );
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/10 uppercase tracking-widest font-mono text-secondary-accent">
            <span className="text-accent mr-2 opacity-50">02.</span> Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {Object.entries(skills).map(([category, items], idx, arr) => {
              const isLastOdd = idx === arr.length - 1 && arr.length % 2 !== 0;
              return (
                <div 
                  key={category} 
                  className={`w-full h-full text-left ${
                    isLastOdd 
                      ? "md:col-span-2 md:justify-self-center md:w-[calc(50%-1rem)]" 
                      : ""
                  }`}
                >
                  <div className="bg-muted/10 border border-white/10 rounded-xl p-6 md:p-8 hover:border-accent/30 transition-all group shadow-md hover:shadow-accent/5 h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-background border border-white/10 flex items-center justify-center text-accent font-mono text-xl font-bold group-hover:bg-accent group-hover:text-background transition-colors shadow-inner">
                        {category.charAt(0)}
                      </div>
                      <h3 className="text-xl font-bold text-foreground/90 tracking-wide">{category}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {items.map(skill => (
                        <SkillBadge key={skill} name={skill} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Security Approach Section */}
        <section className="scroll-mt-24 bg-muted/20 p-8 md:p-12 rounded-lg border border-accent/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          <h2 className="text-2xl font-bold mb-6 font-mono text-accent">
            {">"} Security Logic
          </h2>
          <p className="text-foreground/80 leading-relaxed relative z-10 max-w-3xl">
            Security is not an afterthought; it is the foundation. My approach emphasizes proactive vulnerability awareness, strict validation of all inputs, and a defense-in-depth architecture. By applying real-world threat modeling to daily coding tasks, I ensure systems are resilient against common exploits while maintaining a seamless user experience.
          </p>
        </section>

        {/* Insights Section */}
        <section id="insights" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-10 pb-2 border-b border-white/10 uppercase tracking-widest font-mono text-secondary-accent">
            <span className="text-accent mr-2 opacity-50">03.</span> Insights
          </h2>
          <ul className="space-y-4 font-mono text-sm md:text-base">
            {insights.map((insight, idx) => (
              <li key={idx} className="flex items-start group">
                <span className="text-accent mr-4 opacity-50 group-hover:opacity-100 transition-opacity">[{idx + 1}]</span>
                <span className="text-foreground/80 group-hover:text-foreground transition-colors cursor-pointer underline decoration-white/20 underline-offset-4 hover:decoration-accent/60">
                  {insight}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 text-center py-20 relative">
          <div className="absolute inset-0 border border-white/5 bg-muted/10 rounded-lg pointer-events-none"></div>
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to initiate?</h2>
            <p className="text-foreground/60 mb-12 font-mono">Let’s build something secure and scalable.</p>
            
            <div className="flex items-center gap-6 justify-center">
              <a href="mailto:contact@example.com" title="Send Email" className="group relative p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-accent/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,159,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-accent transition-colors"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer" className="group relative p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-secondary-accent/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(0,195,255,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-secondary-accent transition-colors"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/suryabch" title="LinkedIn" target="_blank" rel="noopener noreferrer" className="group relative p-4 rounded-xl bg-[#0a0a0a] border border-white/5 hover:border-[#0a66c2]/50 hover:bg-[#111] transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-[0_0_20px_rgba(10,102,194,0.2)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/70 group-hover:text-[#0a66c2] transition-colors"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
        </section>
      </div>

      <footer className="text-center py-8 border-t border-white/5 font-mono text-xs text-foreground/40 mt-10">
        <p>System Online. Secure connection established.</p>
        <p className="mt-2 text-foreground/60">
          © {new Date().getFullYear()} SB. All systems operational.
        </p>
      </footer>
    </main>
  );
}
