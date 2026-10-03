import { motion } from 'framer-motion';
import { HeartPulse } from 'lucide-react';

export default function BrandLogo() {
  const logoSizes = [
    { label: 'Primary Logo', scale: 'scale-100', bg: 'bg-white' },
    { label: 'Dark Background', scale: 'scale-90', bg: 'bg-slate-900' },
    { label: 'Icon Only', scale: 'scale-75', bg: 'bg-blue-50' },
  ];

  return (
    <section id="logo" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
            >
              Logo Concept
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Symbol of Care & Trust
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              The SANMARG HOSPITAL identity combines a modern medical cross with a
              heartbeat rhythm, representing life, compassion, and clinical excellence.
              The clean wordmark communicates professionalism and accessibility.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Cross', desc: 'Healing & care' },
                { label: 'Heartbeat', desc: 'Life & vitality' },
                { label: 'Blue', desc: 'Trust & calm' },
                { label: 'Clean Type', desc: 'Modern & clear' },
              ].map((item, index) => (
                <div key={item.label} className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="font-bold text-slate-900">{item.label}</p>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-6">
            {logoSizes.map((variant, index) => (
              <motion.div
                key={variant.label}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${variant.bg} rounded-2xl p-8 border border-slate-100 shadow-lg flex items-center justify-center`}
              >
                <div className={`flex items-center gap-4 ${variant.scale}`}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                    <HeartPulse className="w-9 h-9 text-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-3xl font-extrabold tracking-tight leading-none ${variant.bg === 'bg-slate-900' ? 'text-white' : 'text-slate-900'}`}>
                      SANMARG
                    </span>
                    <span className={`text-xs font-bold uppercase tracking-[0.25em] ${variant.bg === 'bg-slate-900' ? 'text-blue-400' : 'text-blue-600'}`}>
                      HOSPITAL
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
