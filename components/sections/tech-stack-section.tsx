import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { getSkills } from "@/lib/config";

export function TechStackSection() {
  return <SectionContainer id="tech-stack">
    <SectionHeading title="Tech Stack" subtitle="The tools I use to build across the web stack." />
    <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
      {getSkills().map(skill => <div key={skill.name} className="rounded-xl border bg-card p-6 text-center font-medium hover:border-primary transition-colors">{skill.name}</div>)}
    </div>
  </SectionContainer>;
}
