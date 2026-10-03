import { motion } from 'framer-motion';

export default function BrandTypography() {
  const weights = [300, 400, 500, 600, 700, 800];

  return (
    <section id="typography" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
            >
              Typography
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6"
            >
              Clear, Human, Professional
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 text-lg leading-relaxed mb-8"
            >
              The brand uses Inter — a highly legible, modern sans-serif that feels
              both clinical and compassionate. It ensures clarity across digital and print
              applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: 'Primary Font', value: 'Inter' },
                { label: 'Fallback', value: 'system-ui, sans-serif' },
                { label: 'Headings', value: 'Bold, tight letter-spacing' },
                { label: 'Body', value: 'Regular, comfortable line-height' },
              ].map((item) => (
                <div key={item.label} className="flex justify-between py-3 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">{item.label}</span>
                  <span className="text-slate-900 font-semibold">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <p className="text-sm text-slate-500 mb-4">Display Heading</p>
              <p className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
                SANMARG
              </p>
              <p className="text-2xl font-bold text-blue-600 tracking-[0.2em] mt-1">
                HOSPITAL
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <p className="text-sm text-slate-500 mb-4">Body Text</p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Compassionate care meets modern medicine. Every patient interaction is
                guided by clarity, empathy, and clinical excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-3"
            >
              {weights.map((weight) => (
                <div
                  key={weight}
                  className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center"
                >
                  <span className="text-blue-700" style={{ fontWeight: weight }}>
                    Aa
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
