import { useState } from 'react';
import useScrollReveal from '../hooks/useScrollReveal.js';

const selectChevronStyle = {
  backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%239A9087%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')",
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 12px center',
  backgroundSize: '20px',
};

function Contact() {
  useScrollReveal();

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
      {/* Hero */}
      <section className="bg-charcoal text-warm-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-[Playfair_Display] reveal">Let's Talk About Your Project</h1>
          <p className="mt-6 text-lg md:text-xl text-warm-cream/70 max-w-2xl mx-auto reveal reveal-delay-1">Whether you know exactly what you want or you're just starting to explore ideas, we're here to help. Reach out however works best for you.</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 lg:py-28 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-lg text-muted max-w-3xl mb-12 reveal">We love hearing from homeowners who are excited about their space. Drop us a line, give us a call, or stop by the shop. We're always happy to talk wood, design, and what's possible for your home.</p>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3 reveal-left">
              <div className="bg-ivory rounded-2xl p-8 md:p-10 shadow-sm border border-charcoal/5">
                <h2 className="text-2xl md:text-3xl font-bold font-[Playfair_Display] text-charcoal mb-2">Send Us a Message</h2>
                <p className="text-muted mb-8">Fill out the form below and we'll get back to you within one business day.</p>
                <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">Your Name <span className="text-amber">*</span></label>
                    <input type="text" id="name" name="name" required placeholder="First and last name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">Email Address <span className="text-amber">*</span></label>
                      <input type="email" id="email" name="email" required placeholder="you@example.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">Phone Number (optional)</label>
                      <input type="tel" id="phone" name="phone" placeholder="(503) 555-0000" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-charcoal mb-2">Project Type</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors appearance-none" style={selectChevronStyle}>
                      <option value="">Select a project type</option>
                      <option value="kitchen-cabinets">Kitchen Cabinets</option>
                      <option value="bathroom-vanity">Bathroom Vanity</option>
                      <option value="built-in-shelving">Built-In Shelving</option>
                      <option value="cabinet-refacing">Cabinet Refacing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">Tell Us About Your Project <span className="text-amber">*</span></label>
                    <textarea id="message" name="message" rows="5" required placeholder="Give us a sense of what you're looking for -- the room, the style, your timeline, anything that helps us understand your vision." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-lg border border-charcoal/15 bg-warm-cream/50 text-charcoal placeholder:text-muted/60 focus:outline-none focus:ring-2 focus:ring-amber/40 focus:border-amber transition-colors resize-vertical"></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-charcoal bg-amber rounded-lg hover:bg-amber/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer">Send Message</button>
                  {status === 'success' && (
                    <div id="form-success" className="p-4 rounded-lg bg-sage/20 border border-sage/30 text-charcoal">
                      <p className="font-medium">Message Received!</p>
                      <p className="text-sm text-muted mt-1">Thanks for reaching out. We typically respond within one business day. If your project is time-sensitive, give us a call at (02) 2516-8243 and we'll get you on the calendar sooner.</p>
                    </div>
                  )}
                  {status === 'error' && (
                    <div id="form-error" className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      <p className="font-medium">Something Went Wrong</p>
                      <p className="text-sm mt-1">We weren't able to send your message. Please try again, or contact us directly at (02) 2516-8243 or hello@cedarstone-cabinets.com.</p>
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
                  <h3 className="font-semibold text-charcoal">Phone</h3>
                  <a href="tel:+20225168243" className="text-muted hover:text-amber transition-colors">(02) 2516-8243</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Email</h3>
                  <a href="mailto:hello@cedarstone-cabinets.com" className="text-muted hover:text-amber transition-colors">hello@cedarstone-cabinets.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Workshop & Showroom</h3>
                  <p className="text-muted">27 Road 9, Maadi<br/>Cairo, Egypt 11728</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-amber" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">Hours</h3>
                  <p className="text-muted">Monday - Friday: 8:00am - 5:00pm<br/>Saturday: 9:00am - 2:00pm<br/>Sunday: Closed</p>
                </div>
              </div>
              <div className="w-full h-px bg-charcoal/10"></div>
              <div className="bg-deep-walnut/5 rounded-xl p-6 border border-deep-walnut/10">
                <h3 className="font-semibold text-charcoal mb-2 font-[Playfair_Display]">Free In-Home Consultations</h3>
                <p className="text-sm text-muted leading-relaxed">We offer complimentary in-home consultations throughout the greater Cairo area. Let us come to you to discuss your project, take measurements, and provide a detailed estimate.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-ivory py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-10 reveal">
            <h2 className="text-2xl md:text-3xl font-bold font-[Playfair_Display] text-charcoal">Visit Our Showroom</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto">Stop by our workshop and showroom in Maadi, Cairo to see our craftsmanship firsthand and explore material samples.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-charcoal/5 reveal reveal-delay-1">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.2!2d31.2579!3d29.9602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzM2LjciTiAzMcKwMTUnMjguNCJF!5e0!3m2!1sen!2seg!4v1700000000000" width="100%" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Cedar & Stone Cabinetry location on Google Maps"></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contact;
