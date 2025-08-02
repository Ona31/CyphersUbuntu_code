import React, { useState } from "react";

export default function Navbarre() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 py-2 px-6 md:px-46">
      <nav
        className="
          flex justify-between items-center
          bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40
          backdrop-blur-md border border-[rgba(255,255,255,0.1)]
          rounded-[50px] shadow-md
          text-[var(--text-color)] p-2
          relative
        "
      >
        {/* Logo */}
        <div className="flex px-4 py-2 items-center">
          <i className="fas fa-chart-simple rotate-90 mr-2"></i>
          <h1 className="text-2xl font-bold select-none">U_code</h1>
        </div>

        {/* Bouton menu hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none z-60"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Menu navigation */}
        <div
          className={`
            fixed top-full left-0 w-full
            bg-gradient-to-br from-[#081028] to-[#0c1a40] bg-opacity-40
            backdrop-blur-md
            border border-[rgba(255,255,255,0.1)]
            rounded-b-[50px] shadow-md
            md:static md:bg-transparent md:border-none md:rounded-none md:shadow-none
            md:flex md:items-center md:justify-center md:gap-6
            transition-all duration-300 ease-in-out
            ${open ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden md:max-h-full md:opacity-100"}
            z-50
          `}
        >
          <a
            href="#Hero"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Accueil
          </a>
          <a
            href="#Pourquoi"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Pourquoi coder ?
          </a>
          <a
            href="#Langages"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Langages
          </a>
          <a
            href="#Method"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Méthode
          </a>
          <a
            href="#Testimonials"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Avis
          </a>
          <a
            href="#Contact"
            className="block px-6 py-3 text-center md:inline-block md:px-0 hover:text-[var(--accent-color)] transition duration-300"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>

        {/* Bouton connexion */}
        <div className="hidden md:block ml-auto">
          <button className="bg-[var(--accent-color)] text-white px-4 py-2 rounded-full hover:bg-[var(--accent-color-hover)] transition duration-300">
            Connexion
          </button>
        </div>
      </nav>
    </header>
  );
}
