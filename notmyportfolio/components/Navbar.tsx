export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-6">
      <span className="font-medium">notmyportfolio.me</span>

      <div className="flex items-center gap-8 font-mono text-xs">
        <a href="#work" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">work</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>

        <a href="#notes" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">notes</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>

        <a href="#about" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">about</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>

        <a href="#" className="group">
          <span className="opacity-40 group-hover:opacity-100">[</span>
          <span className="mx-1">↗</span>
          <span className="opacity-40 group-hover:opacity-100">]</span>
        </a>
      </div>
    </nav>
  );
}