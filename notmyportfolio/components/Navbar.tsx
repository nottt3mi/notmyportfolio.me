export default function Navbar() {
  return (
    <nav className="flex top-0 left-0 z-50 flex w-full items-center justify-between border-b border-black/5 bg-[/f4f3ef]/70 px-6 py-5 backdrop-blur-md">
      {/* Logo */}
      <a
        href="/"
        className="flex items-center gap-2"
        aria-label="notmyportfolio.me home"
      >
        <span className="text-lg font-black leading-none">[!]</span>
        <span className="font-medium">notmyportfolio.me</span>
      </a>

      {/* Navigation */}
      <div className="flex items-center gap-8 font-mono text-xs">
        <a href="/" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">HOME</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>

        <a href="/work" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">work</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>
        
        <a href="/about" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">about</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>

        <a href="/contact" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">↗</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>
      </div>
    </nav>
  );
}