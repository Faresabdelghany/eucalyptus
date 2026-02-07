import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';

function About() {
  useScrollReveal();

  return (
    <main>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/about-workshop.jpg" alt="Inside the Timber and Grain workshop" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/75"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Our Story</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">Built on Family, Rooted in Portland</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/70 max-w-xl mx-auto leading-relaxed">We're a father-son cabinet shop that's been part of the Milwaukie community for over two decades.</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="reveal-left relative order-2 lg:order-1">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/wood-detail.jpg" alt="Close-up of hand-finished wood grain" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-amber/20 rounded-2xl -z-10"></div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">Who We Are</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">Our Story</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>Timber &amp; Grain started in 2003 in a two-car garage on Johnson Creek Blvd, when Mike Harlan and his son David decided to turn a lifelong woodworking hobby into something more. Mike had spent 15 years in commercial construction and knew there was a gap between the mass-produced cabinets builders were installing and what homeowners actually wanted. David had just finished an apprenticeship with a furniture maker in Bend. Together, they had the skills, the tools, and a stubborn belief that people still valued things built by hand.</p>
                <p>Word spread quickly. Their first clients were neighbors, then friends of neighbors, then contractors who kept hearing the same thing: these guys build it right. Within a few years, the garage gave way to a proper workshop, and the two-person crew grew to a small team of skilled woodworkers who share the same standards. Today, we've completed over 800 projects across the Portland metro area, but we still run things the same way: one project at a time, one family at a time.</p>
                <p>We live here. We shop at the same stores, sit in the same traffic, and cheer for the same teams. When we build cabinets for your home, we're building them for a neighbor. That matters to us.</p>
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
              <p className="text-sm text-muted leading-relaxed">We source our hardwoods from mills in the Pacific Northwest whenever possible. Every board is hand-selected for grain, stability, and beauty. We don't use particleboard or MDF in structural components because your cabinets should last as long as your home.</p>
            </div>
            <div className="reveal reveal-delay-2 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17l-5.6-5.6a2.002 2.002 0 010-2.83l.17-.17a2.002 2.002 0 012.83 0l5.6 5.6m-7.66 7.66l5.6 5.6a2.002 2.002 0 002.83 0l.17-.17a2.002 2.002 0 000-2.83l-5.6-5.6"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Expert Craftsmanship</h3>
              <p className="text-sm text-muted leading-relaxed">Our team averages over 12 years of woodworking experience. We use a blend of traditional joinery techniques and modern precision tools to build cabinets that are as strong as they are beautiful. Every drawer, every door, every shelf is built to a standard we'd want in our own kitchen.</p>
            </div>
            <div className="reveal reveal-delay-3 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">Customer Focus</h3>
              <p className="text-sm text-muted leading-relaxed">We listen before we build. Every project starts with a real conversation about how you live, what you need, and what matters to you. We keep you involved at every step, because the best results come from working together, not handing you a catalog and asking you to pick a style.</p>
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
            <p className="mt-6 text-lg text-muted leading-relaxed">From first conversation to final installation, here's what to expect.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal reveal-delay-1 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">01</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Consultation</h3>
              <p className="text-sm text-muted leading-relaxed">We visit your home, take measurements, and talk through your goals, your style preferences, and your budget. This visit is free and comes with no obligations.</p>
            </div>
            <div className="reveal reveal-delay-2 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">02</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Design</h3>
              <p className="text-sm text-muted leading-relaxed">Based on our conversation, we create detailed plans and material selections for your approval. You'll see exactly what we're going to build before any wood is cut.</p>
            </div>
            <div className="reveal reveal-delay-3 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">03</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Build</h3>
              <p className="text-sm text-muted leading-relaxed">Your cabinets are handcrafted in our Milwaukie workshop. We keep you updated on progress and welcome shop visits if you want to see your project taking shape.</p>
            </div>
            <div className="reveal reveal-delay-4 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">04</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">Install</h3>
              <p className="text-sm text-muted leading-relaxed">Our installation crew handles everything with care. We protect your floors, clean up after ourselves, and don't leave until every door hangs true and every drawer glides smooth.</p>
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
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">Whether you have a detailed plan or just a spark of an idea, we'd love to hear about it. Your first consultation is always free.</p>
            <Link to="/contact" className="inline-flex items-center mt-10 px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Schedule a Free Consultation
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
