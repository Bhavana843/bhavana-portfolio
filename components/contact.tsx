import {
  ArrowUpRight,
  Download,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedInIcon } from "./linkedin-icon";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="gradient-border overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow="Contact"
                  title="Let's talk quality."
                  description="Have a role, project or QA challenge in mind? I'd be glad to connect and talk about how I can help."
                />

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`mailto:${profile.email}`}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-[#04110f] transition hover:bg-teal-200"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Send an email
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                  <a
                    href={profile.resume}
                    download
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Resume
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {contactLinks.map((link) => {
                  const Icon = link.icon;

                  const content = (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04]">
                          <Icon
                            className="h-4 w-4 text-teal-300"
                            aria-hidden="true"
                          />
                        </span>
                        {link.href ? (
                          <ArrowUpRight
                            className="h-4 w-4 text-zinc-600 transition-colors group-hover:text-teal-300"
                            aria-hidden="true"
                          />
                        ) : null}
                      </div>
                      <p className="mt-3 text-[11px] uppercase tracking-wider text-zinc-500">
                        {link.label}
                      </p>
                      <p className="mt-1 break-all text-sm text-zinc-200">
                        {link.value}
                      </p>
                    </>
                  );

                  if (!link.href) {
                    return (
                      <div
                        key={link.label}
                        className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4"
                      >
                        {content}
                      </div>
                    );
                  }

                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 transition hover:border-teal-300/30 hover:bg-white/[0.045]"
                    >
                      {content}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
