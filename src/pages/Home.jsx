import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-workshop.jpg" alt="Master craftsman at work in the Cedar and Stone workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Portland's Premier Cabinet Makers</p>
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-cream leading-[1.1] tracking-tight">Cabinets Built by Hand, Made to Last</h1>
            <p className="reveal reveal-delay-2 mt-8 text-lg lg:text-xl text-warm-cream/70 leading-relaxed max-w-lg">For over 20 years, our family has been crafting custom cabinetry for homes across the Portland area. No assembly lines. No shortcuts. Just honest woodworking built around your life.</p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Start Your Project
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-warm-cream border border-warm-cream/30 rounded-md hover:border-amber hover:text-amber transition-all duration-300">View Our Work</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-cream/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-cream/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal max-w-2xl mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">What We Create</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">What We Build</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Kitchen Cabinets card */}
            <Link to="/services" className="reveal reveal-delay-1 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/kitchen-cabinets.jpg" alt="Custom kitchen cabinetry with warm wood finish" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Kitchen Cabinets</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">Your kitchen is the heart of your home, and it deserves cabinetry that works as hard as you do. We design and build custom kitchen cabinets tailored to your space, your style, and how you actually cook and live.</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </Link>
            {/* Bathroom Vanities card */}
            <Link to="/services" className="reveal reveal-delay-2 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/bathroom-vanity.jpg" alt="Elegant custom bathroom vanity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Bathroom Vanities</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">A well-built vanity transforms a bathroom from functional to something you actually enjoy. We craft custom vanities in every style, from clean and modern to warm and traditional, sized to fit your space perfectly.</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </Link>
            {/* Built-In Shelving card */}
            <Link to="/services" className="reveal reveal-delay-3 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/built-ins.jpg" alt="Custom built-in shelving and storage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Built-In Shelving</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">Built-ins turn unused walls and awkward corners into something beautiful and useful. Whether it's a library wall, a mudroom bench, or a living room entertainment center, we design storage that fits your home like it was always there.</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wood-detail.jpg" alt="Close-up of hand-finished wood grain detail" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber/10 rounded-2xl -z-10"></div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Our Philosophy</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">Real Craftsmanship, Not a Factory Line</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>Every cabinet that leaves our shop is built by hand, one project at a time. We don't use particleboard or cut corners with cheap hardware. Our cabinets start with locally sourced hardwoods and premium plywood, joined with time-tested techniques that hold up for decades, not just until the warranty runs out.</p>
                <p>We take the time to understand how you use your space before we pick up a single tool. That means dovetail joints where it counts, soft-close hinges on every door, and finishes hand-applied and sanded smooth. It's the kind of work you can feel when you open a drawer, and the kind of quality that gets better with age.</p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">20+</span>
                  <span className="block mt-1 text-sm text-muted">Years of Craft</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">800+</span>
                  <span className="block mt-1 text-sm text-muted">Projects Completed</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">100%</span>
                  <span className="block mt-1 text-sm text-muted">Custom Built</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center mt-10 px-6 py-3 text-sm font-semibold text-deep-walnut border-2 border-deep-walnut rounded-md hover:bg-deep-walnut hover:text-warm-cream transition-all duration-300">
                Our Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-workshop.jpg" alt="Cedar and Stone workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-walnut/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Let's Build Something Beautiful</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-cream leading-tight">Ready to Talk About Your Project?</h2>
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">Every project starts with a conversation. Tell us what you're envisioning and we'll help you figure out the rest. No pressure, no sales pitch, just honest advice from people who love what they do.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Schedule Your Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+15035550147" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-warm-cream border border-warm-cream/30 rounded-md hover:border-amber hover:text-amber transition-all duration-300">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                (503) 555-0147
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
