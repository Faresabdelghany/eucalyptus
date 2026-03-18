import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';

function Services() {
  useScrollReveal();

  return (
    <main>
      <Helmet>
        <title>Wooden Pallets, Boxes, Crates & Custom Packaging Cairo | Eucalyptus Wood Pallet</title>
        <meta name="description" content="We manufacture wooden pallets, boxes, crates, and custom packaging from eucalyptus wood. Serving factories, warehouses, exporters, and agricultural businesses across Egypt." />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/services" />
        <meta property="og:title" content="Wooden Pallets, Boxes, Crates & Custom Packaging | Cairo, Egypt" />
        <meta property="og:description" content="Eucalyptus wood pallets, boxes, crates, and custom packaging for industrial and export use. Manufactured in Cairo, Egypt." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eucalyptuswoodpallet.com/services" />
      </Helmet>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/services-hero.png" alt="Eucalyptus Wood Pallet products showcase" className="w-full h-full object-cover object-[8%_top] sm:object-[20%_10%] md:object-[30%_12%] lg:object-[25%_15%]" />
          <div className="absolute inset-0 bg-charcoal/55"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">What We Do</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">Wood Packaging Built to Perform</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/80 max-w-xl mx-auto leading-relaxed">From pallets and crates to custom boxes, we manufacture durable wood packaging solutions for storage, transport, and export across every industry.</p>
        </div>
      </section>

      {/* Wooden Pallets */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wooden-pallets.png" alt="Eucalyptus wooden pallets for warehousing and logistics" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Signature Product</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Wooden Pallets</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>Our pallets are built around one priority: holding weight without failing. Dense eucalyptus construction gives them the load-bearing strength that factory floors and warehouse racks demand. Standard sizes fit most forklift and pallet racking systems — and if your operation needs a different footprint, we build to spec. Used daily by manufacturers, logistics companies, and exporters across Egypt who need consistent supply and zero surprises.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Standard and custom pallet sizes</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Strong load-bearing construction</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Ideal for warehousing and logistics</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Clean finishing with durable assembly</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Discuss Your Pallets →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Wooden Boxes */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Premium Packaging</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Wooden Boxes</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>Our wooden boxes protect products through handling, transport, and storage while keeping presentation sharp. Smooth finish, clean edges, and optional handle cutouts make them the go-to choice for agricultural exporters packing fruit and vegetables, retailers packaging goods for display, and distributors who need packaging that represents their product well. Available in multiple sizes — or built to your exact dimensions.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Available in multiple box sizes</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Smooth finish and clean presentation</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Strong side panels and handle cutouts</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Ideal for storage, display, and transport</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Design Your Boxes →
              </Link>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wooden-boxes.png" alt="Premium eucalyptus wooden boxes for storage and transport" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wooden Crates */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/image10.png" alt="Eucalyptus wooden crates for export and logistics" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Export & Logistics</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Wooden Crates</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>When a shipment needs to survive long-distance transport, international export, or rough handling — crates are the right call. Our slatted eucalyptus crates provide structural containment that boxes can't match, keeping heavy or irregular goods secure from workshop to destination. Built for industrial equipment, machinery parts, bulk agricultural goods, and any product where arriving intact isn't optional. Custom dimensions available.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Strong slatted construction for transport</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Suitable for export and warehouse use</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Built for product protection and stability</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Available in custom dimensions</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Plan Your Crates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packaging */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Built to Your Specs</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Custom Packaging Solutions</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>When standard sizes don't fit your product, we build to your exact specifications. Whether you need non-standard dimensions, reinforced construction for heavy loads, or packaging designed for a specific export requirement, we work with you to design and produce it. Custom orders follow the same quality standards as everything else we make — no shortcuts because the dimensions are different.</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Any dimension — width, length, and height</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Reinforced builds for heavy or fragile loads</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Export-ready construction for international shipping</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>Bulk orders with consistent production quality</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Discuss Your Requirements
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wood-craftsmanship.png" alt="Custom wood packaging production" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Eucalyptus */}
      <section className="py-24 lg:py-32 bg-charcoal text-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Our Material</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Why We Use Eucalyptus Wood</h2>
            <p className="mt-6 text-lg text-warm-cream/60 leading-relaxed">Not all wood performs the same under industrial conditions. Eucalyptus is our choice because it outperforms in the environments our customers actually work in.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="reveal reveal-delay-1 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">High Density</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">Naturally dense grain gives eucalyptus exceptional load-bearing strength — so pallets don't bow under heavy stock and crates don't crack mid-shipment.</p>
            </div>
            <div className="reveal reveal-delay-1 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">Moisture Resistant</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">Holds up in humid warehouses, cold storage, and outdoor logistics environments without warping.</p>
            </div>
            <div className="reveal reveal-delay-2 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">Durable Under Pressure</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">Resists cracking and splitting under heavy loads — critical for export and multi-stack warehouse storage.</p>
            </div>
            <div className="reveal reveal-delay-3 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">Locally Sourced</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">Eucalyptus grows fast and is widely available in Egypt — which means consistent material supply, shorter lead times, and no dependence on imported wood.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Start Your Project</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">Ready to Place Your Order?</h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">Have an order in mind? Reach out and we'll walk you through options, pricing, and lead times. No commitment required.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Request a Free Quote
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+20225168243" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-deep-walnut border-2 border-deep-walnut rounded-md hover:bg-deep-walnut hover:text-warm-cream transition-all duration-300">
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                (02) 2516-8243
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
