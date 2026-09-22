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
                    from Santiago, Chile.
                    </h1>

                    <p className="mt-10 max-w-2xl text-base leading-relaxed opacity-60 md:text-lg">
                    I&apos;m interested in software, artificial intelligence and
                    data, and I&apos;m usually curious about how things work and
                    what can be done with them.
                    </p>
                </div>
            </section>

        </div>
        
    </main>
  );
}