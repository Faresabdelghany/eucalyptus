import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-workshop.jpg" alt="Wood packaging production at the Eucalyptus Wood Pallet workshop in Cairo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Cairo's Wood Packaging Manufacturer</p>
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-cream leading-[1.1] tracking-tight">Pallets, Boxes & Crates Built to Last</h1>
            <p className="reveal reveal-delay-2 mt-8 text-lg lg:text-xl text-warm-cream/70 leading-relaxed max-w-lg">For over 20 years, we've manufactured wooden pallets, boxes, and crates for factories, warehouses, and exporters across Egypt. No shortcuts. No compromise. Just dependable wood packaging built around your operation.</p>
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
            {/* Wooden Pallets card */}
            <Link to="/services" className="reveal reveal-delay-1 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/pallet-product.png" alt="Eucalyptus wooden pallets for industrial and logistics use" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Wooden Pallets</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">Strong eucalyptus wood pallets built for storage, transport, and industrial use. Designed for durability, stability, and dependable performance in warehouses, factories, and logistics operations.</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </Link>
            {/* Wooden Boxes card */}
            <Link to="/services" className="reveal reveal-delay-2 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/wooden-boxes.png" alt="Premium wooden boxes for storage, agriculture, and packaging" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Wooden Boxes</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">Premium wooden boxes made to protect products during handling, storage, and shipping. Ideal for agriculture, retail presentation, commercial organization, and packaging needs.</p>
                <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                  Explore
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </span>
              </div>
            </Link>
            {/* Wooden Crates card */}
            <Link to="/services" className="reveal reveal-delay-3 group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/wooden-crates.png" alt="Durable wooden crates for export, distribution, and logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">Wooden Crates</h3>
                <p className="mt-3 text-sm text-muted leading-relaxed">Durable wooden crates crafted for export, distribution, and secure product movement. Built with quality wood, clean finishing, and reliable structural strength.</p>
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
                <img src="/images/wood-craftsmanship.png" alt="Close-up of eucalyptus wood construction detail" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber/10 rounded-2xl -z-10"></div>
            </div>
            <div className="reveal-right">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">OUR PHILOSOPHY</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">Real Craftsmanship, Built for Protection</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>Every pallet, box, and crate we produce is made with care, precision, and a strong focus on durability. We use quality eucalyptus wood and dependable construction methods to create products that perform in storage, transport, and export environments.</p>
                <p>We believe wood packaging should do more than carry products. It should protect them, organize them, and represent your business professionally. That is why we focus on solid assembly, clean finishing, and practical designs that combine strength with presentation.</p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">20+</span>
                  <span className="block mt-1 text-sm text-muted">Years of Experience</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">800+</span>
                  <span className="block mt-1 text-sm text-muted">Orders Completed</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">100%</span>
                  <span className="block mt-1 text-sm text-muted">Custom Solutions</span>
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
          <img src="/images/about-workshop.jpg" alt="Eucalyptus Wood Pallet workshop in Cairo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-walnut/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Ready to Place an Order?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-cream leading-tight">Ready to Talk About Your Project?</h2>
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">Tell us what you need — dimensions, quantities, intended use — and we'll take it from there. No pressure, no sales pitch, just straightforward advice from people who know wood packaging.</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Schedule Your Free Consultation
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+20225168243" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-warm-cream border border-warm-cream/30 rounded-md hover:border-amber hover:text-amber transition-all duration-300">
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

export default Home;
