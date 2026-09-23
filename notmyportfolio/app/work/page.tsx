"use client";

import Navbar from "@/components/Navbar";
import WorkPageMobile from "@/components/mobile/WorkPageMobile";

import { useEffect, useRef, useState } from "react";

import WorkSlide, {
  type Project,
} from "@/components/WorkSlide";

const projects: Project[] = [
  {
    id: "lumina",
    number: "01",
    title: "Lumina",
    year: "2026",
    category: "PRODUCT / SOFTWARE / HEALTHCARE",
    description:
      "Software built to support the analysis of breast cancer biopsies.",
    image: "/work/lumina.jpg",
    href: "https://lumina.feriadesoftware.cl",
  },
  {
    id: "coopeuch",
    number: "02",
    title: "Coopeuch",
    year: "2025",
    category: "DATA / AUTOMATION",
    description:
      "Automating financial workflows through Python, SQL and Power Automate.",
    image: "/work/coopeuch.jpg",
    href: "/work/coopeuch",
  },
  {
    id: "distributed-systems",
    number: "03",
    title: "Distributed Systems",
    year: "2025",
    category: "SYSTEMS / SOFTWARE",
    description:
      "A distributed systems project built around gRPC, RabbitMQ and Docker.",
    image: "/work/distributed.jpg",
    href: "/work/distributed-systems",
  },
  {
    id: "not-my-portfolio",
    number: "04",
    title: "Not My Portfolio",
    year: "2026",
    category: "WEB / PERSONAL / META",
    description:
      "A portfolio about making a portfolio.",
    image: "/work/portfolio.jpg",
    href: "/",
  },
];

export default function WorkPage() {
  const [activeProject, setActiveProject] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");

  // Evita que múltiples eventos wheel del trackpad
  // cambien varios proyectos de una sola vez.
  const wheelLocked = useRef(false);

  // Mantiene el proyecto actual disponible dentro del listener
  // sin tener que recrearlo cada vez que cambia.
  const activeProjectRef = useRef(activeProject);

  useEffect(() => {
    activeProjectRef.current = activeProject;
  }, [activeProject]);

  const goToProject = (index: number) => {
    if (index === activeProjectRef.current) return;

    setDirection(
      index > activeProjectRef.current ? "down" : "up"
    );

    setActiveProject(index);
    activeProjectRef.current = index;
  };

  const nextProject = () => {
    const current = activeProjectRef.current;

    if (current < projects.length - 1) {
      goToProject(current + 1);
    }
  };

  const previousProject = () => {
    const current = activeProjectRef.current;

    if (current > 0) {
      goToProject(current - 1);
    }
  };

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      // Si ya procesamos este gesto, ignoramos
      // los siguientes eventos del trackpad.
      if (wheelLocked.current) return;

      // Ignorar movimientos extremadamente pequeños.
      if (Math.abs(event.deltaY) < 10) return;

      // Bloquear nuevos cambios.
      wheelLocked.current = true;

      if (event.deltaY > 0) {
        nextProject();
      } else {
        previousProject();
      }

      // Tiempo durante el cual se ignoran nuevos eventos.
      // 700ms da una sensación más cinematográfica.
      setTimeout(() => {
        wheelLocked.current = false;
      }, 700);
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
    {/* Desktop */}
    <main className="min-h-screen hidden md:block">
        <Navbar />
        <div className="relative h-screen overflow-hidden">
          {/* LEFT SIDEBAR */}
          <aside className="fixed left-0 z-20 flex h-screen w-[280px] flex-col justify-between border-r border-black/10 px-8 py-8">
            {/* Top */}
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs">
                  /work
                </span>

                <span className="font-mono text-[10px] opacity-40">
                  {String(activeProject + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>

              {/* Folder */}
              <div className="mt-16">
                <div className="mb-4 flex items-center gap-2">
                  <span className="text-xs">
                    ↓
                  </span>

                  <span className="font-mono text-[11px] uppercase tracking-wide opacity-50">
                    projects
                  </span>
                </div>

                <nav className="flex flex-col">
                  {projects.map((project, index) => {
                    const active = index === activeProject;

                    return (
                      <button
                        key={project.id}
                        onClick={() => goToProject(index)}
                        className={`
                          group flex items-center gap-3
                          py-2 text-left
                          font-mono text-xs
                          transition-opacity duration-300
                          ${
                            active
                              ? "opacity-100"
                              : "opacity-35 hover:opacity-70"
                          }
                        `}
                      >
                        <span className="w-3">
                          {active ? "●" : " "}
                        </span>

                        <span>
                          {project.number}_{project.id}
                        </span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Bottom */}
            <div className="font-mono text-[10px] leading-relaxed opacity-40">
              <div>SCROLL TO NAVIGATE</div>
              <div>CLICK TO SELECT</div>
            </div>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="relative ml-[280px] h-screen">
            {projects.map((project, index) => (
              <WorkSlide
                key={project.id}
                project={project}
                active={index === activeProject}
                direction={direction}
              />
            ))}
          </section>
        </div>
        
    </main>

    {/* MObile */}
    <main className="min-h-screen md:hidden">
      <Navbar />
      <WorkPageMobile projects={projects} />
    </main>
    
          
    </>
  );
}