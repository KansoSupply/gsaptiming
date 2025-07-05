"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      suppressHydrationWarning
      className={`${
        isMenuOpen ? "sm:h-16 h-screen bg-amber-200" : "h-16"
      } fixed grid grid-cols-1 content-start sm:grid-cols-3 gap-8 top-0 left-0 right-0 z-20 transition-[height] duration-650 ease-in-out overflow-hidden items-start px-5 sm:px-10`}
    >
      {/* Top */}
      <div className="flex justify-between items-center h-16 w-full">
        <div>
          <Link suppressHydrationWarning href="/">
            Connor Taylor®
          </Link>
        </div>
        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <span>Close</span> : <span>Menu</span>}
        </button>
      </div>

      {/* Links */}
      <div
        className={`sm:col-start-2 col-span-2 flex flex-row h-full justify-between sm:h-16 sm:items-center items-start w-full overflow-hidden sm:overflow-visible`}
      >
        <div className="gap-4 flex">
          <Link
            className="text-6xl sm:font-normal font-semibold sm:tracking-normal tracking-tighter sm:text-base overflow-hidden"
            href="/about"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`block transition-transform duration-600 ease-in-out ${
                isMenuOpen
                  ? "translate-y-0 delay-150"
                  : "translate-y-full sm:translate-y-0 delay-0"
              }`}
            >
              About
            </span>
          </Link>
          <Link
            className="text-link relative text-6xl sm:font-normal font-semibold sm:tracking-normal tracking-tighter sm:text-base overflow-visible"
            href="/blog"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`block transition-transform duration-600 ease-in-out ${
                isMenuOpen
                  ? "translate-y-0 delay-150"
                  : "translate-y-full sm:translate-y-0 delay-0"
              }`}
            >
              Blog
            </span>
          </Link>
          <Link
            className="text-6xl sm:font-normal font-semibold sm:tracking-normal tracking-tighter sm:text-base overflow-hidden"
            href="/work"
            onClick={() => setIsMenuOpen(false)}
          >
            <span
              className={`block transition-transform duration-600 ease-in-out ${
                isMenuOpen
                  ? "translate-y-0 delay-150"
                  : "translate-y-full sm:translate-y-0 delay-0"
              }`}
            >
              Work
            </span>
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  );
}
