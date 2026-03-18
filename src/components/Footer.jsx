import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-charcoal text-warm-cream/80">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/images/logo.png?v=2" alt="Eucalyptus Wood Pallet" className="h-14 w-auto block flex-shrink-0" />
              <span className="text-xl font-bold text-warm-cream tracking-tight font-[Playfair_Display] leading-tight">
                Eucalyptus <span className="text-amber">Wood</span> Pallet
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-warm-cream/60 max-w-xs">
              Premium eucalyptus wood pallets, crafted in Cairo, Egypt. Serving local and international markets with quality and precision.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Home</Link></li>
              <li><Link to="/about" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Services</Link></li>
              <li><Link to="/contact" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Wooden Pallets</Link></li>
              <li><Link to="/services" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Wooden Boxes</Link></li>
              <li><Link to="/services" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Wooden Crates</Link></li>
              <li><Link to="/services" className="text-sm text-warm-cream/60 hover:text-amber transition-colors duration-200">Custom Packaging</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-amber mb-6">Get in Touch</h4>
            <ul className="space-y-3 text-sm text-warm-cream/60">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-amber/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>27 Road 9, Maadi<br/>Cairo, Egypt 11728</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-amber/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href="mailto:info@eucalyptuswoodpallet.com" className="hover:text-amber transition-colors">info@eucalyptuswoodpallet.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 text-amber/60 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <a href="tel:+20225168243" className="hover:text-amber transition-colors">(02) 2516-8243</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-warm-cream/40">&copy; 2026 Eucalyptus Wood Pallet. All rights reserved.</p>
          <p className="text-xs text-warm-cream/40">Handcrafted in Cairo, Egypt</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
