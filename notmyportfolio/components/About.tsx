import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen px-6 py-8 md:px-12 md:py-10 font-mono">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="flex items-start justify-between text-xs uppercase tracking-wide">
          <span>ABOUT / 001</span>
          <span className="opacity-40">notmyportfolio.me</span>
        </div>

        {/* Main */}
        <section className="flex min-h-[calc(100vh-100px)] flex-col justify-center">

          <div className="mb-16">
            <p className="mb-6 text-sm opacity-50">
              not an about page.
            </p>

            <h1 className="max-w-4xl text-5xl font-normal leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              I&apos;m Emiliano —
              <br />
              a computer engineering student
              <br />
              who likes building things
              <br />
              that probably didn&apos;t need to exist.
            </h1>
          </div>

          {/* Info */}
          <div className="grid grid-cols-1 gap-12 border-t border-current/20 pt-6 md:grid-cols-3">

            <div>
              <p className="mb-4 text-xs uppercase opacity-40">
                currently
              </p>

              <div className="space-y-1 text-sm">
                <p>→ Computer Engineering @ UTFSM</p>
                <p>→ Building things with code</p>
                <p>→ Working on Lumina</p>
                <p>→ Looking for interesting problems</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase opacity-40">
                interested in
              </p>

              <div className="space-y-1 text-sm">
                <p>software</p>
                <p>interfaces</p>
                <p>creative coding</p>
                <p>AI & data</p>
                <p>good typography</p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs uppercase opacity-40">
                elsewhere
              </p>

              <div className="space-y-1 text-sm">
                <a
                  href="#"
                  className="block transition-opacity hover:opacity-40"
                >
                  ↗ LinkedIn
                </a>

                <a
                  href="#"
                  className="block transition-opacity hover:opacity-40"
                >
                  ↗ GitHub
                </a>
              </div>
            </div>

          </div>

        </section>

        {/* Footer */}
        <div className="flex justify-between border-t border-current/20 pt-4 text-xs opacity-40">
          <span>still figuring it out</span>
          <span>09.2026</span>
        </div>

      </div>
    </main>
  );
}