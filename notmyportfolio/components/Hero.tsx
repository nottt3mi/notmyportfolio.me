export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-88px)] flex-col px-6 pb-6">
        <div className="max-w-6xl pt-24">
            <h1 className="text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.07em]">
            THIS IS
            <br />
            NOT MY
            <br />
            PORTFOLIO.
            </h1>
        </div>

        {/* Bottom information */}
        <div className="mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between p-6">
            
            {/* Left */}
            <div className="flex items-start gap-4 font-mono text-sm leading-relaxed">
            <span className="opacity-40">→</span>

            <p>
                A collection of things
                <br />
                I&apos;ve built, designed,
                <br />
                broken and learned from.
            </p>
            </div>

            {/* Right */}
            <div className="text-left font-mono text-sm leading-relaxed md:text-right">
            <p>
                Emiliano García
                <br />
                computer engineering student
                <br />
                based in Chile
                <br />
                currently making things
            </p>
            </div>

        </div>
    </section>
  );
}