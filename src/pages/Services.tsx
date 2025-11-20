import PageHero from '../components/shared/PageHero';
import SEO from '../components/shared/SEO';
import { services } from '../data/services';

export default function Services() {
  return (
    <>
      <SEO title="Services" description="Explore Karnali Construction services from design to delivery." />
      <PageHero title="Services" subtitle="What We Offer" />
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <a key={s.id} href={`/services/${s.slug}`} className="rounded-xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-lg transition">
              <div className="h-44 overflow-hidden">
                <img className="w-full h-full object-cover" src={s.image} alt={s.title} />
              </div>
              <div className="p-5">
                <div className="text-sm text-secondary">{s.title}</div>
                <h3 className="text-lg font-semibold text-neutral-almostBlack mt-1">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-darkGray/80">{s.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

