import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, HeartPulse } from 'lucide-react';

export default function BrandHero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="/uploads/sanmarg-hero.jpg"
          alt="SANMARG HOSPITAL Exterior Building Facade in Jharkhand"
          loading="lazy"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/90" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8"
        >
          <HeartPulse className="w-4 h-4" />
          Hospital Brand Identity
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 mb-6"
        >
          <span className="block">SANMARG</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">
            HOSPITAL
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A professional, compassionate healthcare brand built on trust, clarity, and modern medical excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#logo"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#logo')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-xl shadow-blue-900/20 hover:shadow-blue-900/30 hover:scale-105 transition-all"
          >
            Explore Brand
          </a>
          <a
            href="#inquiry"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#inquiry')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-4 rounded-full bg-white text-blue-700 border-2 border-blue-100 font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all"
          >
            Brand Inquiry
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ArrowDown className="w-6 h-6 text-blue-400" />
      </motion.div>
    </section>
  );
}
