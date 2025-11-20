import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';
import { PiSealCheckBold, PiCubeBold, PiTimerBold, PiCurrencyDollarBold, PiHeadsetBold, PiShieldCheckBold } from 'react-icons/pi';

const reasons = [
  { icon: PiSealCheckBold, title: 'Experienced Team (25+ years)' },
  { icon: PiCubeBold, title: 'Quality Materials' },
  { icon: PiTimerBold, title: 'Timely Delivery' },
  { icon: PiCurrencyDollarBold, title: 'Competitive Pricing' },
  { icon: PiHeadsetBold, title: 'After-Sales Support' },
  { icon: PiShieldCheckBold, title: 'Licensed & Insured' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop" alt="Why choose us" loading="lazy" />
        </div>
        <div>
          <SectionHeading subtitle="Values" title="Why Choose Us" align="left" />
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <motion.div key={r.title} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="flex items-center gap-3 p-4 rounded-lg border border-neutral-lightGray bg-white">
                <r.icon className="text-primary text-2xl" />
                <div className="font-medium text-neutral-almostBlack">{r.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




