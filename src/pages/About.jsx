import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  useScrollReveal();

  return (
    <main>
      <Helmet>
        <title>About Us | Wood Packaging Manufacturer in Cairo | Eucalyptus Wood Pallet</title>
        <meta name="description" content="Eucalyptus Wood Pallet is a Cairo-based wood packaging manufacturer with 20+ years supplying pallets, boxes, and crates to factories, warehouses, and exporters across Egypt." />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/about" />
        <meta property="og:title" content="About Us | Wood Packaging Manufacturer in Cairo" />
        <meta property="og:description" content="20+ years manufacturing wooden pallets, boxes, and crates in Cairo, Egypt. Built around quality eucalyptus wood and dependable supply." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eucalyptuswoodpallet.com/about" />
      </Helmet>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-workshop.jpg" alt="Inside the Eucalyptus Wood Pallet workshop in Cairo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/75"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">Built in Cairo. Trusted Across Egypt.</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/70 max-w-xl mx-auto leading-relaxed">We're a Cairo-based wood packaging manufacturer that has supplied pallets, boxes, and crates to businesses across Egypt for over two decades.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-left relative order-2 lg:order-1">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/about-pallet.png" alt="Craftsman building a wooden pallet" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-amber/20 rounded-2xl -z-10"></div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">WHO WE ARE</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Our Story</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>Eucalyptus Wood Pallet started with a simple belief: wood packaging should be built to actually work — not just look the part. For over 20 years, we've manufactured pallets, boxes, and crates for factories, warehouses, agricultural businesses, and exporters across Egypt. Every product leaves our Cairo workshop built to handle the demands of real operations.</p>
                <p>We've grown by earning the trust of businesses who need packaging they can rely on, order after order. We don't cut corners on materials, construction, or finishing. When your product is in one of our crates heading to a customer, it should arrive in exactly the condition it left.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">What Guides Us</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">What We Stand For</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="reveal reveal-delay-1 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Quality Materials</h3>
              <p className="text-sm text-muted leading-relaxed">We work exclusively with eucalyptus wood — chosen for its natural density, moisture resistance, and load-bearing strength. Every batch is carefully selected before production. Your packaging is only as reliable as what it's built from, and we don't compromise on that.</p>
            </div>
            <div className="reveal reveal-delay-2 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17l-5.6-5.6a2.002 2.002 0 010-2.83l.17-.17a2.002 2.002 0 012.83 0l5.6 5.6m-7.66 7.66l5.6 5.6a2.002 2.002 0 002.83 0l.17-.17a2.002 2.002 0 000-2.83l-5.6-5.6"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Expert Craftsmanship</h3>
              <p className="text-sm text-muted leading-relaxed">Our production team brings over 12 years of woodworking experience to every order. We use precise cutting, solid assembly, and consistent finishing to build packaging that holds up in warehouses, survives long-distance transport, and arrives looking professional every time.</p>
            </div>
            <div className="reveal reveal-delay-3 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Customer Focus</h3>
              <p className="text-sm text-muted leading-relaxed">We work directly with each client to understand their load requirements, dimensions, and operational needs. Whether you need standard sizes in bulk or fully custom solutions, we build around your business — not a fixed catalog. Most clients become long-term partners because we make it easy to reorder exactly what works.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">How We Work</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">From Vision to Reality</h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">From first conversation to final delivery, here's what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal reveal-delay-1 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">01</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Consultation</h3>
              <p className="text-sm text-muted leading-relaxed">We discuss your requirements — product dimensions, load capacity, quantities, and intended use. Whether you contact us by phone or visit our facility, this first conversation is free and comes with no obligations.</p>
            </div>
            <div className="reveal reveal-delay-2 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">02</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Design</h3>
              <p className="text-sm text-muted leading-relaxed">Based on your requirements, we prepare specifications and a detailed quote for your approval. You'll confirm dimensions, quantities, and timeline before we begin production.</p>
            </div>
            <div className="reveal reveal-delay-3 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">03</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Production</h3>
              <p className="text-sm text-muted leading-relaxed">Your order is manufactured in our Cairo workshop using quality eucalyptus wood. We keep you updated on progress and maintain consistent quality from the first unit to the last.</p>
            </div>
            <div className="reveal reveal-delay-4 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">04</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Delivery</h3>
              <p className="text-sm text-muted leading-relaxed">Your finished products are delivered on time and in full. Every order is inspected before it leaves our workshop so you receive packaging that's ready to go to work immediately.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-workshop.jpg" alt="Craftsman at work" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-deep-walnut/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">Ready to Start?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-cream leading-tight">Let's Talk About Your Project</h2>
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">Whether you know exactly what you need or want help figuring out the right solution, we're happy to talk through it. Your first consultation is always free.</p>
            <Link to="/contact" className="inline-flex items-center mt-10 px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Request a Free Quote
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
