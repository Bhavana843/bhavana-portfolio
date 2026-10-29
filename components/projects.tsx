import { Bot, Landmark, Webhook } from "lucide-react";
import { projects } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  landmark: Landmark,
  webhook: Webhook,
  bot: Bot,
};

export function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected QA work."
            description="A look at the platform, API validation and automation practice behind my day-to-day quality assurance work."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = icons[project.icon];

            return (
              <Reveal key={project.key} delay={index * 90} className="h-full">
                <article className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6">
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-teal-300/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/[0.07]">
                      <Icon
                        className="h-5 w-5 text-teal-300"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-zinc-400">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-base font-semibold leading-6 text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/5 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[10px] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <p className="mt-6 text-xs text-zinc-500">
            These entries are drawn from my QA experience at Betalectic and my
            current Playwright learning focus.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
