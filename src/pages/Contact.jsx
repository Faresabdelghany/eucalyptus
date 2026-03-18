import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal.js';
import { useLanguage } from '../context/LanguageContext.jsx';

function Contact() {
  useScrollReveal();
  const { lang, t } = useLanguage();

  const selectChevronStyle = {
    backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239A9087%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')",
    backgroundRepeat: 'no-repeat',
    backgroundPosition: lang === 'ar' ? 'left 12px center' : 'right 12px center',
    backgroundSize: '20px',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main>
      <Helmet>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
        <link rel="canonical" href="https://eucalyptuswoodpallet.com/contact" />
        <meta property="og:title" content="Contact Us | Request a Quote | Eucalyptus Wood Pallet" />
        <meta property="og:description" content="Get in touch with our team in Cairo to request a quote for wooden pallets, boxes, crates, or custom packaging solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://eucalyptuswoodpallet.com/contact" />
      </Helmet>
      {/* Hero */}
      <section className="bg-charcoal text-warm-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[Playfair_Display] reveal">{t('contact.hero.heading')}</h1>
          <p className="mt-6 text-lg md:text-xl text-warm-cream/70 max-w-2xl mx-auto reveal reveal-delay-1">{t('contact.hero.body')}</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-muted max-w-3xl mb-12 reveal">{t('contact.intro')}</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="bg-ivory rounded-2xl p-8 md:p-10 shadow-sm border border-charcoal/5">
                <h2 className="text-2xl md:text-3xl font-bold font-[Playfair_Display] text-charcoal mb-2">{t('contact.form.heading')}</h2>
                <p className="text-muted mb-8">{t('contact.form.subheading')}</p>
                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">{t('contact.form.nameLabel')} <span className="text-amber">*</span></label>
                    <input type="text" id="name" name="name" required placeholder={t('contact.form.namePlaceholder')} value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">{t('contact.form.emailLabel')} <span className="text-amber">*</span></label>
                      <input type="email" id="email" name="email" required placeholder={t('contact.form.emailPlaceholder')} value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">{t('contact.form.phoneLabel')}</label>
                      <input type="tel" id="phone" name="phone" placeholder={t('contact.form.phonePlaceholder')} value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">{t('contact.form.serviceLabel')}</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors appearance-none" style={selectChevronStyle}>
                      <option value="">{t('contact.form.serviceOptions.placeholder')}</option>
                      <option value="wooden-pallets">{t('contact.form.serviceOptions.pallets')}</option>
                      <option value="wooden-boxes">{t('contact.form.serviceOptions.boxes')}</option>
                      <option value="wooden-crates">{t('contact.form.serviceOptions.crates')}</option>
                      <option value="custom-packaging">{t('contact.form.serviceOptions.custom')}</option>
                      <option value="other">{t('contact.form.serviceOptions.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">{t('contact.form.messageLabel')} <span className="text-amber">*</span></label>
                    <textarea id="message" name="message" rows="5" required placeholder={t('contact.form.messagePlaceholder')} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors resize-vertical"></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-charcoal bg-amber rounded-lg hover:bg-amber/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">{t('contact.form.submitButton')}</button>
                  {status === 'success' && (
                    <div id="form-success" className="p-4 rounded-lg bg-sage/20 border border-sage/30 text-charcoal">
                      <p className="font-medium">{t('contact.form.success.heading')}</p>
                      <p className="text-sm text-muted mt-1">{t('contact.form.success.body')}</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div id="form-error" className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      <p className="font-medium">{t('contact.form.error.heading')}</p>
                      <p className="text-sm mt-1">{t('contact.form.error.body')}</p>
                    </div>
                  )}
                </form>
              </div>
            </div>
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8 reveal-right">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{t('contact.info.phoneLabel')}</h3>
                  <a href="tel:+20225168243" className="text-muted hover:text-amber transition-colors">(02) 2516-8243</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{t('contact.info.emailLabel')}</h3>
                  <a href="mailto:info@eucalyptuswoodpallet.com" className="text-muted hover:text-amber transition-colors">info@eucalyptuswoodpallet.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{t('contact.info.addressLabel')}</h3>
                  <p className="text-muted">27 Road 9, Maadi<br/>Cairo, Egypt 11728</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{t('contact.info.hoursLabel')}</h3>
                  <p className="text-muted whitespace-pre-line">{t('contact.info.hoursValue')}</p>
                </div>
              </div>
              <div className="w-full h-px bg-charcoal/10"></div>
              <div className="bg-deep-walnut/5 rounded-xl p-6 border border-deep-walnut/10">
                <h3 className="font-semibold text-charcoal mb-2 font-[Playfair_Display]">{t('contact.info.freeQuote.heading')}</h3>
                <p className="text-sm text-muted leading-relaxed">{t('contact.info.freeQuote.body')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <h2 className="text-2xl md:text-3xl font-bold font-[Playfair_Display] text-charcoal">{t('contact.map.heading')}</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">{t('contact.map.body')}</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-charcoal/5 reveal reveal-delay-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d31.2579!3d29.9602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM2LjciTiAzMcKwMTUnMjguNCJF!5e0!3m2!1sen!2seg!4v1700000000000" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Eucalyptus Wood Pallet workshop location in Maadi, Cairo"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
