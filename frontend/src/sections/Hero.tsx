import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center pt-24 px-4 border-b border-white/5">
      {/* Background Video - Absolutely positioned behind everything */}
      <FadingVideo 
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
      />

      <div className="relative z-10 flex flex-col items-center flex-1 justify-center max-w-4xl w-full text-center">
        
        {/* Headline with White Glow */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative mb-6 group"
        >
          <h1 className="text-[8rem] md:text-[10rem] lg:text-[14rem] font-display font-black text-white leading-[0.8] tracking-tighter uppercase stacked-text-shadow relative z-10 cursor-default select-none group-hover:text-white group-hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)] transition-all duration-700">
            KAIZEN
          </h1>
        </motion.div>

        {/* Subheading */}
        <motion.p
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-sm md:text-base lg:text-xl text-white/80 font-body font-light leading-relaxed max-w-2xl mx-auto"
        >
          Discover the power of continuous improvement. An elegant, cinematic system built for growth.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
          animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          <motion.button 
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.96 }}
            className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-bold font-body text-white flex items-center gap-2 hover:glow-blue transition-all duration-300 border border-white/10"
          >
            Start Your Journey
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

    </section>
  );
}
