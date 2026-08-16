import { motion } from 'framer-motion';
import { Heart, Shield, Users, Sparkles, Clock, Award } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    desc: 'Every patient is treated with empathy, dignity, and personalized attention.',
  },
  {
    icon: Shield,
    title: 'Trust',
    desc: 'A commitment to transparency, safety, and ethical care in every interaction.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'Serving families with accessible healthcare that strengthens the community.',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    desc: 'Embracing modern medicine and technology to improve patient outcomes.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    desc: '24/7 readiness to provide care when patients need it most.',
  },
  {
    icon: Award,
    title: 'Excellence',
    desc: 'Pursuing the highest standards in clinical practice and patient experience.',
  },
];

export default function BrandValues() {
  return (
    <section id="values" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Brand Values
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            What SANMARG Stands For
          </motion.h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 40px -12px rgba(37, 99, 235, 0.15)',
              }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-white flex items-center justify-center mb-5">
                <value.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
