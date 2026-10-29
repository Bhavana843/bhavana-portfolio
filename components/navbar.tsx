"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { navItems, profile } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrolled(scrollTop > 12);
      setProgress(height > 0 ? Math.min((scrollTop / height) * 100, 100) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-400 transition-[width] duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />

      <div
        className={`mx-auto max-w-6xl rounded-2xl border px-4 py-3 backdrop-blur-xl transition-all duration-300 sm:px-5 ${
          scrolled
            ? "border-white/10 bg-[#06080c]/85 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.9)]"
            : "border-white/5 bg-[#06080c]/55"
        }`}
      >
        <nav
          className="flex items-center justify-between gap-4"
          aria-label="Primary"
        >
          <a
            href="#home"
            className="group flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-300 to-cyan-400 text-sm font-bold text-[#04110f] shadow-[0_0_24px_-6px_rgba(94,234,212,0.8)]">
              BK
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white sm:block">
              {profile.name}
              <span className="ml-2 rounded-full border border-teal-300/25 bg-teal-300/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-teal-200">
                QA
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.07] text-white"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.resume}
              download
              className="hidden items-center gap-2 rounded-full bg-teal-300 px-4 py-2 text-sm font-semibold text-[#04110f] transition hover:bg-teal-200 sm:inline-flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </a>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:bg-white/[0.07] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        <div
          id="mobile-menu"
          inert={!open}
          className={`grid overflow-hidden transition-all duration-300 md:hidden ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="mt-3 flex flex-col gap-1 border-t border-white/5 pt-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-2.5 text-sm transition-colors ${
                    active === item.id
                      ? "bg-white/[0.07] text-white"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resume}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-teal-300 px-4 py-2.5 text-sm font-semibold text-[#04110f] transition hover:bg-teal-200"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
