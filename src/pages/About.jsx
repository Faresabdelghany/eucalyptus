import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext.jsx';

function About() {
  const { t } = useLanguage();
  useScrollReveal();

  return (
    <main>
      <Helmet>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/about" />
        <meta property="og:title" content={t('about.meta.title')} />
        <meta property="og:description" content={t('about.meta.description')} />
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
          <p className="reveal text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('about.hero.eyebrow')}</p>
          <h1 className="reveal reveal-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-cream tracking-tight">{t('about.hero.heading')}</h1>
          <p className="reveal reveal-delay-2 mt-6 text-lg text-warm-cream/70 max-w-xl mx-auto leading-relaxed">{t('about.hero.body')}</p>
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
              <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('about.story.eyebrow')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{t('about.story.heading')}</h2>
              <div className="mt-8 space-y-6 text-muted leading-relaxed">
                <p>{t('about.story.body1')}</p>
                <p>{t('about.story.body2')}</p>
                {t('about.story.body3') && <p>{t('about.story.body3')}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('about.values.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">{t('about.values.heading')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="reveal reveal-delay-1 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{t('about.values.quality.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.values.quality.body')}</p>
            </div>
            <div className="reveal reveal-delay-2 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.42 15.17l-5.6-5.6a2.002 2.002 0 010-2.83l.17-.17a2.002 2.002 0 012.83 0l5.6 5.6m-7.66 7.66l5.6 5.6a2.002 2.002 0 002.83 0l.17-.17a2.002 2.002 0 000-2.83l-5.6-5.6"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{t('about.values.craftsmanship.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.values.craftsmanship.body')}</p>
            </div>
            <div className="reveal reveal-delay-3 text-center p-8 lg:p-10">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber/10 mb-6">
                <svg className="w-8 h-8 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">{t('about.values.customer.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.values.customer.body')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 lg:py-32 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center max-w-2xl mx-auto mb-16 lg:mb-20">
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{t('about.process.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">{t('about.process.heading')}</h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">{t('about.process.subheading')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="reveal reveal-delay-1 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">01</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.process.step1.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.process.step1.body')}</p>
            </div>
            <div className="reveal reveal-delay-2 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">02</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.process.step2.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.process.step2.body')}</p>
            </div>
            <div className="reveal reveal-delay-3 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">03</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.process.step3.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.process.step3.body')}</p>
            </div>
            <div className="reveal reveal-delay-4 relative bg-ivory rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-amber text-charcoal text-sm font-bold">04</span>
                <div className="flex-1 h-px bg-amber/20"></div>
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-3">{t('about.process.step4.title')}</h3>
              <p className="text-sm text-muted leading-relaxed">{t('about.process.step4.body')}</p>
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
            <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-6">{t('about.cta.eyebrow')}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-cream leading-tight">{t('about.cta.heading')}</h2>
            <p className="mt-6 text-lg text-warm-cream/70 leading-relaxed max-w-2xl mx-auto">{t('about.cta.body')}</p>
            <Link to="/contact" className="inline-flex items-center mt-10 px-8 py-4 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              {t('about.cta.cta')}
              <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
