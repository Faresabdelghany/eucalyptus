import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext.jsx';

function Home() {
  const { t } = useLanguage();
  useScrollReveal();

  const sliderRef = useRef(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const isPaused = useRef(false);

  const onSliderScroll = () => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollLeft = Math.round(Math.abs(el.scrollLeft));
    setAtStart(scrollLeft <= 4);
    setAtEnd(scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  };

  const slideBy = (dir) => {
    const el = sliderRef.current;
    if (!el) return;
    const card = el.firstElementChild;
    const cardWidth = card ? card.offsetWidth + 24 : el.clientWidth / 3;
    const isRtl = document.documentElement.dir === 'rtl';
    el.scrollBy({ left: dir * cardWidth * (isRtl ? -1 : 1), behavior: 'smooth' });
  };

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const scrollLeft = Math.round(Math.abs(el.scrollLeft));
    setAtStart(scrollLeft <= 4);
    setAtEnd(scrollLeft >= el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      if (isPaused.current) return;
      const el = sliderRef.current;
      if (!el) return;
      const scrollLeft = Math.round(Math.abs(el.scrollLeft));
      const isAtEnd = scrollLeft >= el.scrollWidth - el.clientWidth - 4;
      const card = el.firstElementChild;
      const cardWidth = card ? card.offsetWidth + 24 : el.clientWidth / 3;
      const isRtl = document.documentElement.dir === 'rtl';
      if (isAtEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: cardWidth * (isRtl ? -1 : 1), behavior: 'smooth' });
      }
    }, 2000);
    return () => clearInterval(id);
  }, []);

  return (
    <main>
      <Helmet>
        <title>{t('home.meta.title')}</title>
        <meta name="description" content={t('home.meta.description')} />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/" />
        <meta property="og:title" content={t('home.meta.title')} />
        <meta property="og:description" content={t('home.meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eucalyptuswoodpallet.com/" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Eucalyptus Wood Pallet",
          "description": "Wood packaging manufacturer producing wooden pallets, boxes, and crates for factories, warehouses, and exporters across Egypt.",
          "url": "https://eucalyptuswoodpallet.com",
          "telephone": "+201050058837",
          "email": "info@eucalyptus-woodpallet.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Huda Hussein - Markaz Badr - Beside Al Talaea School",
            "addressLocality": "Badr City",
            "addressCountry": "EG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.9602,
            "longitude": 31.2579
          },
          "openingHoursSpecification": [
            { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday"], "opens": "08:00", "closes": "17:00" }
          ],
          "sameAs": []
        })}</script>
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-workshop.jpg" alt="Wood packaging production at the Eucalyptus Wood Pallet workshop in Cairo" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-charcoal/90 via-charcoal/70 to-charcoal/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">{t('home.hero.eyebrow')}</p>
            <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-warm-cream leading-[1.1] tracking-tight">{t('home.hero.headline')}</h1>
            <p className="reveal reveal-delay-2 mt-8 text-lg lg:text-xl text-warm-cream/70 leading-relaxed max-w-lg">{t('home.hero.body')}</p>
            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {t('home.hero.ctaPrimary')}
                <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link to="/services" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-warm-cream border border-warm-cream/30 rounded-md hover:border-amber hover:text-amber transition-all duration-300">{t('home.hero.ctaSecondary')}</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-cream/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">{t('home.hero.scrollLabel')}</span>
          <div className="w-px h-8 bg-gradient-to-b from-warm-cream/40 to-transparent animate-pulse"></div>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal max-w-2xl mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('home.products.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">{t('home.products.heading')}</h2>
          </div>
          <div className="relative">
            {/* Left arrow */}
            <button
              onClick={() => slideBy(-1)}
              disabled={atStart}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-warm-cream border border-charcoal/20 text-charcoal hover:border-amber hover:text-amber shadow-sm disabled:opacity-0 disabled:pointer-events-none transition-all duration-300"
            >
              <svg className="w-4 h-4 rotate-180 rtl:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            {/* Right arrow */}
            <button
              onClick={() => slideBy(1)}
              disabled={atEnd}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-warm-cream border border-charcoal/20 text-charcoal hover:border-amber hover:text-amber shadow-sm disabled:opacity-0 disabled:pointer-events-none transition-all duration-300"
            >
              <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </button>
            <div
              ref={sliderRef}
              onScroll={onSliderScroll}
              onMouseEnter={() => { isPaused.current = true; }}
              onMouseLeave={() => { isPaused.current = false; }}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {/* Wooden Pallets card */}
              <Link to="/services#pallets" className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/pallet-product.png" alt="Eucalyptus wooden pallets for industrial and logistics use" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{t('home.products.pallets.title')}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{t('home.products.pallets.body')}</p>
                  <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                    {t('home.products.pallets.cta')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
              {/* Wooden Cable Drums card */}
              <Link to="/services#drums" className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/wooden-cable-drums.png" alt="Wooden cable drum reel manufactured from eucalyptus timber for electrical and telecom cable winding" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{t('home.products.drums.title')}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{t('home.products.drums.body')}</p>
                  <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                    {t('home.products.drums.cta')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
              {/* Wooden Glass Crates card */}
              <Link to="/services#glass-crates" className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/wooden-glass-crates.png" alt="Wooden glass crates for safe transport and export of fragile glass panels" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{t('home.products.glassCrates.title')}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{t('home.products.glassCrates.body')}</p>
                  <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                    {t('home.products.glassCrates.cta')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
              {/* Wooden Boxes card */}
              <Link to="/services#boxes" className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/wooden-boxes.png" alt="Eucalyptus wooden boxes and open crates for storage, agriculture, and packaging" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{t('home.products.boxes.title')}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{t('home.products.boxes.body')}</p>
                  <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                    {t('home.products.boxes.cta')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
              {/* Wooden Crates card */}
              <Link to="/services#crates" className="snap-start shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src="/images/wooden-crates.png" alt="Durable wooden crates for export, distribution, and logistics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{t('home.products.crates.title')}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{t('home.products.crates.body')}</p>
                  <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
                    {t('home.products.crates.cta')}
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </span>
                </div>
              </Link>
            </div>
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('home.philosophy.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">{t('home.philosophy.heading')}</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>{t('home.philosophy.body1')}</p>
                <p>{t('home.philosophy.body2')}</p>
              </div>
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">{t('home.philosophy.stat1.value')}</span>
                  <span className="block mt-1 text-sm text-muted">{t('home.philosophy.stat1.label')}</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">{t('home.philosophy.stat2.value')}</span>
                  <span className="block mt-1 text-sm text-muted">{t('home.philosophy.stat2.label')}</span>
                </div>
                <div>
                  <span className="block text-3xl lg:text-4xl font-bold text-deep-walnut">{t('home.philosophy.stat3.value')}</span>
                  <span className="block mt-1 text-sm text-muted">{t('home.philosophy.stat3.label')}</span>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center mt-10 px-6 py-3 text-sm font-semibold text-deep-walnut border-2 border-deep-walnut rounded-md hover:bg-deep-walnut hover:text-warm-cream transition-all duration-300">
                {t('home.philosophy.cta')}
                <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">{t('home.cta.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-cream leading-tight">{t('home.cta.heading')}</h2>
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">{t('home.cta.body')}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {t('home.cta.ctaPrimary')}
                <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+201050058837" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-warm-cream border border-warm-cream/30 rounded-md hover:border-amber hover:text-amber transition-all duration-300">
                <svg className="me-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {t('home.cta.ctaPhone')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
