import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext.jsx';

function Services() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <main>
      <Helmet>
        <title>{t('services.meta.title')}</title>
        <meta name="description" content={t('services.meta.description')} />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/services" />
        <meta property="og:title" content={t('services.meta.title')} />
        <meta property="og:description" content={t('services.meta.description')} />
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
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.hero.eyebrow')}</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">{t('services.hero.heading')}</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/80 max-w-xl mx-auto leading-relaxed">{t('services.hero.body')}</p>
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.pallets.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t('services.pallets.heading')}</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>{t('services.pallets.body')}</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.pallets.feature1')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.pallets.feature2')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.pallets.feature3')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.pallets.feature4')}</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                {t('services.pallets.cta')}
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.boxes.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t('services.boxes.heading')}</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>{t('services.boxes.body')}</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.boxes.feature1')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.boxes.feature2')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.boxes.feature3')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.boxes.feature4')}</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                {t('services.boxes.cta')}
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.crates.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t('services.crates.heading')}</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>{t('services.crates.body')}</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.crates.feature1')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.crates.feature2')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.crates.feature3')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.crates.feature4')}</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                {t('services.crates.cta')}
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.custom.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t('services.custom.heading')}</h2>
              <div className="mt-6 space-y-4 text-muted leading-relaxed">
                <p>{t('services.custom.body')}</p>
              </div>
              <ul className="mt-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.custom.feature1')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.custom.feature2')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.custom.feature3')}</li>
                <li className="flex items-center gap-3 text-sm text-charcoal"><span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{t('services.custom.feature4')}</li>
              </ul>
              <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                {t('services.custom.cta')}
                <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
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
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('services.eucalyptus.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">{t('services.eucalyptus.heading')}</h2>
            <p className="mt-6 text-lg text-warm-cream/60 leading-relaxed">{t('services.eucalyptus.body')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="reveal reveal-delay-1 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">{t('services.eucalyptus.highDensity.title')}</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">{t('services.eucalyptus.highDensity.body')}</p>
            </div>
            <div className="reveal reveal-delay-1 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">{t('services.eucalyptus.moistureResistant.title')}</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">{t('services.eucalyptus.moistureResistant.body')}</p>
            </div>
            <div className="reveal reveal-delay-2 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">{t('services.eucalyptus.durableUnderPressure.title')}</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">{t('services.eucalyptus.durableUnderPressure.body')}</p>
            </div>
            <div className="reveal reveal-delay-3 group text-center p-8 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-amber/10 mb-5">
                <svg className="w-7 h-7 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-base font-semibold text-warm-cream mb-2">{t('services.eucalyptus.locallySourced.title')}</h4>
              <p className="text-sm text-warm-cream/50 leading-relaxed">{t('services.eucalyptus.locallySourced.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="reveal">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">{t('services.cta.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">{t('services.cta.heading')}</h2>
            <p className="mt-6 text-lg text-muted leading-relaxed max-w-2xl mx-auto">{t('services.cta.body')}</p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                {t('services.cta.ctaPrimary')}
                <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <a href="tel:+20225168243" className="inline-flex items-center px-8 py-4 text-sm font-semibold text-deep-walnut border-2 border-deep-walnut rounded-md hover:bg-deep-walnut hover:text-warm-cream transition-all duration-300">
                <svg className="me-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                {t('services.cta.ctaPhone')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services;
