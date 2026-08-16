import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, Shield, Users } from 'lucide-react';

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickCards = [
    { icon: Clock, label: '24/7 Emergency', value: 'Always Open' },
    { icon: Shield, label: 'Accredited Care', value: 'NABH Certified' },
    { icon: Users, label: 'Expert Doctors', value: 'Dedicated Team' },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y: y1 }} className="absolute -inset-y-12 inset-x-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/uploads/hero-hospital.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/uploads/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/75 to-blue-950/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900/40" />
          <div className="absolute inset-0 bg-blue-900/10 backdrop-blur-[2px]" />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-blue-300 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              Leading Multi-Specialty Healthcare
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6"
            >
              Healing Lives With{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">
                Compassion
              </span>{' '}
              & Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed max-w-xl"
            >
              Experience world-class medical care powered by advanced technology,
              renowned specialists, and a patient-first philosophy.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-xl shadow-blue-900/30 hover:shadow-blue-900/40 hover:scale-105 transition-all"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#specialties"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#specialties')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                Explore Specialties
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: -mouse.y * 0.3,
              rotateY: mouse.x * 0.3,
            }}
            transition={{ duration: 1, delay: 0.4, type: 'spring' }}
            style={{ perspective: 1000 }}
            className="hidden lg:block"
          >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
                <img
                  src="/logo.png"
                  alt="SANMARG HOSPITAL Logo - Leading Multi-Specialty Hospital in Patratu, Ramgarh, Jharkhand"
                  className="relative rounded-3xl shadow-2xl border border-white/20 w-full max-w-md ml-auto object-cover"
                  width="448"
                  height="260"
                />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">24/7</p>
                    <p className="text-sm text-slate-500">Dedicated Care</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16 lg:mt-24"
        >
          {quickCards.map((card, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-5 hover:bg-white/20 transition-all cursor-default"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <card.icon className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <p className="text-white font-semibold">{card.value}</p>
                  <p className="text-slate-300 text-sm">{card.label}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-white/70" />
        </div>
      </motion.div>
    </section>
  );
}
