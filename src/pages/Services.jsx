import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

function Services() {
  useScrollReveal();

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/kitchen-cabinets.jpg" alt="Custom kitchen cabinetry showcase" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/75"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">What We Do</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">Custom Cabinetry for Every Room</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/70 max-w-xl mx-auto leading-relaxed">Whether you're remodeling a kitchen, updating a bathroom, or adding storage throughout your home, we build it to fit your space and your life.</p>
        </div>
      </section>

      {/* Kitchen Cabinets */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/kitchen-cabinets.jpg" alt="Custom kitchen cabinetry with warm wood tones" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Signature Service</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Kitchen Cabinets</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>The kitchen is where most of our projects start, and for good reason. A set of well-designed custom cabinets can completely change how a kitchen feels and functions. We build base cabinets, uppers, pantry units, islands, and specialty pieces like spice racks, pull-out trash systems, and appliance garages. Every kitchen we build is designed from scratch around your layout, your appliances, and the way your family actually uses the space. No filler pieces, no compromises, just cabinetry that fits like it grew there.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Custom sizing for any kitchen layout</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Pull-out organizers, lazy Susans, and spice racks</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Integrated lighting and glass door options</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Hand-applied finishes and custom stain matching</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Discuss Your Kitchen
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bathroom Vanities */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Refined Spaces</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Bathroom Vanities</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>Bathrooms are tight on space and hard on materials, which is exactly why a custom vanity makes such a difference. We build vanities that maximize every inch of available storage while standing up to moisture and daily use. Choose from wall-mounted, freestanding, or built-in designs in any wood species and finish. We work with your plumber and tile installer to make sure everything lines up perfectly, because in a bathroom, a quarter inch matters.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Single and double vanity configurations</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Floating, freestanding, and built-in styles</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Moisture-resistant finishes and construction</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Matching linen towers and medicine cabinets</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Design Your Vanity
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/bathroom-vanity.jpg" alt="Elegant custom bathroom vanity" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Built-In Shelving */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/built-ins.jpg" alt="Custom built-in shelving and storage" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Seamless Integration</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Built-In Shelving</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>Built-ins are one of the best investments you can make in a home. They add storage, character, and real value, all without taking up floor space. We design and build bookshelves, entertainment centers, window seats with storage, mudroom cubbies, home office built-ins, and more. Every unit is scribed to your walls and trimmed to look like original construction. If you've got a wall that isn't pulling its weight, we can fix that.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Home libraries and floor-to-ceiling bookshelves</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Entertainment centers and media walls</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Mudroom storage and bench seating</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Home office desks and credenzas</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Plan Your Built-Ins
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cabinet Refacing */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Renew What You Have</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Cabinet Refacing</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>If your cabinet boxes are solid but the doors and finish are showing their age, refacing is a smart alternative to a full replacement. We replace your existing doors, drawer fronts, and hardware with new custom-built components, then apply matching veneer to the cabinet frames. The result looks and feels like a brand-new kitchen at a fraction of the cost and disruption. It's a great option when the layout works but the look doesn't.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>New custom doors and drawer fronts</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Updated hardware and soft-close upgrades</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Faster turnaround than full replacement</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Significantly lower cost with dramatic results</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Refresh Your Cabinets
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wood-detail.jpg" alt="Close-up of premium wood grain and cabinet detail" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-24 lg:py-32 bg-charcoal text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Our Materials</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Materials We Work With</h2>
            <p className="mt-6 text-lg text-warm-cream/60 leading-relaxed">We source premium hardwoods from Pacific Northwest mills and select each board by hand. The species you choose sets the character of your entire project, and we're happy to help you find the right match.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="reveal reveal-delay-1 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#5C3D2E] to-[#3E2A1E] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">Walnut</h4>
              <p className="text-xs text-warm-cream/40 mt-1">Rich & Warm</p>
            </div>
            <div className="reveal reveal-delay-1 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C4A86B] to-[#A68B4B] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">White Oak</h4>
              <p className="text-xs text-warm-cream/40 mt-1">Classic & Durable</p>
            </div>
            <div className="reveal reveal-delay-2 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#9B4722] to-[#7A3518] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">Cherry</h4>
              <p className="text-xs text-warm-cream/40 mt-1">Elegant & Refined</p>
            </div>
            <div className="reveal reveal-delay-2 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#E8D5B0] to-[#C9B48E] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">Maple</h4>
              <p className="text-xs text-warm-cream/40 mt-1">Light & Clean</p>
            </div>
            <div className="reveal reveal-delay-3 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#B8936A] to-[#96744D] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">Alder</h4>
              <p className="text-xs text-warm-cream/40 mt-1">Versatile & Soft</p>
            </div>
            <div className="reveal reveal-delay-3 group text-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#C4883A] to-[#A06D2A] shadow-inner mb-4"></div>
              <h4 className="text-sm font-semibold text-warm-cream">Douglas Fir</h4>
              <p className="text-xs text-warm-cream/40 mt-1">PNW Heritage</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Start Your Project</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">Let's Build Something Together</h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">Have a project in mind? We'd love to hear about it. Reach out for a free in-home consultation and let's talk about what's possible.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Request a Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+15035550147" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-deep-walnut border-2 border-deep-walnut rounded-md hover:bg-deep-walnut hover:text-warm-cream transition-all duration-300">
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

export default Services;
