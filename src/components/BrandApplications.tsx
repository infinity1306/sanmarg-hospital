import { motion } from 'framer-motion';
import { HeartPulse, CreditCard, Smartphone, FileText, Building2, Mail } from 'lucide-react';

const applications = [
  {
    icon: Building2,
    title: 'Building Signage',
    desc: 'Large-scale illuminated facade signage for hospital buildings and campuses.',
    image: '/uploads/sanmarg-signage.jpg',
  },
  {
    icon: CreditCard,
    title: 'Business Cards',
    desc: 'Clean, professional cards for doctors, administrators, and staff.',
    image: null,
  },
  {
    icon: Smartphone,
    title: 'App Icon',
    desc: 'Recognizable icon for mobile apps and digital health platforms.',
    image: null,
  },
  {
    icon: FileText,
    title: 'Letterhead',
    desc: 'Corporate stationery that reinforces trust in every communication.',
    image: null,
  },
  {
    icon: Mail,
    title: 'Email Signature',
    desc: 'Consistent digital identity across all hospital correspondence.',
    image: null,
  },
  {
    icon: HeartPulse,
    title: 'Wayfinding',
    desc: 'Clear directional signage for departments, emergency, and patient areas.',
    image: null,
  },
];

export default function BrandApplications() {
  return (
    <section id="applications" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Brand Applications
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            Designed for Every Touchpoint
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group"
            >
              {app.image ? (
                <div className="h-48 overflow-hidden">
                  <img
                    src={app.image}
                    alt={`${app.title} - SANMARG HOSPITAL Brand Identity`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ) : (
                <div className="h-48 bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-6">
                  <div className="w-full max-w-xs">
                    {index === 1 && (
                      <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                            <HeartPulse className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-sm leading-none">SANMARG</p>
                            <p className="text-[8px] font-bold text-blue-600 tracking-wider">HOSPITAL</p>
                          </div>
                        </div>
                        <p className="text-xs text-slate-500">Dr. A. Sharma, Cardiology</p>
                        <p className="text-xs text-slate-400">+91 7004367388</p>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg">
                        <HeartPulse className="w-10 h-10 text-white" />
                      </div>
                    )}
                    {index === 3 && (
                      <div className="bg-white rounded-xl p-5 shadow-lg border border-slate-100">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                            <HeartPulse className="w-4 h-4 text-white" />
                          </div>
                          <p className="font-bold text-slate-900 text-sm">SANMARG <span className="text-blue-600">HOSPITAL</span></p>
                        </div>
                        <div className="space-y-1.5">
                          <div className="h-1.5 bg-slate-100 rounded w-full" />
                          <div className="h-1.5 bg-slate-100 rounded w-4/5" />
                          <div className="h-1.5 bg-slate-100 rounded w-3/5" />
                        </div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 max-w-xs">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
                            <HeartPulse className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900 text-xs leading-none">SANMARG</p>
                            <p className="text-[7px] font-bold text-blue-600 tracking-wider">HOSPITAL</p>
                          </div>
                        </div>
                        <div className="h-px bg-slate-100 mb-3" />
                        <p className="text-[10px] text-slate-500">Best regards,<br/><span className="font-semibold text-slate-700">SANMARG HOSPITAL Team</span></p>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="flex flex-col gap-2 max-w-xs mx-auto">
                        <div className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2 text-xs font-semibold">
                          <HeartPulse className="w-3 h-3" /> Emergency
                        </div>
                        <div className="bg-white text-slate-700 border border-slate-200 rounded-lg px-4 py-2 text-xs font-medium">
                          OPD Block A →
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
              <div className="p-6">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <app.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{app.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
