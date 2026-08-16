import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Stethoscope } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Specialties', href: '#specialties' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Appointment', href: '#appointment' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#home"
            onClick={(e) => handleClick(e, '#home')}
            className="flex items-center gap-2 group"
            aria-label="SANMARG HOSPITAL Home"
          >
            <div className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="SANMARG HOSPITAL Logo - Multi-Specialty Hospital in Jharkhand"
                className="h-14 md:h-16 w-auto object-contain drop-shadow-md rounded-xl"
                width="160"
                height="64"
              />
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-teal-500 ${
                  isScrolled ? 'text-slate-600' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917004367388"
              aria-label="Call Emergency Helpline +91 7004367388"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:scale-105 transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Emergency</span>
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-slate-700 font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+917004367388"
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold"
              >
                <Phone className="w-4 h-4" />
                Emergency Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
