import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100vh-88px)] flex-col px-6 pb-6">
        <div className="flex flex-1 items-center">
            <h1 className="text-left text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.82] tracking-[-0.07em]">
                Things I
                <br />
                make
                <br />

            </h1>
        </div>

        {/* Bottom information */}
        <div className="mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between pb-6">
            
            {/* Left */}
            <div className="flex items-start gap-4 font-mono text-sm leading-relaxed">
            <span className="opacity-40">→</span>

            <p>
                <Typewriter
          text="under construction."
          speed={70}
        />
            </p>
            </div>

            {/* Right */}
            <div className="text-left font-mono text-sm leading-relaxed md:text-right px-6">
            <p>
                Emiliano García
                <br />
                computer engineering student
                <br />
                based in Chile
            </p>
            </div>

        </div>
    </section>
  );
}