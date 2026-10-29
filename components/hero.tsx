import {
  ArrowDown,
  ArrowRight,
  Bot,
  Bug,
  Download,
  Mail,
  MapPin,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedInIcon } from "./linkedin-icon";

const snapshot = [
  { icon: ShieldCheck, label: "End-to-end testing", meta: "Manual QA" },
  { icon: Webhook, label: "REST API validation", meta: "Postman" },
  { icon: Bug, label: "Defect lifecycle", meta: "GitHub" },
  { icon: Bot, label: "Automation practice", meta: "Playwright" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen scroll-mt-28 items-center pb-20 pt-32 sm:pt-36"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16 lg:px-8">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-300 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-300" />
            </span>
            QA Engineer @ {profile.company}
          </span>

          <h1 className="mt-6 text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {profile.firstName}{" "}
            <span className="gradient-text">{profile.lastName}</span>
          </h1>

          <p className="mt-5 text-xl font-medium tracking-tight text-zinc-200 sm:text-2xl">
            Quality assurance for fintech, end to end.
          </p>

          <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">
            I plan and execute end-to-end testing for MF-Stack, a mutual fund
            investment platform — covering onboarding, KYC, SIPs, payments,
            mandates and reports, along with the REST APIs behind them.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-teal-300 px-5 py-3 text-sm font-semibold text-[#04110f] transition hover:bg-teal-200"
            >
              Explore my work
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/[0.12] bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/[0.07]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-teal-300" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4 text-teal-300" />
              LinkedIn
            </a>
          </div>
        </div>

        <div
          className="animate-scale-in lg:justify-self-end"
          style={{ animationDelay: "180ms" }}
        >
          <div className="relative w-full max-w-md">
            <div
              className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-teal-300/15 via-cyan-400/5 to-indigo-500/10 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:p-7">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-teal-300/70" />
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  qa-snapshot
                </span>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-teal-300/25 bg-gradient-to-br from-teal-300/20 to-cyan-400/5 text-lg font-bold text-teal-200">
                  BK
                </div>
                <div>
                  <p className="font-semibold text-white">{profile.name}</p>
                  <p className="text-sm text-zinc-400">
                    {profile.role} · {profile.company}
                  </p>
                </div>
              </div>

              <div className="mt-6 space-y-2.5">
                {snapshot.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-3 rounded-xl border border-white/5 bg-white/[0.025] px-3 py-2.5"
                    >
                      <span className="flex items-center gap-2.5 text-sm text-zinc-200">
                        <Icon
                          className="h-4 w-4 text-teal-300"
                          aria-hidden="true"
                        />
                        {item.label}
                      </span>
                      <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                        {item.meta}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/5 pt-4 text-xs text-zinc-500">
                <span>MF-Stack · Mutual fund platform</span>
                <span className="inline-flex items-center gap-1.5 text-teal-300/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
                  Active
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1.5 text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition hover:text-teal-300 sm:flex"
      >
        Scroll
        <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </section>
  );
}
