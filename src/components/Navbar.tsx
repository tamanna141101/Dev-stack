import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:px-8">

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-slate-700 md:hidden"
          aria-label="Open menu"
        >
          {menuOpen ? '×' : '☰'}
        </button>

        {/* Brand logo */}
        <a href="#home" className="shrink-0">
          <img
            src="/assets/logo-text.png"
            alt="Dev Stack"
            className="h-8 w-auto sm:h-9"
          />
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-[13px] font-medium transition ${
                item.name === 'Home'
                  ? 'text-pink-500'
                  : 'text-slate-500 hover:text-pink-500'
              }`}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Authentication buttons */}
        <div className="flex items-center gap-1 sm:gap-3">
          <button
            type="button"
            className="px-2 py-2 text-[13px] font-medium text-slate-600 hover:text-slate-900 sm:px-3"
          >
            Sign In
          </button>

          <button
            type="button"
            className="gradient-bg rounded-full px-4 py-2 text-[13px] font-semibold text-white transition hover:scale-105 sm:px-5"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-pink-500"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar