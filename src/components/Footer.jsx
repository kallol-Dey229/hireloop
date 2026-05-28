import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.3),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Left Section */}
        <div className="space-y-6">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-fuchsia-500 text-lg font-bold text-white">
              H
            </div>

            <div className="leading-tight">
              <h1 className="text-lg font-semibold">
                HireLoop
              </h1>

              <p className="text-sm text-gray-400 -mt-1">
                Hiring Platform
              </p>
            </div>
          </Link>

          {/* Description */}
          <p className="max-w-sm text-sm leading-7 text-gray-400">
            The AI-native career platform. Built for people
            who take their work seriously.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            
            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-indigo-600"
            >
              <FaFacebookF size={16} />
            </Link>

            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white transition hover:opacity-80"
            >
              <FaPinterestP size={16} />
            </Link>

            <Link
              href="#"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-indigo-600"
            >
              <FaLinkedinIn size={16} />
            </Link>
          </div>
        </div>

        {/* Product */}
        <div>
          <h2 className="mb-6 text-lg font-semibold text-indigo-500">
            Product
          </h2>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Job discovery
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Worker AI
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Companies
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Salary data
              </Link>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="mb-6 text-lg font-semibold text-indigo-500">
            Navigations
          </h2>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Help center
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Career library
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="mb-6 text-lg font-semibold text-indigo-500">
            Resources
          </h2>

          <ul className="space-y-4 text-sm text-gray-400">
            <li>
              <Link href="#" className="hover:text-white transition">
                Brand Guideline
              </Link>
            </li>

            <li>
              <Link href="#" className="hover:text-white transition">
                Newsroom
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">
          
          <p>
            Copyright 2026 — Hire Loop. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link href="#" className="hover:text-white transition">
              Terms & Policy
            </Link>

            <Link href="#" className="hover:text-white transition">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;