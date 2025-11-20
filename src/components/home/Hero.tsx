import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  const images = [
   '/hero/1.jpeg',
  '/hero/2.jpg',
  '/hero/3.jpeg',
  '/hero/4.jpg',
  '/hero/5.jpeg',
  '/hero/6.jpg',
  '/hero/7.jpg',
  ];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 5000);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <section className="relative h-[88vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            className="absolute inset-0 w-full h-full object-cover"
            src={images[index]}
            alt="Hero background"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-blue-600/40" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold">KARNALI INFRASTRUCTURE DEVELOPMENT SERVICES PVT LTD</h1>
        <div className="mt-6 flex items-center justify-center gap-4">
          <a href="/projects" className="px-6 py-3 rounded-lg bg-primary hover:bg-accent text-white shadow">Explore Our Work</a>
          <a href="/contact" className="px-6 py-3 rounded-lg border border-white/60 hover:bg-white hover:text-primary">Contact Us</a>
        </div>
      </motion.div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, i) => (
          <button key={i} aria-label={`Slide ${i + 1}`} onClick={() => setIndex(i)} className={`w-2.5 h-2.5 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`} />
        ))}
      </div>
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <div className="w-1.5 h-8 rounded-full bg-white/70 animate-bounce" />
      </div>
    </section>
  );
}

