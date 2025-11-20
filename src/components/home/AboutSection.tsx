import { motion } from 'framer-motion';
import SectionHeading from '../shared/SectionHeading';

export default function AboutSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-5 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 relative"
        >
          <img
            className="w-full h-[360px] object-cover rounded-xl shadow"
            src="/hero/cert.jpeg"
            alt="Construction team"
            loading="lazy"
          />
          <div className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-lg shadow">
            5+ Years
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <SectionHeading subtitle="3 Decades of Building Dreams" title="Certificate" align="left" />
          <p className="mt-4 text-neutral-darkGray/80">Trust earned by Karnali Construction through quality, compliance, and client satisfaction.</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            <li>✓ ISO Certified</li>
            <li>✓ Government Approved</li>
            <li>✓ Experienced Team</li>
            <li>✓ Quality Assurance</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}




