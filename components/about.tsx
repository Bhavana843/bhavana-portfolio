import {
  Briefcase,
  Bug,
  GraduationCap,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { focusAreas, profile } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const focusIcons = [ShieldCheck, Bug, Sparkles];

const facts = [
  {
    icon: MapPin,
    label: "Based in",
    value: profile.location,
  },
  {
    icon: Briefcase,
    label: "Current role",
    value: `${profile.role}, ${profile.company}`,
  },
  {
    icon: Landmark,
    label: "Domain",
    value: "Fintech · Mutual funds",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.Tech, ECE · 2024",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.65fr] lg:gap-16">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="About me"
                title="Quality is built into every release."
              />
            </Reveal>

            <Reveal delay={80} className="mt-7 space-y-5">
              <p className="text-base leading-7 text-zinc-400">
                I&apos;m a QA Engineer with experience in quality assurance for
                MF-Stack, a fintech platform supporting mutual fund investments.
                I plan and execute end-to-end manual testing — preparing test
                scenarios, test cases and test data, and covering functional,
                regression, integration, system, smoke, sanity and release
                testing.
              </p>
              <p className="text-base leading-7 text-zinc-400">
                I work closely with developers and stakeholders across client
                implementations, testing investor and distributor journeys that
                include onboarding, KYC, OTP and consent, SIP and lumpsum
                investments, STP, switch, redemption, mandates, payments, folios
                and reports. I&apos;m also developing practical test automation
                skills with Playwright.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {focusAreas.map((area, index) => {
                const Icon = focusIcons[index];

                return (
                  <Reveal
                    key={area.title}
                    delay={120 + index * 80}
                    className="h-full"
                  >
                    <div className="card-hover h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4">
                      <Icon
                        className="h-5 w-5 text-teal-300"
                        aria-hidden="true"
                      />
                      <h3 className="mt-3 text-sm font-semibold text-white">
                        {area.title}
                      </h3>
                      <p className="mt-2 text-xs leading-5 text-zinc-400">
                        {area.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          <Reveal delay={160}>
            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal-300/80">
                Quick facts
              </p>
              <dl className="mt-5 space-y-5">
                {facts.map((fact) => {
                  const Icon = fact.icon;

                  return (
                    <div key={fact.label} className="flex gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03]">
                        <Icon
                          className="h-4 w-4 text-teal-300"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <dt className="text-[11px] uppercase tracking-wider text-zinc-500">
                          {fact.label}
                        </dt>
                        <dd className="mt-1 text-sm text-zinc-200">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  );
                })}
              </dl>

              <div className="mt-6 rounded-2xl border border-teal-300/[0.15] bg-teal-300/[0.06] p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-teal-200/80">
                  Currently learning
                </p>
                <p className="mt-1.5 text-sm text-zinc-200">
                  Playwright test automation
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
