"use client";

import type { Project } from "@/components/WorkSlide";

interface WorkPageMobileProps {
  projects: Project[];
}

export default function WorkPageMobile({
  projects,
}: WorkPageMobileProps) {
  return (
    <main className="h-[100svh] overflow-y-auto snap-y snap-mandatory bg-background md:hidden">
      {projects.map((project) => (
        <section
          key={project.id}
          className="relative flex h-[100svh] w-full snap-start snap-always flex-col justify-between px-6 pb-8 pt-24"
        >
          {/* Top */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
            <span className="opacity-40">
              {project.number}
            </span>

            <span className="opacity-40">
              {project.year}
            </span>
          </div>

          {/* Center */}
          <div className="flex flex-1 flex-col justify-center">
            {/* Project image */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden bg-foreground/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-active:scale-[0.97]"
                />
              </div>
            </a>

            {/* Information */}
            <div className="mt-6">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <h2 className="text-4xl font-medium tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-2 max-w-[280px] font-mono text-[9px] leading-relaxed tracking-wide opacity-50">
                    {project.category}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="mb-1 text-2xl"
                >
                  ↗
                </a>
              </div>

              <p className="mt-4 max-w-[330px] text-sm leading-relaxed opacity-60">
                {project.description}
              </p>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
            <span className="opacity-30">
              {project.number} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>

            <span className="opacity-30">
              {project.number === "01" ? "Swipe ↓" : "Scroll ↓"}
            </span>
          </div>
        </section>
      ))}
    </main>
  );
}
