import { ArrowUp, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { LinkedInIcon } from "./linkedin-icon";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-medium text-white">{profile.name}</p>
          <p className="mt-1 text-xs text-zinc-500">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email Bhavana"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-teal-300/30 hover:text-teal-300"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bhavana on LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-teal-300/30 hover:text-teal-300"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.resume}
            download
            aria-label="Download resume"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-teal-300/30 hover:text-teal-300"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition hover:border-teal-300/30 hover:text-teal-300"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl border-t border-white/5 px-4 py-5 sm:px-6 lg:px-8">
        <p className="text-xs text-zinc-600">
          © 2026 {profile.name}. Built with Next.js, React, TypeScript and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
