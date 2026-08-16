import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import type { Doctor, Specialty } from '../types';
import { defaultDoctors, defaultSpecialties } from '../data/mockData';

export default function Appointment() {
  const [doctors, setDoctors] = useState<Doctor[]>(defaultDoctors);
  const [specialties, setSpecialties] = useState<Specialty[]>(defaultSpecialties);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    appointment_date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    fetch('/api/doctors')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load doctors');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setDoctors(data);
        else setDoctors(defaultDoctors);
      })
      .catch(() => setDoctors(defaultDoctors));

    fetch('/api/specialties')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load specialties');
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setSpecialties(data);
        else setSpecialties(defaultSpecialties);
      })
      .catch(() => setSpecialties(defaultSpecialties));
  }, []);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Full name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,}$/.test(form.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!form.department) newErrors.department = 'Please select a department';
    if (!form.appointment_date) newErrors.appointment_date = 'Please select a date';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to book appointment');

      setStatus('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        department: '',
        doctor: '',
        appointment_date: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl border bg-white transition-all outline-none focus:ring-2 focus:ring-teal-500/20 ${
      errors[field]
        ? 'border-red-300 focus:border-red-500'
        : 'border-slate-200 focus:border-teal-500'
    }`;

  return (
    <section id="appointment" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3">
              Book an Appointment
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Schedule Your Visit in Minutes
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Take the first step towards better health. Fill in your details and our
              team will confirm your appointment promptly.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: Calendar, title: 'Flexible Scheduling', desc: 'Choose a date that works for you' },
                { icon: Clock, title: 'Timely Confirmations', desc: 'Receive updates via email or SMS' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
                >
                  <item.icon className="w-8 h-8 text-teal-600 mb-3" />
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl p-8 shadow-2xl shadow-slate-200/60 border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Request Appointment</h3>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-teal-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Appointment Requested</h4>
                  <p className="text-slate-600">
                    Thank you. Our team will contact you shortly to confirm your booking.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Full Name</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass('name')}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className={inputClass('email')}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className={inputClass('phone')}
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Department</label>
                      <select
                        value={form.department}
                        onChange={(e) => setForm({ ...form, department: e.target.value })}
                        className={inputClass('department')}
                      >
                        <option value="">Select department</option>
                        {specialties.map((s) => (
                          <option key={s.id} value={s.title}>
                            {s.title}
                          </option>
                        ))}
                      </select>
                      {errors.department && <p className="mt-1 text-xs text-red-500">{errors.department}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Doctor</label>
                      <select
                        value={form.doctor}
                        onChange={(e) => setForm({ ...form, doctor: e.target.value })}
                        className={inputClass('doctor')}
                      >
                        <option value="">Any available doctor</option>
                        {doctors.map((d) => (
                          <option key={d.id} value={d.name}>
                            {d.name} — {d.specialty}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1.5">Preferred Date</label>
                      <input
                        type="date"
                        value={form.appointment_date}
                        onChange={(e) => setForm({ ...form, appointment_date: e.target.value })}
                        min={new Date().toLocaleDateString('en-CA')}
                        className={inputClass('appointment_date')}
                      />
                      {errors.appointment_date && (
                        <p className="mt-1 text-xs text-red-500">{errors.appointment_date}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">Message (optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className={inputClass('message')}
                      placeholder="Briefly describe your symptoms or concerns..."
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded-xl">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold shadow-lg shadow-blue-900/20 hover:shadow-blue-900/30 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Booking...
                      </>
                    ) : (
                      'Book Appointment'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
