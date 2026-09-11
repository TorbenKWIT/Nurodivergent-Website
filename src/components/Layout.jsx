import { NavLink, Outlet } from 'react-router-dom'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' },
  { to: '/events', label: 'Events' },
  { to: '/resources', label: 'Resources' },
  { to: '/join', label: 'Join Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

function navLinkClass({ isActive }) {
  return [
    'rounded-md px-3 py-2 text-sm font-medium',
    isActive
      ? 'bg-brand-100 text-brand-800'
      : 'text-brand-700 hover:bg-brand-50',
  ].join(' ')
}

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="border-b border-brand-100">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4">
          <NavLink to="/" className="text-lg font-semibold text-brand-900">
            Neurodiversity Club
          </NavLink>
          <nav aria-label="Main" className="flex flex-wrap gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main id="main-content" className="mx-auto w-full max-w-5xl flex-1 px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-brand-100">
        <div className="mx-auto max-w-5xl px-4 py-6 text-sm text-brand-600">
          <p>&copy; {new Date().getFullYear()} Neurodiversity Club. All are welcome.</p>
        </div>
      </footer>
    </div>
  )
}
