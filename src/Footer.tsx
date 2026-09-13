import {
  ArrowUp,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08070b] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">


          <div className="max-w-sm">
            <a
              href="#home"
              className="mb-5 inline-flex items-center gap-3"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold text-white shadow-lg"
                style={{
                  background: "var(--gradient)",
                }}
              >
                DS
              </div>

              <span className="text-xl font-bold">
                Dev <span className="text-pink-400">Stack</span>
              </span>
            </a>

            <p className="mb-6 text-sm leading-6 text-gray-400">
              Build, explore, and manage your perfect developer
              technology stack. Discover the tools you need to
              build amazing products.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
              >
  
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
              >

              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
                >
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Product
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#stack"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Your Stack
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#careers"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Careers
                </a>
              </li>

              <li>
                <a
                  href="#blog"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold">
              Legal
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#cookies"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Cookie Policy
                </a>
              </li>

              <li>
                <a
                  href="#security"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#privacy"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-sm text-gray-500 transition-colors hover:text-white"
            >
              Terms
            </a>

            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-all hover:bg-white/10 hover:text-white"
            >
              <ArrowUp size={16} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;