"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed inset-x-0 top-0 z-[100] flex w-full items-center justify-between border-b border-foreground/10 bg-background/70 px-6 py-5 backdrop-blur-md">
        {/* Logo */}
        <a
          href="/"
          onClick={closeMenu}
          className="relative z-[110] flex items-center gap-2"
          aria-label="notmyportfolio.me home"
        >
          <span className="text-lg font-black leading-none">[!]</span>

          <span className="hidden font-medium md:block">
            notmyportfolio.me
          </span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 font-mono text-xs md:flex">
          <a href="/" className="group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              [
            </span>
            <span className="mx-1">HOME</span>
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              ]
            </span>
          </a>

          <a href="/work" className="group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              [
            </span>
            <span className="mx-1">work</span>
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              ]
            </span>
          </a>

          <a href="/about" className="group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              [
            </span>
            <span className="mx-1">about</span>
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              ]
            </span>
          </a>

          <a href="/log" className="group">
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              [
            </span>
            <span className="mx-1">log</span>
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              ]
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/emiliano-garcia-olmos"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              [
            </span>
            <span className="mx-1">↗</span>
            <span className="opacity-40 transition-opacity group-hover:opacity-100">
              ]
            </span>
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={toggleMenu}
          className="relative z-[110] pointer-events-auto font-mono text-xs md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span className="opacity-40">[</span>
          <span className="mx-1">
            {menuOpen ? "CLOSE" : "MENU"}
          </span>
          <span className="opacity-40">]</span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-[90] flex flex-col bg-background px-6 pb-8 pt-32 transition-all duration-500 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      >
        {/* Links */}
        <nav className="flex flex-col font-mono text-5xl leading-[1.1]">
          <a
            href="/"
            onClick={closeMenu}
            className="group py-2"
          >
            <span className="mr-2 opacity-30">[</span>
            <span className="transition-opacity group-hover:opacity-50">
              HOME
            </span>
            <span className="ml-2 opacity-30">]</span>
          </a>

          <a
            href="/work"
            onClick={closeMenu}
            className="group py-2"
          >
            <span className="mr-2 opacity-30">[</span>
            <span className="transition-opacity group-hover:opacity-50">
              WORK
            </span>
            <span className="ml-2 opacity-30">]</span>
          </a>

          <a
            href="/about"
            onClick={closeMenu}
            className="group py-2"
          >
            <span className="mr-2 opacity-30">[</span>
            <span className="transition-opacity group-hover:opacity-50">
              ABOUT
            </span>
            <span className="ml-2 opacity-30">]</span>
          </a>

          <a
            href="/log"
            onClick={closeMenu}
            className="group py-2"
          >
            <span className="mr-2 opacity-30">[</span>
            <span className="transition-opacity group-hover:opacity-50">
              LOG
            </span>
            <span className="ml-2 opacity-30">]</span>
          </a>

          <a
            href="https://www.linkedin.com/in/emiliano-garcia-olmos"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            className="group py-2"
          >
            <span className="mr-2 opacity-30">[</span>
            <span className="transition-opacity group-hover:opacity-50">
              LINKEDIN ↗
            </span>
            <span className="ml-2 opacity-30">]</span>
          </a>
        </nav>

        {/* Bottom info */}
        <div className="mt-auto flex items-end justify-between font-mono text-xs">
          <span className="opacity-40">
            notmyportfolio.me
          </span>

          <span className="opacity-40">
            © 2026
          </span>
        </div>
      </div>
    </>
  );
}