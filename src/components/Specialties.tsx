import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Smile,
  Eye,
  Activity,
  Microscope,
} from 'lucide-react';
import type { Specialty } from '../types';
import { defaultSpecialties } from '../data/mockData';

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Brain,
  Bone,
  Baby,
  Smile,
  Eye,
  Activity,
  Microscope,
};

export default function Specialties() {
  const [specialties, setSpecialties] = useState<Specialty[]>(defaultSpecialties);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/specialties')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch specialties');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setSpecialties(data);
        } else {
          setSpecialties(defaultSpecialties);
        }
        setLoading(false);
      })
      .catch(() => {
        setSpecialties(defaultSpecialties);
        setLoading(false);
      });
  }, []);

  return (
    <section id="specialties" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Our Specialties
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            Comprehensive Medical Excellence
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            From prevention to complex procedures, our departments combine advanced
            technology with deeply human care.
          </motion.p>
        </div>

        {loading ? (
          <div className="text-center py-12 text-slate-400">Loading specialties...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-500">{error}</div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => {
              const Icon = iconMap[specialty.icon] || Activity;
              return (
                <motion.div
                  key={specialty.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  whileHover={{
                    y: -10,
                    rotateX: 5,
                    rotateY: -5,
                    boxShadow: '0 30px 60px -15px rgba(13, 148, 136, 0.25)',
                  }}
                  style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-default"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={specialty.image_url}
                      alt={`${specialty.title} Department - Sanmarg Hospital`}
                      loading="lazy"
                      width="400"
                      height="160"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{specialty.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{specialty.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
