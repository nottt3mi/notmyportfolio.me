import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <main className="min-h-screen">
        <Navbar />
        <div className="mx-auto max-w-6xl">
            {/* Main */}
            <section className="flex min-h-[calc(100vh-100px)] flex-col justify-center">

            <div className="mb-16">
                <p className="mb-6 text-sm opacity-50">
                not an about page.
                </p>

                <h1 className="max-w-4xl text-5xl font-normal leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                    Hi! I&apos;m Emiliano —
                <br />
                a computer engineering student
                <br />
                who likes building things
                <br />
                that probably didn&apos;t need to exist.
                </h1>
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