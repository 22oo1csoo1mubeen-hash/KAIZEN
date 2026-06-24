import { motion } from 'framer-motion';
import { CheckCircle2, Target, Wallet } from 'lucide-react';
import { GlowOrb } from '../components/GlowOrb';
import { cn } from '../utils/cn';

const features = [
  {
    id: 'habits',
    title: 'Habit Tracking',
    description: 'Build consistency through daily habits. Track streaks, celebrate wins.',
    icon: CheckCircle2,
    color: '#34D399',
    glowClass: 'glow-emerald',
    shadowColor: 'rgba(52, 211, 153, 0.4)',
    visual: (
      <div className="flex justify-center gap-2 mt-6">
        {[true, true, true, false, true, false, false].map((done, i) => (
          <div 
            key={i} 
            className={cn(
              "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
              done 
                ? "bg-[#34D399]/20 border-[#34D399] text-[#34D399] shadow-[0_0_10px_rgba(52,211,153,0.3)]" 
                : "border-white/10 text-transparent"
            )}
          >
            {done && <CheckCircle2 className="w-4 h-4" />}
          </div>
        ))}
      </div>
    )
  },
  {
    id: 'goals',
    title: 'Goal Tracking',
    description: 'Set ambitious goals. Break them into milestones. Watch yourself grow.',
    icon: Target,
    color: '#FF6B6B',
    glowClass: 'glow-coral',
    shadowColor: 'rgba(255, 107, 107, 0.4)',
    visual: (
      <div className="mt-8 px-4">
        <div className="flex justify-between text-xs font-medium text-slate-400 mb-2">
          <span>Progress</span>
          <span className="text-white">67%</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '67%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute top-0 left-0 h-full bg-[#FF6B6B] shadow-[0_0_10px_rgba(255,107,107,0.8)]"
          />
        </div>
        <div className="flex justify-between mt-2">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="w-1 h-2 bg-white/20 rounded-full" />
          ))}
        </div>
      </div>
    )
  },
  {
    id: 'expenses',
    title: 'Expense Tracking',
    description: 'Understand your spending. Set budgets. Take control of your finances.',
    icon: Wallet,
    color: '#FF8A65',
    glowClass: 'glow-amber',
    shadowColor: 'rgba(255, 138, 101, 0.4)',
    visual: (
      <div className="mt-6 flex items-end justify-center gap-3 h-16">
        {[40, 70, 30, 85, 50].map((height, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${height}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className={cn(
              "w-8 rounded-t-sm",
              i === 3 ? "bg-[#FF8A65] shadow-[0_0_10px_rgba(255,138,101,0.5)]" : "bg-white/10"
            )}
          />
        ))}
      </div>
    )
  }
];

export function Features() {
  return (
    <section id="features" className="relative py-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Center Glow */}
      <GlowOrb color="coral" size="xl" position={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="opacity-5" />

      <div className="text-center mb-20 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
        >
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FF8A65] glow-text">Growth</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto"
        >
          Three pillars to transform your daily life.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ y: -10, boxShadow: `0 20px 40px ${feature.shadowColor}` }}
            className="glass-card p-8 group cursor-pointer relative overflow-hidden transition-all"
          >
            {/* Top Border Glow */}
            <div 
              className="absolute top-0 left-0 w-full h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: `linear-gradient(to right, transparent, ${feature.color}, transparent)` }}
            />

            <div className="relative z-10">
              <div 
                className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border border-white/10 transition-all group-hover:scale-110"
                )}
                style={{ backgroundColor: `${feature.color}1A`, borderColor: `${feature.color}33` }}
              >
                <feature.icon className="w-7 h-7 transition-colors duration-200" style={{ color: feature.color }} />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-200"
                  style={{ backgroundImage: `linear-gradient(to right, #fff, ${feature.color})` }}
              >
                {feature.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8">
                {feature.description}
              </p>
            </div>

            {/* Interactive Visual Area */}
            <div className="relative z-10 h-32 w-full rounded-xl bg-black/20 border border-white/5 overflow-hidden flex flex-col justify-end p-4">
               <div className="relative z-10 w-full">
                {feature.visual}
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
