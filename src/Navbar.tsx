import { useState } from "react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Technologies",
    href: "#technologies",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Logo({ showText = true }: { showText?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-2">
      {/* Logo Icon */}
      <div
        className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold text-white"
        style={{
          background:
            "linear-gradient(135deg, #ff8a1f 0%, #ff3f9f 50%, #7c4dff 100%)",
        }}
      >
        DS
      </div>

      {showText && (
        <span className="text-lg font-bold text-gray-900">
          Dev <span className="text-pink-500">Stack</span>
        </span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen((previous) => !previous);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16">

          <div className="hidden h-full items-center justify-between lg:flex">

            <Logo />

            <div className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 transition-colors duration-200 hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}
            </div>


            <div className="flex items-center gap-3">
              <button
                type="button"
                className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:text-pink-500"
              >
                Sign In
              </button>

              <button
                type="button"
                className="rounded-full px-5 py-2 text-sm font-semibold text-white shadow-md transition-transform duration-200 hover:scale-105"
                style={{
                  background:
                    "linear-gradient(135deg, #ff8a1f 0%, #ff3f9f 50%, #7c4dff 100%)",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>


          <div className="relative flex h-full items-center justify-between lg:hidden">


            <button
              type="button"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gray-100"
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
            <div className="absolute left-1/2 -translate-x-1/2">
              <Logo showText={false} />
            </div>

            <div className="ml-auto flex items-center gap-1">
              <button
                type="button"
                className="px-2 py-2 text-xs font-medium text-gray-700 transition-colors hover:text-pink-500 sm:px-3 sm:text-sm"
              >
                Sign In
              </button>

              <button
                type="button"
                className="rounded-full px-3 py-2 text-xs font-semibold text-white shadow-sm transition-transform duration-200 hover:scale-105 sm:px-4 sm:text-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #ff8a1f 0%, #ff3f9f 50%, #7c4dff 100%)",
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {menuOpen && (
          <div className="border-t border-gray-200 bg-white py-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-pink-50 hover:text-pink-500"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}