import { Link } from 'react-router-dom';

function ServiceSection({ id, bg, imageRight, imgSrc, imgAlt, eyebrow, heading, body, features, ctaLabel }) {
  const image = (
    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
      <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover" />
    </div>
  );

  const text = (
    <>
      <p className="text-amber text-sm font-semibold uppercase tracking-[0.3em] mb-4">{eyebrow}</p>
      <h2 className="text-3xl sm:text-4xl font-bold text-charcoal leading-tight">{heading}</h2>
      <div className="mt-6 space-y-4 text-muted leading-relaxed"><p>{body}</p></div>
      <ul className="mt-8 space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm text-charcoal">
            <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0"></span>{feature}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="inline-flex items-center mt-8 px-6 py-3 text-sm font-semibold text-charcoal bg-amber rounded-md hover:bg-amber/90 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
        {ctaLabel}
        <svg className="ms-2 w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
      </Link>
    </>
  );

  return (
    <section id={id} className={`py-24 lg:py-32 ${bg}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {imageRight ? (
            <>
              <div className="order-2 lg:order-1">{text}</div>
              <div className="order-1 lg:order-2">{image}</div>
            </>
          ) : (
            <>
              <div>{image}</div>
              <div>{text}</div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
