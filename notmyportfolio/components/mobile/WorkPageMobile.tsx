"use client";

import type { Project } from "@/components/WorkSlide";

interface WorkPageMobileProps {
  projects: Project[];
}

export default function WorkPageMobile({
  projects,
}: WorkPageMobileProps) {
  return (
    <main className="block bg-background md:hidden">
      {/* Header */}
      <header className="px-6 pb-10 pt-28">
        <div className="flex items-end justify-between border-b border-black/10 pb-4">
          <h1 className="text-5xl font-medium tracking-tight">
            Work
          </h1>

          <span className="font-mono text-xs opacity-40">
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </header>

      {/* Projects */}
      <section>
        {projects.map((project, index) => (
          <article
            key={project.id}
            className="px-6 pb-24"
          >
            {/* Project number / year */}
            <div className="mb-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className="opacity-40">
                {project.number}
              </span>

              <span className="opacity-40">
                {project.year}
              </span>
            </div>

            {/* Image */}
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-active:scale-[0.97]"
                />
              </div>
            </a>

            {/* Project info */}
            <div className="mt-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-4xl font-medium tracking-tight">
                    {project.title}
                  </h2>

                  <p className="mt-2 font-mono text-[10px] leading-relaxed opacity-50">
                    {project.category}
                  </p>
                </div>

                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="text-xl transition-transform duration-300 active:translate-x-1 active:-translate-y-1"
                >
                  ↗
                </a>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-relaxed opacity-60">
                {project.description}
              </p>
            </div>

            {/* Divider */}
            {index < projects.length - 1 && (
              <div className="mt-16 border-b border-black/10" />
            )}
          </article>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider">
          <span className="opacity-40">
            End of work
          </span>

          <span className="opacity-40">
            ↓
          </span>
        </div>
      </footer>
    </main>
  );
}