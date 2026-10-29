import { CalendarDays, GraduationCap, MapPin } from "lucide-react";
import { education } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="An engineering foundation."
            description="A background in electronics and communication engineering, applied today to understanding complex fintech systems and testing them with care."
          />
        </Reveal>

        <Reveal delay={100}>
          <article className="mt-10 overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.025] p-6 backdrop-blur-sm sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-teal-300/20 bg-teal-300/[0.08]">
                  <GraduationCap
                    className="h-6 w-6 text-teal-300"
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-semibold text-white sm:text-xl">
                      {education.degree},{" "}
                      <span className="text-zinc-300">{education.field}</span>
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">
                    {education.institution}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-500">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin
                        className="h-3.5 w-3.5 text-teal-300"
                        aria-hidden="true"
                      />
                      {education.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays
                        className="h-3.5 w-3.5 text-teal-300"
                        aria-hidden="true"
                      />
                      Graduated {education.year}
                    </span>
                  </div>
                </div>
              </div>

              <span className="w-fit rounded-2xl border border-teal-300/20 bg-teal-300/[0.07] px-4 py-2 text-2xl font-semibold tracking-tight text-teal-200">
                {education.year}
              </span>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
