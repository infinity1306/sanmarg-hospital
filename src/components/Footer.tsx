import { Stethoscope, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Doctors', href: '#doctors' },
    { label: 'Specialties', href: '#specialties' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Book Appointment', href: '#appointment' },
    { label: 'Contact', href: '#contact' },
  ];

  const departments = [
    'Cardiology',
    'Neurology',
    'Orthopaedics',
    'Oncology',
    'Nephrology',
    'Gastroenterology',
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img
                src="/logo.png"
                alt="SANMARG HOSPITAL - Multi-Specialty Hospital in Baridih, Ramgarh, Jharkhand"
                loading="lazy"
                width="180"
                height="80"
                className="h-20 w-auto object-contain drop-shadow-md rounded-xl"
              />
            </div>
            <p className="text-sm leading-relaxed mb-2">
              Committed to delivering compassionate, affordable, and high-quality multi-specialty healthcare in Baridih, Ramgarh, Jharkhand.
            </p>
            <p className="text-xs text-teal-400 font-medium mb-1">
              Director: Sandeep Kumar | M.D.: Usha Devi
            </p>
            <p className="text-xs text-slate-400 mb-6">
              Emergency: 24/7 Helpline (+91 7004367388)
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, name: 'Facebook' },
                { Icon: Twitter, name: 'Twitter' },
                { Icon: Instagram, name: 'Instagram' },
                { Icon: Linkedin, name: 'LinkedIn' },
                { Icon: Youtube, name: 'YouTube' },
              ].map(({ Icon, name }, index) => (
                <a
                  key={index}
                  href="#"
                  aria-label={`SANMARG HOSPITAL on ${name}`}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Departments</h4>
            <ul className="space-y-3">
              {departments.map((dept) => (
                <li key={dept}>
                  <a
                    href="#specialties"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector('#specialties')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm hover:text-teal-400 transition-colors"
                  >
                    {dept}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe for health tips, hospital updates, and medical news.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing!');
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                aria-label="Your email address for newsletter updates"
                className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-teal-500 transition-colors text-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} SANMARG HOSPITAL. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Scroll to top of page"
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-xl flex items-center justify-center hover:scale-110 transition-transform"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
}
