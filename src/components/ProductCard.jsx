import { Link } from 'react-router-dom';

function ProductCard({ to, imgSrc, imgAlt, title, body, cta }) {
  return (
    <Link to={to} className="w-full lg:snap-start lg:shrink-0 lg:w-[calc(33.333%-16px)] group block bg-ivory rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      <div className="aspect-[4/3] overflow-hidden">
        <img src={imgSrc} alt={imgAlt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="p-6 lg:p-8">
        <h3 className="text-xl font-semibold text-charcoal group-hover:text-amber transition-colors duration-300">{title}</h3>
        <p className="mt-3 text-sm text-muted leading-relaxed">{body}</p>
        <span className="inline-flex items-center mt-5 text-sm font-medium text-amber group-hover:gap-3 gap-2 transition-all duration-300">
          {cta}
          <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
        </span>
      </div>
    </Link>
  );
}

export default ProductCard;
