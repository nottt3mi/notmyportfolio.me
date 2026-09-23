"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const HANDLE = "nottt3mi";

type CodeforcesUser = {
  handle: string;
  rating?: number;
  maxRating?: number;
};

type CodeforcesSubmission = {
  id: number;
  creationTimeSeconds: number;
  verdict?: string;
  problem: {
    contestId?: number;
    index: string;
    name: string;
    rating?: number;
    tags: string[];
  };
};

type Problem = {
  id: string;
  date: string;
  name: string;
  code: string;
  contest: string;
  difficulty: string;
  tags: string[];
  status: string;
};

type Stats = {
  rating: number | null;
  maxRating: number | null;
  problemsSolved: number;
};

export default function LogPage() {
  const [stats, setStats] = useState<Stats>({
    rating: null,
    maxRating: null,
    problemsSolved: 0,
  });

  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCodeforcesData() {
      try {
        const [userResponse, submissionsResponse] =
          await Promise.all([
            fetch(
              `https://codeforces.com/api/user.info?handles=${HANDLE}`
            ),
            fetch(
              `https://codeforces.com/api/user.status?handle=${HANDLE}`
            ),
          ]);

        if (!userResponse.ok) {
          throw new Error(
            `Codeforces user.info returned ${userResponse.status}`
          );
        }

        if (!submissionsResponse.ok) {
          throw new Error(
            `Codeforces user.status returned ${submissionsResponse.status}`
          );
        }

        const userData = await userResponse.json();
        const submissionsData = await submissionsResponse.json();

        if (userData.status !== "OK") {
          throw new Error(
            userData.comment || "Codeforces user.info failed"
          );
        }

        if (submissionsData.status !== "OK") {
          throw new Error(
            submissionsData.comment || "Codeforces user.status failed"
          );
        }

        const user: CodeforcesUser = userData.result[0];

        const submissions: CodeforcesSubmission[] =
          submissionsData.result;

        /*
         * Keep only accepted problems.
         *
         * If the same problem was solved multiple times,
         * only one entry will be displayed.
         */
        const solvedProblems = new Map<string, Problem>();

        for (const submission of submissions) {
          if (
            submission.verdict !== "OK" ||
            !submission.problem?.contestId
          ) {
            continue;
          }

          const problemId = `${submission.problem.contestId}-${submission.problem.index}`;

          if (solvedProblems.has(problemId)) {
            continue;
          }

          const date = new Date(
            submission.creationTimeSeconds * 1000
          );

          const formattedDate = date
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })
            .toUpperCase();

          solvedProblems.set(problemId, {
            id: problemId,
            date: formattedDate,
            name: submission.problem.name,
            code: `${submission.problem.contestId}${submission.problem.index}`,
            contest: "Codeforces",
            difficulty: submission.problem.rating
              ? String(submission.problem.rating)
              : "—",
            tags: submission.problem.tags,
            status: "Solved",
          });
        }

        const problems = Array.from(
          solvedProblems.values()
        );

        /*
         * user.status returns submissions from newest
         * to oldest, so the problems are already ordered
         * from most recent to oldest.
         */
        setProblems(problems);

        setStats({
          rating: user.rating ?? null,
          maxRating: user.maxRating ?? null,
          problemsSolved: problems.length,
        });
      } catch (error) {
        console.error("Codeforces:", error);

        setStats({
          rating: null,
          maxRating: null,
          problemsSolved: 0,
        });

        setProblems([]);
      } finally {
        setLoading(false);
      }
    }

    getCodeforcesData();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <section className="px-6 md:px-10 lg:px-16 pt-32 pb-3 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <p className="text-xl md:text-2xl leading-[1.15] tracking-tight max-w-2xl">
            I decided to solve one competitive programming problem
            every week. This is just a log.
          </p>

          <div className="md:text-right text-sm leading-relaxed opacity-60">
            <p>Started September 2026</p>
            <p>One problem / week</p>
            <p>No AI</p>
          </div>
        </div>
      </section>

      {/* CODEFORCES STATS */}
      <section className="px-6 md:px-10 lg:px-16 py-32">
        <div className="flex items-baseline justify-between border-b border-foreground/20 pb-5">
          <h2 className="text-sm uppercase tracking-[0.2em]">
            Codeforces
          </h2>
        </div>

        <div className="mt-15">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] opacity-40">
                Handle
              </p>

              <p className="mt-3 text-3xl md:text-4xl tracking-tight">
                {HANDLE}
              </p>
            </div>

            <a
              href={`https://codeforces.com/profile/${HANDLE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.15em] opacity-50 hover:opacity-100 transition-opacity"
            >
              View profile ↗
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-foreground/20">
            <Stat
              value={
                loading
                  ? "—"
                  : stats.rating ?? "—"
              }
              label="Current rating"
            />

            <Stat
              value={
                loading
                  ? "—"
                  : stats.maxRating ?? "—"
              }
              label="Max rating"
            />

            <Stat
              value={
                loading
                  ? "—"
                  : stats.problemsSolved
              }
              label="Problems solved"
            />

            <Stat
              value={
                loading
                  ? "—"
                  : problems.length
              }
              label="Logged problems"
            />
          </div>
        </div>
      </section>

      {/* REPOSITORY */}
      <section className="px-6 md:px-10 lg:px-16 py-10">
        <div className="border-t border-foreground/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <p className="text-sm uppercase tracking-[0.2em] opacity-50">
                GitHub
              </p>
            </div>

            <div className="md:col-span-7 md:col-start-6">
              <h2 className="text-4xl md:text-6xl tracking-tight leading-[0.95]">
                Every solution
                <br />
                lives in the repository.
              </h2>

              <p className="mt-8 text-lg leading-relaxed opacity-60 max-w-xl">
                I'm keeping the code for every problem in a public
                GitHub repository so the progress can be followed over
                time.
              </p>

              <a
                href="https://github.com/nottt3mi/cp-log"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-10 text-sm uppercase tracking-[0.15em] border-b border-foreground/40 pb-2 hover:border-foreground transition-colors"
              >
                View repository
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM LOG */}
      <section className="px-6 md:px-10 lg:px-16 py-32">
        <div className="flex items-baseline justify-between border-b border-foreground/20 pb-5">
          <h2 className="text-sm uppercase tracking-[0.2em]">
            Problem log
          </h2>
        </div>

        <div className="mt-10">
          {loading ? (
            <p className="py-8 text-sm opacity-50">
              Loading problems...
            </p>
          ) : problems.length === 0 ? (
            <p className="py-8 text-sm opacity-50">
              No problems found.
            </p>
          ) : (
            problems.map((problem) => (
              <ProblemRow
                key={problem.id}
                problem={problem}
              />
            ))
          )}
        </div>
      </section>

      {/* END */}
      <section className="h-[30vh] px-6 md:px-10 lg:px-16 flex items-end">
        <h2 className="text-[clamp(4rem,11vw,11rem)] leading-[0.78] tracking-[-0.08em]">
          See you
          <br />
          next week.
        </h2>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* Components                       */
/* -------------------------------- */

function Stat({
  value,
  label,
}: {
  value: string | number;
  label: string;
}) {
  return (
    <div className="py-8 pr-6 border-b md:border-b-0 md:border-r border-foreground/20 last:border-r-0">
      <p className="text-4xl md:text-5xl tracking-tight">
        {value}
      </p>

      <p className="mt-3 text-xs uppercase tracking-[0.15em] opacity-40">
        {label}
      </p>
    </div>
  );
}

function ProblemRow({
  problem,
}: {
  problem: Problem;
}) {
  const [contestId, problemIndex] =
    problem.id.split("-");

  return (
    <article className="group border-b border-foreground/20 py-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

        {/* CONTEST ID */}
        <div className="md:col-span-1">
          <p className="text-sm opacity-40">
            {contestId}
          </p>
        </div>

        {/* PROBLEM NAME */}
        <div className="md:col-span-5">
          <div className="flex items-baseline gap-3 flex-wrap">
            <h3 className="text-2xl md:text-3xl tracking-tight">
              {problem.name}
            </h3>

            <span className="text-sm opacity-40">
              {problem.code}
            </span>
          </div>

          <p className="mt-2 text-sm opacity-40">
            {problem.contest}
          </p>
        </div>

        {/* TAGS */}
        <div className="md:col-span-3 flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-[0.1em] opacity-40"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* INFO */}
        <div className="md:col-span-2">
          <p className="text-sm opacity-60">
            {problem.date}
          </p>

          <p className="mt-2 text-sm opacity-40">
            {problem.difficulty}
          </p>
        </div>

        {/* ARROW */}
        <div className="md:col-span-1 md:text-right">
          <a
            href={`https://codeforces.com/problemset/problem/${contestId}/${problemIndex}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xl opacity-30 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1"
            aria-label={`Open ${problem.name}`}
          >
            ↗
          </a>
        </div>
      </div>
    </article>
  );
}