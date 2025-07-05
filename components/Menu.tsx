import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav className="flex fixed top-0 left-0 right-0 justify-between h-18 bg-background items-center sm:px-10 px-5 z-50">
      <Link href="/" className="font-bold">
        Home
      </Link>
      <div className="flex space-x-4">
        <Link href="/about" className="hover:underline font-bold">
          About
        </Link>
        <Link href="/work" className="hover:underline font-bold">
          Work
        </Link>
      </div>
    </nav>
  );
}
