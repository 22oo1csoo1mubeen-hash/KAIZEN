import { motion } from 'framer-motion';
import { TrendingUp, Zap, Target, Wallet } from 'lucide-react';
import { FadingVideo } from '../components/FadingVideo';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section id="dashboard" className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden py-32 px-4 border-t border-white/5">
      {/* Background Video */}
      <FadingVideo 
        src="/dashboard_video.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-30"
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display font-black text-white text-4xl md:text-6xl lg:text-[5rem] leading-none tracking-tighter uppercase stacked-text-shadow mb-6">
            Your Life at a Glance
          </h2>
          <p className="text-base text-white/60 max-w-2xl mx-auto font-body">
            Everything that matters in one unified dashboard
          </p>
        </motion.div>

        {/* Life Score - Center Widget */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute inset-0 blur-2xl bg-gradient-to-b from-cyan-500/20 to-transparent rounded-full w-64 h-64 -z-10" />
            
            <div className="glass-card-dashboard p-12 rounded-3xl border border-cyan-500/30 backdrop-blur-lg bg-black/40">
              <div className="text-center">
                <p className="text-white/60 text-xs mb-4 font-body tracking-widest uppercase">Life Score</p>
                <div className="text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
                  <AnimatedCounter value={82} />
                </div>
                <p className="text-white/80 font-body text-sm">Overall Progress & Wellness</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Dashboard Widgets Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Habit Widget - Emerald */}
          <motion.div
            variants={itemVariants}
            className="group relative h-80"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 blur-xl -z-10" />
            <div className="liquid-glass rounded-3xl p-8 h-full border border-emerald-500/20 group-hover:border-emerald-500/40 backdrop-blur-lg bg-black/40 relative z-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-emerald-500/80 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                <div className="relative w-20 h-20 rounded-full border-2 border-emerald-500/50 flex items-center justify-center group-hover:border-emerald-400 transition-colors duration-300">
                  <Zap className="w-10 h-10 text-emerald-400" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white/80 tracking-wider uppercase font-display mb-4">Habits</h3>
              <p className="text-3xl font-display font-black text-emerald-400 text-center">
                <AnimatedCounter value={5} />/<span className="text-white/40 text-xl">7</span>
              </p>
              <p className="text-xs text-white/60 font-body mt-2 text-center">Daily completion</p>
            </div>
          </motion.div>

          {/* Goals Widget - Purple */}
          <motion.div
            variants={itemVariants}
            className="group relative h-80"
          >
            <div className="liquid-glass rounded-3xl p-8 h-full border border-purple-500/20 group-hover:border-purple-500/40 backdrop-blur-lg bg-black/40 relative z-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-purple-500/80 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                <div className="relative w-20 h-20 rounded-full border-2 border-purple-500/50 flex items-center justify-center group-hover:border-purple-400 transition-colors duration-300">
                  <Target className="w-10 h-10 text-purple-400" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white/80 tracking-wider uppercase font-display mb-4">Goals</h3>
              <p className="text-3xl font-display font-black text-purple-400 text-center">
                <AnimatedCounter value={3} />
              </p>
              <p className="text-xs text-white/60 font-body mt-2 text-center">Active goals</p>
            </div>
          </motion.div>

          {/* Expense Widget - Orange */}
          <motion.div
            variants={itemVariants}
            className="group relative h-80"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500/30 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 blur-xl -z-10" />
            <div className="liquid-glass rounded-3xl p-8 h-full border border-orange-500/20 group-hover:border-orange-500/40 backdrop-blur-lg bg-black/40 relative z-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-orange-500/80 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                <div className="relative w-20 h-20 rounded-full border-2 border-orange-500/50 flex items-center justify-center group-hover:border-orange-400 transition-colors duration-300">
                  <Wallet className="w-10 h-10 text-orange-400" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white/80 tracking-wider uppercase font-display mb-4">Budget</h3>
              <p className="text-3xl font-display font-black text-orange-400 text-center">
                $<AnimatedCounter value={680} />
              </p>
              <p className="text-xs text-white/60 font-body mt-2 text-center">Spent this month</p>
            </div>
          </motion.div>

          {/* Progress Widget - Rose */}
          <motion.div
            variants={itemVariants}
            className="group relative h-80"

          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-rose-500/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-100 blur-xl -z-10" />
            <div className="liquid-glass rounded-3xl p-8 h-full border border-rose-500/20 group-hover:border-rose-500/40 backdrop-blur-lg bg-black/40 relative z-10 flex flex-col items-center justify-center cursor-pointer transition-all duration-100">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-rose-500/80 blur-3xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-100" />
                <div className="relative w-20 h-20 rounded-full border-2 border-rose-500/50 flex items-center justify-center group-hover:border-rose-400 transition-colors duration-300">
                  <TrendingUp className="w-10 h-10 text-rose-400" />
                </div>
              </div>
              <h3 className="text-sm font-bold text-white/80 tracking-wider uppercase font-display mb-4">Growth</h3>
              <p className="text-3xl font-display font-black text-rose-400 text-center">
                <AnimatedCounter value={73} suffix="%" />
              </p>
              <p className="text-xs text-white/60 font-body mt-2 text-center">Monthly progress</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="liquid-glass-strong rounded-full px-8 py-4 text-sm font-bold font-body text-white flex items-center gap-2 hover:scale-105 transition-transform duration-300 border border-white/10">
            Explore Dashboard
            <TrendingUp className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
