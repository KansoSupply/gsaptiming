"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex- flex-col py-12 sm:px-10 px-5 w-full">
      <div className="w-full border-t border-gray-800 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Column 1: Logo and Tagline */}
          <div>
            <div className="text-2xl font-bold">
              <Link href="/">DS</Link>
            </div>
            <p className="text-gray-400 mt-4">
              Elevate your online presence with professionally styled AI
              portraits.
            </p>
          </div>

          {/* Column 2: Links */}
          <div className="flex flex-col gap-4">
            <h4>Pages</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/generate"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Create
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/examples"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/articles"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-medium">Connect</h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@designershot.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  hello@designershot.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-left text-gray-500 text-sm">
          Designer Shot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
