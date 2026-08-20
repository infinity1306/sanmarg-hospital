import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import type { Doctor } from '../types';
import { defaultDoctors } from '../data/mockData';

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>(defaultDoctors);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // API fetch bypassed to strictly use updated doctor data
    setDoctors(defaultDoctors);
    setLoading(false);
  }, []);

  return (
    <section id="doctors" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Meet Our Experts
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            Distinguished Doctors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            Our team brings together decades of experience, global training, and a
            shared commitment to patient wellbeing.
          </motion.p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading doctors...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  rotateX: 4,
                  rotateY: -4,
                  boxShadow: '0 30px 60px -15px rgba(13, 148, 136, 0.25)',
                }}
                style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                  </div>
                  <p className="text-teal-600 font-medium text-sm mb-3">{doctor.specialty}</p>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">{doctor.bio}</p>
                  <a
                    href="#appointment"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-teal-600 transition-colors"
                  >
                    <Calendar className="w-4 h-4" />
                    Book Consultation
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
