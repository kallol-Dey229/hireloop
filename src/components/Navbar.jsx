'use client';

import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";



function Navbar() {


  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession();

  console.log("Session:", session);
  console.log("User:", session?.user);

  const user = session?.user;


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Browse Jobs", href: "/jobs" },
    { name: "Companies", href: "/companies" },
    { name: "Plans", href: "/plans" },
  ];



  const handleSignOut = async () => {
    await authClient.signOut();
    refetch();
    toast.success("Signed out successfully!");
    redirect("/signin");
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0f0f0f]/80 backdrop-blur-lg">

      <header className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-r from-violet-800 to-fuchsia-600 text-lg font-bold text-white">
            H
          </div>

          <div className="leading-tight">
            <h1 className="text-lg font-semibold text-white">
              HireLoop
            </h1>
            <p className="text-sm text-gray-400 -mt-1">
              Hiring Platform
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 rounded-2xl border border-white/10 bg-white/5 px-7 py-3 md:flex">

          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-300 transition hover:text-white"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-8 w-px bg-white/20" />

          

              {user ?

                <>
                  <p className="text-blue-800 font-bold shadow-7xl">Hello, {user.name}!</p>
                  <Button variant="danger" onClick={handleSignOut} className={"rounded-xl"}>Sign Out</Button>
                </>
                : <Link
            href="/signin"
            className="text-sm font-medium text-indigo-400 transition hover:text-indigo-300"
          >
            Sign In
          </Link>}
  


          

          <Link
            href="/register"
            className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-7 w-7 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#111111] md:hidden">
          <ul className="flex flex-col gap-5 px-6 py-6">

            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-300 transition hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li>
              {user ?

                <>
                  Hello, {user.name}!
                  <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
                </>
                : <Link
                  href="/signin"
                  className="block font-medium text-indigo-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign In
                </Link>}
            </li>

            <li>
              <Link
                href="/register"
                className="block rounded-xl bg-white px-5 py-3 text-center font-semibold text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;