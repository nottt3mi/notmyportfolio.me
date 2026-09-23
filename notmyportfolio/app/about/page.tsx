"use client";

import Navbar from "@/components/Navbar";
import Typewriter from "@/components/Typewriter";

export default function About() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="min-h-screen px-6 md:px-10 lg:px-16 pt-32 pb-20 flex flex-col justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] opacity-50">
            About
          </p>

          <h1 className="mt-8 max-w-6xl text-[clamp(4rem,11vw,11rem)] leading-[0.8] tracking-[-0.07em] font-medium">
            A little bit
            <br />
            about me.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <p className="text-xl md:text-2xl lg:text-3xl leading-[1.15] tracking-tight max-w-2xl">
            <Typewriter
          text="Hi! I'm Emiliano"
          speed={70}
        />
          </p>

          <div className="md:text-right text-sm leading-relaxed opacity-60">
            <p>Santiago, Chile</p>
            <p>Computer Engineering</p>
            <p>Universidad Técnica Federico Santa María</p>
          </div>
        </div>
      </section>

      {/* NOW */}
      <section className="px-6 md:px-10 lg:px-16 py-32">
        <SectionHeader number="01" title="Now" />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-2xl md:text-4xl leading-tight tracking-tight max-w-2xl">
              Currently studying Computer Engineering while building some projects
              around software, data and technology.
            </p>
          </div>

          <div className="border-t border-foreground/20">
            <NowItem
              title="Lumina"
              description="A software project focused on supporting breast cancer byopsies analysis."
            />

            <NowItem
              title="Portfolio"
              description="Designing and building this website as a space to document my work and ideas."
            />

            <NowItem
              title="Competitive Programming"
              description="Solving one Codeforces problem every week and documenting the process."
            />
          </div>
        </div>
      </section>


      {/* EDUCATION */}
      <section className="px-6 md:px-10 lg:px-16 py-32">
        <SectionHeader number="02" title="Education" />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-8">
            <p className="text-sm uppercase tracking-[0.2em] opacity-50">
              2022 — now
            </p>

            <h2 className="mt-5 text-4xl md:text-6xl tracking-tight">
              Universidad Técnica
              <br />
              Federico Santa María
            </h2>

            <p className="mt-6 text-lg opacity-60">
              Ingeniería Civil Informática
            </p>
          </div>

          <div className="md:col-span-4 md:pt-10">
            <p className="text-sm uppercase tracking-[0.15em] opacity-50">
              Interests
            </p>

            <ul className="mt-5 space-y-2 text-lg">
              <li>Software Engineering</li>
              <li>Business Intelligence</li>
              <li>Artificial Intelligence</li>
              <li>Robotics</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* EXPERIENCE */}
      <section className="px-6 md:px-10 lg:px-16 py-32">
        <SectionHeader number="03" title="Experience" />

        <div className="mt-20 border-t border-foreground/20">
          <ExperienceItem
            year="2025"
            company="Coopeuch"
            role="Software / Data Intern"
            description="Worked on automation, data processing and internal reporting tools using Python, SQL and Power Automate."
            technologies="Python · SQL · Power Automate"
          />

          <ExperienceItem
            year="2024"
            company="Universidad Técnica Federico Santa María"
            role="Teaching Assistant"
            description="Supporting students through programming courses, problem solving and collaborative learning."
            technologies="Programming · Algorithms · Mentoring"
          />
        </div>
      </section>

      {/* CONTACT */}
      <section className="min-h-[80vh] px-6 md:px-10 lg:px-16 py-32 flex flex-col justify-between">
        <SectionHeader number="04" title="Contact" />

        <div className="mt-24">
          <p className="text-sm uppercase tracking-[0.2em] opacity-50">
            Let's talk
          </p>

          <a
            href="mailto:your@email.com"
            className="group block mt-8 text-[clamp(2rem,5vw,5rem)] leading-[0.9] tracking-[-0.05em] break-all"
          >
            emiliano.garcia@sansano.usm.cl
            <span className="inline-block ml-3 opacity-40 transition-transform duration-300 group-hover:translate-x-3">
              ↗
            </span>
          </a>
        </div>

        <div className="flex flex-wrap gap-8 mt-24 text-sm uppercase tracking-[0.15em]">
          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            LinkedIn ↗
          </a>

          <a
            href="#"
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </main>
  );
}

/* ----------------------------- */
/* Components */
/* ----------------------------- */

function SectionHeader({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline justify-between border-b border-foreground/20 pb-5">
      <span className="text-sm opacity-50">{number}</span>

      <h2 className="text-sm uppercase tracking-[0.2em]">
        {title}
      </h2>
    </div>
  );
}

function ExperienceItem({
  year,
  company,
  role,
  description,
  technologies,
}: {
  year: string;
  company: string;
  role: string;
  description: string;
  technologies: string;
}) {
  return (
    <article className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 border-b border-foreground/20">
      <div className="md:col-span-2">
        <p className="text-sm opacity-50">{year}</p>
      </div>

      <div className="md:col-span-4">
        <h3 className="text-2xl md:text-3xl tracking-tight">
          {company}
        </h3>

        <p className="mt-2 opacity-50">{role}</p>
      </div>

      <div className="md:col-span-5">
        <p className="leading-relaxed opacity-70 max-w-xl">
          {description}
        </p>

        <p className="mt-5 text-sm opacity-40">
          {technologies}
        </p>
      </div>

      <div className="hidden md:flex md:col-span-1 justify-end">
        <span className="text-xl opacity-30 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          ↗
        </span>
      </div>
    </article>
  );
}

function NowItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="group py-7 border-b border-foreground/20">
      <div className="flex items-center justify-between gap-6">
        <h3 className="text-2xl md:text-3xl tracking-tight">
          {title}
        </h3>

        <span className="text-xl opacity-30 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
          ↗
        </span>
      </div>

      <p className="mt-3 max-w-lg leading-relaxed opacity-50">
        {description}
      </p>
    </div>
  );
}