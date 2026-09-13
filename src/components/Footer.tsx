const Footer = () => {
  return (
    <footer
      id="contact"
      className="border-t border-slate-100 bg-slate-50"
    >
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">

        {/* Footer Main */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:pr-8">
            <a href="#home" className="inline-block">
              <img
                src="/assets/logo-text.png"
                alt="Dev Stack"
                className="h-9 w-auto"
              />
            </a>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              Build your ideal development stack by exploring
              modern technologies for your next project.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 transition hover:border-pink-200 hover:text-pink-500"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 transition hover:border-pink-200 hover:text-pink-500"
                aria-label="Twitter"
              >
                X
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-600 transition hover:border-pink-200 hover:text-pink-500"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Product
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#technologies"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Technologies
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Contact
                </a>
              </li>

              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Legal
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#terms"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Terms of Service
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-sm text-slate-500 transition hover:text-pink-500"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a
              href="#privacy"
              className="text-xs text-slate-400 transition hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-slate-400 transition hover:text-pink-500"
            >
              Terms
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer