import { HeartPulse, ArrowUp } from 'lucide-react';

export default function BrandFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center">
              <HeartPulse className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl font-bold text-white leading-none">SANMARG</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                HOSPITAL
              </p>
            </div>
          </div>

          <p className="text-sm text-center">
            © {new Date().getFullYear()} SANMARG HOSPITAL. Brand identity presentation.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-500 transition-colors"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
