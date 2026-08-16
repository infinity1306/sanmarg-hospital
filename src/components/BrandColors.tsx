import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ColorSwatch {
  name: string;
  hex: string;
  text: string;
  desc: string;
  usage: string;
}

const colors: ColorSwatch[] = [
  {
    name: 'Primary Blue',
    hex: '#2563EB',
    text: 'text-white',
    desc: 'Trust, professionalism, care',
    usage: 'Primary buttons, links, accents',
  },
  {
    name: 'Deep Blue',
    hex: '#1E3A8A',
    text: 'text-white',
    desc: 'Authority, stability, depth',
    usage: 'Headings, footer, strong emphasis',
  },
  {
    name: 'Sky Blue',
    hex: '#0EA5E9',
    text: 'text-white',
    desc: 'Clarity, freshness, openness',
    usage: 'Highlights, icons, gradients',
  },
  {
    name: 'Soft Blue',
    hex: '#DBEAFE',
    text: 'text-slate-900',
    desc: 'Calm, clean backgrounds',
    usage: 'Section backgrounds, cards',
  },
  {
    name: 'Pure White',
    hex: '#FFFFFF',
    text: 'text-slate-900',
    desc: 'Cleanliness, space, healing',
    usage: 'Primary backgrounds, cards',
  },
  {
    name: 'Slate',
    hex: '#F8FAFC',
    text: 'text-slate-900',
    desc: 'Subtle structure, neutral ground',
    usage: 'Alternate backgrounds',
  },
];

export default function BrandColors() {
  const copyHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
  };

  return (
    <section id="colors" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-3"
          >
            Color Palette
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-5"
          >
            Calming Blue & Clean White
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg"
          >
            A trustworthy palette designed to reduce anxiety and communicate clinical excellence.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={color.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px -12px rgba(37, 99, 235, 0.2)' }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer"
              onClick={() => copyHex(color.hex)}
            >
              <div
                className={`h-36 flex items-end p-5 ${color.text}`}
                style={{ backgroundColor: color.hex }}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="font-bold text-lg">{color.hex}</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium flex items-center gap-1">
                    <Check className="w-4 h-4" /> Copy
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-slate-900 mb-1">{color.name}</h3>
                <p className="text-sm text-slate-500 mb-3">{color.desc}</p>
                <p className="text-xs font-medium text-blue-600">{color.usage}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
