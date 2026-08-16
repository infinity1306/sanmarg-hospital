import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Facility } from '../types';
import { defaultFacilities } from '../data/mockData';

export default function Facilities() {
  const [facilities, setFacilities] = useState<Facility[]>(defaultFacilities);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/facilities')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch facilities');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setFacilities(data);
        } else {
          setFacilities(defaultFacilities);
        }
        setLoading(false);
      })
      .catch(() => {
        setFacilities(defaultFacilities);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (facilities.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % facilities.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [facilities]);

  const next = () => setCurrent((prev) => (prev + 1) % facilities.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + facilities.length) % facilities.length);

  if (loading) {
    return (
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-slate-400">
          Loading facilities...
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="facilities" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center text-red-500">
          {error}
        </div>
      </section>
    );
  }

  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3"
            >
              World-Class Facilities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Built for Healing, Designed for Comfort
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              Our hospitals feature advanced diagnostic centers, fully equipped
              emergency units, intensive care wards, modern operating theatres, and
              comfortable patient rooms — all maintained to the highest standards.
            </motion.p>

            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.button
                  key={facility.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setCurrent(index)}
                  className={`w-full text-left px-5 py-4 rounded-xl transition-all border ${
                    current === index
                      ? 'bg-teal-50 border-teal-200 shadow-md'
                      : 'bg-white border-slate-100 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-semibold ${
                        current === index ? 'text-teal-800' : 'text-slate-700'
                      }`}
                    >
                      {facility.title}
                    </span>
                    {current === index && (
                      <motion.span
                        layoutId="facility-indicator"
                        className="w-2 h-2 rounded-full bg-teal-500"
                      />
                    )}
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <AnimatePresence mode="wait">
                {facilities[current] && (
                  <motion.div
                    key={facilities[current].id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={facilities[current].image_url}
                      alt={`${facilities[current].title} - Sanmarg Hospital Facilities in Jharkhand`}
                      loading="lazy"
                      width="600"
                      height="450"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {facilities[current].title}
                      </h3>
                      <p className="text-slate-200 leading-relaxed">
                        {facilities[current].description}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
              <div className="flex gap-2">
                {facilities.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2 rounded-full transition-all ${
                      current === index ? 'w-8 bg-teal-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="p-3 rounded-full border border-slate-200 text-slate-600 hover:bg-teal-50 hover:text-teal-600 hover:border-teal-200 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="p-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
