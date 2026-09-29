import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { Code2, Layers, Plug, Gauge } from "lucide-react";

const services = [
  { title: "Frontend Development", icon: Code2, description: "Responsive interfaces built with React, Next.js, and TypeScript, with attention to accessibility and usability." },
  { title: "Full-Stack Development", icon: Layers, description: "Web applications that connect thoughtful interfaces with Node.js, Express, and databases." },
  { title: "API Integration", icon: Plug, description: "Connecting frontend experiences to backend services and third-party APIs." },
  { title: "SEO / Performance", icon: Gauge, description: "Improving discoverability, page speed, and the experience across devices." },
];

export function ServicesSection() {
  return <SectionContainer id="services">
    <SectionHeading title="What I Do" subtitle="From the interface to the services behind it." />
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map(({ title, icon: Icon, description }) => <div key={title} className="rounded-xl border bg-card p-6">
        <Icon className="h-8 w-8 text-primary mb-5" aria-hidden="true" />
        <h3 className="font-semibold text-xl mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>)}
    </div>
  </SectionContainer>;
}
