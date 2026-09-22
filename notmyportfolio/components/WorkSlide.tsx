"use client";

import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: string;
  number: string;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
  href: string;
}

interface WorkSlideProps {
  project: Project;
  active: boolean;
  direction: "up" | "down";
}

export default function WorkSlide({
  project,
  active,
}: WorkSlideProps) {
  return (
    <article
      className={`
        absolute inset-0
        flex items-center justify-center
        transition-transform duration-700
        ease-[cubic-bezier(0.77,0,0.175,1)]
        ${active ? "translate-y-0" : "translate-y-full"}
      `}
    >
      <div className="relative flex h-full w-full items-center px-16 py-16">
        {/* Project image */}
        <div className="relative ml-auto h-[70vh] w-[58%] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={active}
            className="object-cover"
          />
        </div>

        {/* Project information */}
        <div className="absolute left-16 top-1/2 z-10 max-w-xl -translate-y-1/2">
          <div className="mb-8 font-mono text-xs opacity-40">
            {project.number} / {project.year}
          </div>

          <h1 className="text-7xl font-medium tracking-tight">
            {project.title}
          </h1>

          <div className="mt-6 font-mono text-[10px] uppercase tracking-widest opacity-50">
            {project.category}
          </div>

          <p className="mt-8 max-w-md text-lg leading-relaxed opacity-60">
            {project.description}
          </p>

          <Link
            href={project.href}
            className="mt-10 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-wide"
          >
            View project
            <span>↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
