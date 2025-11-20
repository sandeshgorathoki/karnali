import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { services } from '../../data/services';

export default function ServicesGrid() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading subtitle="What We Do" title="Our Services" />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.a
              href={`/services/${s.slug}`}
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group rounded-xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-lg transition"
            >
              <div className="h-44 overflow-hidden">
                <img className="w-full h-full object-cover group-hover:scale-105 transition duration-300" src={s.image} alt={s.title} loading="lazy" />
              </div>
              <div className="p-5">
                <div className="text-sm text-secondary">{s.title}</div>
                <h3 className="text-lg font-semibold text-neutral-almostBlack mt-1">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-darkGray/80">{s.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                  Read More →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}


