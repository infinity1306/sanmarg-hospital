import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact-messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message');

      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
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

  const contactInfo = [
    { icon: MapPin, title: 'Visit Us', lines: ['SANMARG HOSPITAL', 'Baridih, Ramgarh, Jharkhand, India'] },
    { icon: Phone, title: 'Call Us', lines: ['+91 7004367388'] },
    { icon: Mail, title: 'Email Us', lines: ['sanmarghospital@gmail.com'] },
    { icon: Clock, title: 'Working Hours', lines: ['Emergency: 24/7', 'OPD: 9:00 AM - 11:00 AM & 4:00 PM - 6:00 PM'] },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Get in Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            We Are Here to Help
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mb-4">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Visit Us</h3>
            <p className="text-slate-600 text-sm">SANMARG HOSPITAL</p>
            <p className="text-slate-600 text-sm">Baridih, Ramgarh, Jharkhand, India</p>
            <a
              href="https://maps.app.goo.gl/yYE53KJhzMWea3cFA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-semibold text-teal-600 hover:text-teal-700 underline"
            >
              Get Directions on Google Maps &rarr;
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Call Us</h3>
            <p className="text-slate-600 text-sm">24/7 Helpline & Emergency</p>
            <a
              href="tel:+917004367388"
              className="inline-block mt-1 font-semibold text-slate-900 hover:text-teal-600 transition-colors"
            >
              +91 7004367388
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
            <p className="text-slate-600 text-sm">General & Patient Queries</p>
            <a
              href="mailto:sanmarghospital@gmail.com"
              className="inline-block mt-1 text-sm font-semibold text-teal-600 hover:text-teal-700 break-all"
            >
              sanmarghospital@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -6 }}
            className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Working Hours</h3>
            <p className="text-slate-600 text-sm"><strong className="text-slate-800">Emergency:</strong> 24/7 Open</p>
            <p className="text-slate-600 text-sm mt-1"><strong className="text-slate-800">OPD:</strong> 9:00 AM - 11:00 AM & 4:00 PM - 6:00 PM</p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-auto relative"
          >
            <iframe
              title="SANMARG HOSPITAL Location in Baridih, Ramgarh, Jharkhand"
              src="https://maps.google.com/maps?q=23.572691,85.443488&hl=en&z=15&output=embed"
              className="w-full h-full border-0 min-h-[350px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send a Message</h3>

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
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent</h4>
                  <p className="text-slate-600">We will get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass('email')}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className={inputClass('subject')}
                    />
                    {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={inputClass('message')}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
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
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
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
