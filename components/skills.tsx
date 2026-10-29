import {
  Bot,
  Bug,
  ClipboardList,
  FlaskConical,
  Landmark,
  Users,
  Webhook,
  Wrench,
} from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const icons = {
  testing: FlaskConical,
  planning: ClipboardList,
  api: Webhook,
  defects: Bug,
  automation: Bot,
  tools: Wrench,
  fintech: Landmark,
  collaboration: Users,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-28 border-t border-white/5 py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The toolkit behind reliable releases."
            description="A QA toolkit shaped by hands-on fintech testing — from test planning and API validation to defect management and automation fundamentals."
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.key];

            return (
              <Reveal key={group.key} delay={index * 55} className="h-full">
                <div className="card-hover h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-300/20 bg-teal-300/[0.07]">
                      <Icon
                        className="h-4 w-4 text-teal-300"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="text-sm font-semibold text-white sm:text-base">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
