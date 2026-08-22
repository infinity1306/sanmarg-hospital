import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, HeartPulse, Building2, UserCheck } from 'lucide-react';
import type { Stat } from '../types';
import { defaultStats } from '../data/mockData';

function AnimatedNumber({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState('0');
  const numeric = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const prefix = value.match(/^[^0-9]/)?.[0] || '';

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.floor(eased * numeric);
      setDisplay(start.toLocaleString());
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, numeric]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function About() {
  const [stats, setStats] = useState<Stat[]>(defaultStats);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch stats');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setStats(data);
        } else {
          setStats(defaultStats);
        }
        setLoading(false);
      })
      .catch(() => {
        setStats(defaultStats);
        setLoading(false);
      });
  }, []);

  const features = [
    {
      icon: HeartPulse,
      title: 'Patient-Centered Care',
      desc: 'Every treatment plan is tailored to the individual, ensuring comfort, clarity, and confidence.',
    },
    {
      icon: Award,
      title: 'Award-Winning Outcomes',
      desc: 'Recognized nationally for clinical excellence, safety standards, and surgical success rates.',
    },
    {
      icon: Building2,
      title: 'Modern Infrastructure',
      desc: 'State-of-the-art diagnostic labs, robotic surgery suites, and infection-free patient zones.',
    },
    {
      icon: UserCheck,
      title: 'Experienced Specialists',
      desc: 'A diverse team of leading consultants, surgeons, nurses, and allied health professionals.',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
              <img
                src="/uploads/director.jpg"
                alt="Director Sandeep Kumar - SANMARG HOSPITAL in Baridih, Ramgarh, Jharkhand"
                loading="lazy"
                width="600"
                height="540"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/90 backdrop-blur-sm text-white text-xs font-semibold uppercase tracking-wider mb-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                  Hospital Leadership
                </div>
                <h3 className="text-2xl font-bold text-white">Sandeep Kumar</h3>
                <p className="text-teal-200 text-sm font-medium">Director, SANMARG HOSPITAL</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-blue-600 text-white rounded-2xl p-6 shadow-xl hidden sm:block">
              <p className="text-4xl font-bold">24/7</p>
              <p className="text-sm opacity-90">Emergency Care</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3"
            >
              About SANMARG HOSPITAL
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Trusted Healthcare in Baridih, Ramgarh (Jharkhand)
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-6"
            >
              SANMARG HOSPITAL is a premier multi-specialty healthcare institution in
              Baridih, Ramgarh, Jharkhand, delivering comprehensive medical care across
              cardiology, neurology, orthopaedics, obstetrics, and surgery. Our mission is to
              provide accessible, high-quality, and compassionate medical treatments.
            </motion.p>

            {/* Leadership & Administration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-100/80 rounded-2xl p-5 mb-8 shadow-sm"
            >
              <h4 className="text-xs font-bold uppercase tracking-wider text-teal-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-teal-500 inline-block animate-pulse" />
                Hospital Leadership & Administration
              </h4>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3.5 hover:border-teal-300 transition-colors">
                  <img
                    src="/uploads/director.jpg"
                    alt="Sandeep Kumar - Director, SANMARG HOSPITAL"
                    className="w-13 h-13 w-[52px] h-[52px] rounded-xl object-cover object-top border-2 border-teal-500/30 shadow-sm shrink-0"
                    width="52"
                    height="52"
                  />
                  <div>
                    <p className="text-xs text-teal-600 font-semibold uppercase tracking-wide">Director</p>
                    <p className="text-base font-bold text-slate-900 leading-tight">Sandeep Kumar</p>
                    <p className="text-[11px] text-slate-500">SANMARG HOSPITAL</p>
                  </div>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Managing Director (M.D.)</p>
                  <p className="text-base font-bold text-slate-900 leading-tight">Usha Devi</p>
                  <p className="text-[11px] text-slate-500">SANMARG HOSPITAL</p>
                </div>
              </div>
              <p className="text-xs font-medium italic text-slate-500 mt-3 pt-3 border-t border-slate-200/60">
                In revered memory of Krishna Singh & Dinesh Kumar Munda
              </p>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-5 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center shrink-0">
                    <feature.icon className="w-5 h-5 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {loading ? (
            <div className="col-span-full text-center py-8 text-slate-400">Loading stats...</div>
          ) : error ? (
            <div className="col-span-full text-center py-8 text-red-500">{error}</div>
          ) : (
            stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(13, 148, 136, 0.2)' }}
                className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm"
              >
                <p className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-slate-500 font-medium">{stat.label}</p>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
