import { Briefcase, CalendarDays, Check } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const tags = [
  "MF-Stack",
  "Fintech",
  "Manual QA",
  "REST APIs",
  "Release testing",
  "Playwright",
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Testing where money meets software."
            description="Hands-on QA ownership for a live fintech platform, supporting multiple client implementations through onboarding and go-live."
          />
        </Reveal>

        <div className="mt-10 space-y-6">
          {experience.map((role, index) => (
            <Reveal key={`${role.company}-${role.role}`} delay={index * 80}>
              <article className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
                <div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-300/60 to-transparent"
                  aria-hidden="true"
                />

                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/[0.08]">
                      <Briefcase
                        className="h-5 w-5 text-teal-300"
                        aria-hidden="true"
                      />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {role.role}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-300">
                        {role.company}
                        <span className="mx-2 text-zinc-600">·</span>
                        <span className="text-zinc-500">{role.platform}</span>
                      </p>
                    </div>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">
                    <CalendarDays
                      className="h-3.5 w-3.5 text-teal-300"
                      aria-hidden="true"
                    />
                    {role.period}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-6 text-zinc-400">
                  {role.summary}
                </p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {role.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-3.5"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-teal-300"
                        aria-hidden="true"
                      />
                      <span className="text-xs leading-5 text-zinc-400">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[11px] text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
