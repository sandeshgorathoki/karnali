import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PiHouseBold, PiBuildingBold } from 'react-icons/pi';

export default function ServicesHighlight() {
  const card = (to: string, Icon: any, title: string, tagline: string, desc: string) => (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-2 hover:shadow-lg transition duration-300"
    >
      <Icon className="text-primary text-4xl" />
      <h3 className="mt-4 text-xl font-semibold text-neutral-almostBlack">{title}</h3>
      <p className="text-secondary text-sm tracking-wide">{tagline}</p>
      <p className="mt-3 text-neutral-darkGray/80">{desc}</p>
      <Link to={to} className="mt-4 inline-flex items-center gap-1 text-primary hover:gap-2 transition-all">
        Learn More →
      </Link>
    </motion.div>
  );

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 gap-6">
        {card('/divisions/homes', PiHouseBold, 'Homes Division', 'YOUR HOME, NOW A REALITY', 'Residential construction services from concept to completion.')}
        {card('/divisions/infrastructure', PiBuildingBold as any, 'Infrastructure Division', 'BUILDING THE FOUNDATIONS OF PROGRESS', 'Large-scale infrastructure projects delivered safely and on time.')}
      </div>
    </section>
  );
}

