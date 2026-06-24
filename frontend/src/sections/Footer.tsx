
import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black pt-16 pb-8 overflow-hidden z-10">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
          <div>
            <h2 className="font-heading italic text-4xl text-white mb-2">Kaizen</h2>
            <p className="font-body text-white/50 text-sm">Growth, engineered.</p>
          </div>
          
          <div className="flex gap-12">
            <div className="flex flex-col gap-4">
              <h4 className="font-body text-white/40 text-xs uppercase tracking-widest">Platform</h4>
              <a href="#capabilities" className="font-body text-white/80 hover:text-white text-sm transition-colors">Systems</a>
              <a href="#" className="font-body text-white/80 hover:text-white text-sm transition-colors">Pricing</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-body text-white/40 text-xs uppercase tracking-widest">Connect</h4>
              <a href="#" className="font-body text-white/80 hover:text-white text-sm transition-colors flex items-center gap-1">
                Twitter <ArrowUpRight className="w-3 h-3" />
              </a>
              <a href="#" className="font-body text-white/80 hover:text-white text-sm transition-colors flex items-center gap-1">
                GitHub <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/10 font-body text-xs text-white/40">
          <p>© {new Date().getFullYear()} Kaizen. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
