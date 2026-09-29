import { SectionContainer } from "@/components/section-container";
import { SectionHeading } from "@/components/section-heading";
import { getPersonalInfo, getSocialLinks } from "@/lib/config";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export function ContactSection() {
  const personal = getPersonalInfo();
  const links = [{ platform: "Email", url: `mailto:${personal.email}`, label: personal.email, icon: Mail },
    ...getSocialLinks().map(s => ({ ...s, label: s.platform === "GitHub" ? "ayushh-11" : "Ayush Mahat", icon: s.platform === "GitHub" ? Github : Linkedin }))];
  return <SectionContainer id="contact">
    <SectionHeading title="Contact" subtitle="Have a project in mind? Let’s connect." />
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6">
      {links.map(({ platform, url, label, icon: Icon }) => <a key={platform} href={url}
        target={platform === "Email" ? undefined : "_blank"} rel={platform === "Email" ? undefined : "noopener noreferrer"}
        className="rounded-xl border bg-card p-6 hover:border-primary transition-colors min-w-0">
        <div className="flex justify-between mb-4"><Icon className="h-6 w-6 text-primary" /><ArrowUpRight className="h-4 w-4 text-muted-foreground" /></div>
        <h3 className="font-semibold mb-2">{platform}</h3><p className="text-sm text-muted-foreground break-words">{label}</p>
      </a>)}
    </div>
  </SectionContainer>;
}
