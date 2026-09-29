import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { getPersonalInfo } from "@/lib/config";

export function AboutSection() {
  return <SectionContainer id="about">
    <SectionHeading title="About Me" subtitle="Building useful experiences for the web." />
    <p className="max-w-3xl mx-auto text-lg leading-relaxed text-muted-foreground text-center">{getPersonalInfo().bio}</p>
  </SectionContainer>;
}
