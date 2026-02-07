import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-charcoal/80 backdrop-blur-md${scrolled ? ' nav-scrolled' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-xl md:text-2xl font-bold text-warm-cream tracking-tight font-[Playfair_Display]">
              Timber <span className="text-amber">&amp;</span> Grain
            </span>
            <span className="hidden sm:inline text-xs uppercase tracking-[0.25em] text-muted font-medium">
              Cabinetry
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-md ${
                  isActive(to)
                    ? 'text-amber bg-white/5'
                    : 'text-warm-cream/80 hover:text-amber hover:bg-white/5'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 inline-flex items-center px-5 py-2.5 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 text-warm-cream/80 hover:text-amber transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              className={`w-6 h-6 ${menuOpen ? 'hidden' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? '' : 'hidden'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden border-t border-white/10 ${menuOpen ? '' : 'hidden'}`}>
        <div className="px-6 py-4 space-y-1 bg-charcoal/95 backdrop-blur-md">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-medium tracking-wide rounded-md transition-colors ${
                isActive(to)
                  ? 'text-amber bg-white/5'
                  : 'text-warm-cream/80 hover:text-amber hover:bg-white/5'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md text-center mt-2"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
