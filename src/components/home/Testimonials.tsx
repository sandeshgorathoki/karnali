import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { testimonials } from '../../data/testimonials';

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-16 bg-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeading subtitle="Clients" title="What Our Clients Say" />
        <div className="relative mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence initial={false} mode="wait">
              {testimonials.slice(index, index + 3).map((t, i) => (
                <motion.div
                  key={`${t.name}-${i}`}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="rounded-xl bg-white p-6 border border-blue-100 shadow-sm"
                >
                  <div className="text-4xl text-primary">“</div>
                  <p className="mt-2 text-neutral-darkGray/90">{t.quote}</p>
                  <div className="mt-4 flex items-center gap-3">
                    {t.avatar && <img className="w-10 h-10 rounded-full object-cover" src={t.avatar} alt={t.name} />}
                    <div>
                      <div className="font-semibold text-neutral-almostBlack">{t.name}</div>
                      <div className="text-sm text-neutral-darkGray/70">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

