import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { projects } from '../../data/projects';

const categories = ['All', 'Completed', 'Running'] as const;

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof categories)[number]>('All');
  const filtered = useMemo(() => {
    if (active === 'All') return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading subtitle="Featured Work" title="Our Projects" />
        <div className="mt-6 flex flex-wrap gap-3">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 rounded-full border ${active === c ? 'bg-primary text-white border-primary' : 'border-neutral-lightGray hover:border-primary hover:text-primary'}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.a
                layout
                key={p.id}
                href={`/projects/${p.id}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group rounded-xl overflow-hidden bg-white border border-blue-100 shadow-sm hover:shadow-lg"
              >
                <div className="h-44 overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition" src={p.image} alt={p.name} loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="text-xs inline-block px-2 py-1 rounded bg-blue-100 text-primary">{p.category}</div>
                  <h3 className="text-lg font-semibold text-neutral-almostBlack mt-2">{p.name}</h3>
                  <p className="mt-1 text-sm text-neutral-darkGray/80">{p.description}</p>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

